import { getCharacters } from "../api/rmApi.js";
import { CharacterCard } from "../components/characterCard.js";
import { router } from "../router.js";

let page = 1;

export async function HomePage() {
    const main = document.querySelector("#main-content");
    main.innerHTML = `<p class="text-center text-gray-400">Cargando personajes...</p>`;

    try {
        const characters = await getCharacters(page);

        if (!characters || !characters.length) {
            main.innerHTML = `<p class="text-center text-red-400">Error al cargar los personajes 😢</p>`;
            return;
        }

        main.innerHTML = `
		<section class="max-w-6xl mx-auto  ">
			<h2 class="text-2xl font-bold mb-6 text-center text-green-300">Personajes Destacados</h2>
			<div id="char-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				${characters.map(CharacterCard).join("")}
			</div>
			<div class="mt-8 text-center">
				<button id="load-more" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Cargar Más</button>
			</div>
		</section>
	`;

        const grid = document.getElementById("char-grid");

        // Delegación de eventos para navegar al detalle desde cualquier tarjeta nueva o existente
        grid.addEventListener("click", (e) => {
            const card = e.target.closest("[data-id]");
            if (card) {
                const id = card.getAttribute("data-id");
                history.pushState({}, "", `/character/${id}`);
                router();
            }
        });
        ///////
        // Mostrar u ocultar la lista desplegable
        document.querySelector("button").addEventListener("click", function () {
            const dropdown = document.querySelector(".dropdown-content");
            dropdown.classList.toggle("hidden");
        });

        // Cerrar la lista si se hace clic fuera de ella
        window.onclick = function (event) {
            if (!event.target.closest(".relative")) {
                const dropdowns =
                    document.querySelectorAll(".dropdown-content");
                dropdowns.forEach(function (dropdown) {
                    dropdown.classList.add("hidden");
                });
            }
        };

        // Lógica de cargar más
        const loadBtn = document.getElementById("load-more");
        loadBtn.addEventListener("click", async () => {
            loadBtn.textContent = "Cargando...";
            page++;
            try {
                const more = await getCharacters(page);
                if (!more || !more.length) {
                    loadBtn.textContent = "No hay más";
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
