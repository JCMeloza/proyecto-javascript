import { getCharacters } from "../api/rmApi.js";
import { CharacterCard } from "../components/characterCard.js";
import { router } from "../router.js";
import { SearchOption } from "../components/SearchOption.js";

let page = 1;
let activeFilters = {}; // Guarda los filtros activos (status/species)

export async function HomePage() {
  const main = document.querySelector("#main-content");
  main.innerHTML = `<p class="text-center text-gray-400">Cargando personajes...</p>`;

  try {
    const characters = await getCharacters(page);

    if (!characters || !characters.length) {
      main.innerHTML = `<p class="text-center text-red-400">Error al cargar los personajes 😢</p>`;
      return;
    }

    // 🔹 Render principal
    main.innerHTML = `
      ${SearchOption()}
      <section class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-center text-green-300">Personajes Destacados</h2>
        <div id="char-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          ${characters.map(CharacterCard).join("")}
        </div>
        <div class="mt-8 text-center">
          <button id="load-more" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Cargar Más
          </button>
        </div>
      </section>
    `;

    const grid = document.getElementById("char-grid");

    // 🔹 Navegación al detalle del personaje
    grid.addEventListener("click", (e) => {
      const card = e.target.closest("[data-id]");
      if (card) {
        const id = card.getAttribute("data-id");
        history.pushState({}, "", `/character/${id}`);
        router();
      }
    });

    // 🔹 Mostrar u ocultar dropdown del filtro
    const dropdownToggle = document.querySelector(".relative > button");
    dropdownToggle?.addEventListener("click", () => {
      const dropdown = document.querySelector(".dropdown-content");
      dropdown.classList.toggle("hidden");
    });

    // 🔹 Cerrar dropdown si se hace clic fuera
    window.addEventListener("click", (event) => {
      if (!event.target.closest(".relative")) {
        document
          .querySelectorAll(".dropdown-content")
          .forEach((dropdown) => dropdown.classList.add("hidden"));
      }
    });

    // 🔹 Lógica del botón "Aceptar" de filtros
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", async () => {
      const status =
        document.querySelector("input[name='status-filter']:checked")?.value ||
        "";
      const species =
        document.querySelector("input[name='species-filter']:checked")
          ?.value || "";

      activeFilters = { status, species }; // Guardamos filtros activos

      grid.innerHTML = `<p class="col-span-full text-center text-gray-400">Buscando personajes...</p>`;

      try {
        const filtered = await getCharacters(1, activeFilters);

        if (!filtered || filtered.length === 0) {
          grid.innerHTML = `<p class="col-span-full text-center text-gray-400 text-lg">No se encontraron resultados 😢</p>`;
          return;
        }

        page = 1; // Reiniciamos paginación al aplicar filtros
        grid.innerHTML = filtered.map(CharacterCard).join("");
      } catch (error) {
        console.error("Error al filtrar:", error);
        grid.innerHTML = `<p class="col-span-full text-center text-red-400 text-lg">Error al buscar personajes 😢</p>`;
      }
    });

    // 🔹 Lógica de "Cargar más"
    const loadBtn = document.getElementById("load-more");
    loadBtn.addEventListener("click", async () => {
      loadBtn.textContent = "Cargando...";
      page++;

      try {
        const more = await getCharacters(page, activeFilters);

        // Si no hay más personajes
        if (!more || !more.length) {
          loadBtn.textContent = "No hay más personajes";
          loadBtn.disabled = true;
          return;
        }

        grid.innerHTML += more.map(CharacterCard).join("");
        loadBtn.textContent = "Cargar Más";
      } catch (err) {
        console.error("Error al cargar más personajes:", err);
        loadBtn.textContent = "Error al cargar";
      }
    });
  } catch (error) {
    console.error(error);
    main.innerHTML = `<p class="text-center text-red-400">Error al cargar los personajes 😢</p>`;
  }
}
