export function CharacterCard(character) {
	return `
    <div 
      class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500/20 hover:scale-105 transition-transform duration-300 cursor-pointer"
      data-id="${character.id}"
    >
      <img src="${character.image}" alt="${character.name}" class="w-full h-64 object-cover" />
      <div class="p-4">
        <h2 class="text-xl font-bold text-green-400">${character.name}</h2>
        <p class="text-sm text-gray-300 mt-1"><span class="font-semibold">Estado:</span> ${character.status}</p>
        <p class="text-sm text-gray-300"><span class="font-semibold">Especie:</span> ${character.species}</p>
      </div>
    </div>
  `;
}
