// favorites.js
import { CharacterCard } from "../components/characterCard.js";

export function FavoritesPage() {
  const main = document.querySelector("#main-content");
  // Es mejor usar 'let' o reasignar favorites en el listener, pero 'const' funciona si solo se modifica por filter
  const favorites = JSON.parse(localStorage.getItem("favorites")) || []; 

  // 🔹 Lógica al cargar la página (cuando no hay favoritos)
  if (favorites.length === 0) {
    // ⭐️ Mensaje al cargar la página ⭐️
    main.innerHTML = `<p class="text-center text-gray-400 mt-10 text-lg">Ya no hay más favoritos 😢</p>`;
    return;
  }

  main.innerHTML = `
    <section class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-center text-green-300">Mis Favoritos</h2>
      <div id="favorites-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        ${favorites.map(char => CharacterCard(char, favorites)).join("")}
      </div>
    </section>
  `;

  const grid = document.getElementById("favorites-grid");

  // Permitir quitar de favoritos directamente desde aquí
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".favorite-btn");
    if (!btn) return;

    const card = btn.closest("[data-id]");
    const id = Number(card.getAttribute("data-id"));
    
    // 1. Obtener la lista más reciente del localStorage para asegurarnos de que es la correcta
    let currentFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    // 2. Eliminar de la lista
    const updated = currentFavorites.filter(fav => fav.id !== id);
    
    // 3. Guardar la lista actualizada en localStorage
    localStorage.setItem("favorites", JSON.stringify(updated));
    
    // 4. Eliminar la tarjeta del DOM
    card.remove();

    // 🔹 Lógica al eliminar el último (cuando la lista actualizada está vacía)
    if (updated.length === 0) {
        // ⭐️ Mensaje al eliminar el último favorito ⭐️
        main.innerHTML = `<p class="text-center text-gray-400 mt-10 text-lg">Ya no hay más favoritos 😢</p>`;
    }
  });
}