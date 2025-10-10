export function initSearch() {
  const searchInput = document.getElementById("textSearch");
  if (!searchInput) return; // Si el input no existe aún, salimos

  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    const items = document.getElementsByClassName("personajes");
    const main = document.getElementById("main-content");

    if (!items.length) return; // Si no hay personajes cargados, no hacemos nada

    let visibleCount = 0;

    Array.from(items).forEach((item) => {
      const text = item.textContent || item.innerText;
      const match = text.toLowerCase().includes(filter);
      item.classList.toggle("hidden", !match);
      if (match) visibleCount++;
    });

    // Eliminar mensaje anterior si existe
    let noResults = document.getElementById("no-results-message");
    if (noResults) noResults.remove();

    // Si no hay coincidencias, mostrar mensaje
    if (visibleCount === 0 && filter.trim() !== "") {
      const message = document.createElement("p");
      message.id = "no-results-message";
      message.className =
        "text-center text-gray-400 mt-6 text-lg font-semibold";
      message.textContent = "No se encontraron resultados 😢";
      main.appendChild(message);
    }
  });
}
