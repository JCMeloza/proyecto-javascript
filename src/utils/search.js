export function initSearch() {
    const searchInput = document.getElementById("textSsearch");
    if (!searchInput) return; // Si el input no está en el DOM, salimos

    searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();
        const items = document.getElementsByClassName("personajes");

        Array.from(items).forEach((item) => {
            const text = item.textContent || item.innerText;
            item.classList.toggle(
                "hidden",
                !text.toLowerCase().includes(filter)
            );
        });
    });
}
