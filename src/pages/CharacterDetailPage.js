import { getCharacterById } from "../api/rmApi.js";

export async function CharacterDetailPage(id) {
	const main = document.querySelector("#main-content");
	main.innerHTML = `<p class="text-center text-gray-400">Cargando personaje...</p>`;

	const character = await getCharacterById(id);

	if (!character) {
		main.innerHTML = `<p class="text-center text-red-400">Error al cargar personaje 😢</p>`;
		return;
	}

	main.innerHTML = `
    <section class="max-w-4xl mx-auto text-center">
        <img 
            src="${character.image}" 
            alt="${character.name}" 
            class="rounded-full mx-auto mb-6 w-55 h-55 shadow-lg"
        />
        <h2 class="text-3xl font-bold text-green-400 mb-2">${character.name}</h2>
        <p class="text-gray-300 mb-2"><span class="font-semibold">Estado:</span> ${character.status}</p>
        <p class="text-gray-300 mb-2"><span class="font-semibold">Especie:</span> ${character.species}</p>
        <p class="text-gray-300 mb-2"><span class="font-semibold">Género:</span> ${character.gender}</p>
        <p class="text-gray-300 mb-2"><span class="font-semibold">Origen:</span> ${character.origin.name}</p>
        <p class="text-gray-300 mb-4"><span class="font-semibold">Ubicación actual:</span> ${character.location.name}</p>
        <p class="text-gray-300 mb-4"><span class="font-semibold">Número de episodios donde aparece:</span> ${(character.episode).length}</p>
        
        <button 
            id="back-btn" 
            class="mt-6 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
        >
            ← Volver
        </button>
    </section>
  `;

	document.getElementById("back-btn").addEventListener("click", () => {
		history.pushState({}, "", "/");
		window.dispatchEvent(new PopStateEvent("popstate")); // volver al Home
	});
}
