import "./styles/style.css";
import { router } from './router.js'

document.querySelector("#app").innerHTML = `
    
    <main id="main-content" class="p-6"></main>
    `;
// Navegar al inicio al hacer clic en el título
document.getElementById('home-link').addEventListener('click', () => {
  history.pushState({}, '', '/')
  router()
})

// Cargar la ruta actual
router()

// Detectar navegación del historial
window.addEventListener('popstate', router)
