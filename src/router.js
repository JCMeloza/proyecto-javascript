import { HomePage } from "./pages/HomePage.js";
import { CharacterDetailPage } from "./pages/CharacterDetailPage.js";

export function router() {
	const path = window.location.pathname;
	const main = document.getElementById("main-content");

	if (path === "/" || path === "/index.html") {
		HomePage();
	} else if (path.startsWith("/character/")) {
		const id = path.split("/character/")[1];
		CharacterDetailPage(id);
	} else {
		main.innerHTML = `<p class="text-center text-gray-400">Página no encontrada 😢</p>`;
	}
}
