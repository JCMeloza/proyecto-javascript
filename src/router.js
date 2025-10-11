import { HomePage } from "./pages/HomePage.js";
import { CharacterDetailPage } from "./pages/CharacterDetailPage.js";
import { FavoritesPage } from "./pages/FavoritesPage.js";

export function router() {
  // Elimina el prefijo /proyecto-javascript en GitHub Pages
  const base = "/proyecto-javascript";
  const path = window.location.pathname.replace(base, "");

  const main = document.getElementById("main-content");

  if (path === "/" || path === "/index.html" || path === "") {
    HomePage();
  } else if (path.startsWith("/character/")) {
    const id = path.split("/character/")[1];
    CharacterDetailPage(id);
  } else if (path === "/favorites") {
    FavoritesPage();
  } else {
    main.innerHTML = `<p class="text-center text-gray-400">Página no encontrada 😢</p>`;
  }
}
