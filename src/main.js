import "./styles/style.css";
import { router } from "./router.js";
import { initSearch } from "./utils/search.js";

document.querySelector("#app").innerHTML = `
    
    <main id="main-content" class="p-6"></main>
    `;
// Navegar al inicio al hacer clic en el título
document.getElementById("home-link").addEventListener("click", () => {
    history.pushState({}, "", "/");
    router();
});
// 🔹 Listener para el botón de Favoritos
const favBtn = document.querySelector('button[data-route="/favorites"]');
if (favBtn) {
    favBtn.addEventListener("click", () => {
        history.pushState({}, "", "/favorites");
        router();
    });
}
// Cargar la ruta actual
router();

// Detectar navegación del historial
window.addEventListener("popstate", router);

// Inicializar buscador global (una sola vez)
window.addEventListener("DOMContentLoaded", () => {
    initSearch(); //Esto activa el buscador global
});
