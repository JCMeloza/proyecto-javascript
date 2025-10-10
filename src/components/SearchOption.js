export function SearchOption() {
  return `
    <div class="w-full flex justify-end items-center space-x-4">
      <div class="relative inline-block w-64">
        <!-- Botón de apertura del dropdown -->
        <button
          class="text-center w-full px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none"
        >
          Selecciona opciones
        </button>

        <!-- Contenido del dropdown -->
        <div
          class="dropdown-content absolute left-0 hidden mt-2 w-full bg-gray-800 border-gray-300 rounded-md shadow-lg z-50"
        >
          <!-- Sección Estado -->
          <div class="px-4 py-2">
            <h3 class="font-semibold text-green-500 text-lg mb-2">Estado</h3>
            <div class="space-y-2 text-white">
              <label class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="status-filter" value="alive" class="mr-2" />
                Alive
              </label>
              <label class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="status-filter" value="dead" class="mr-2" />
                Dead
              </label>
              <label class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="status-filter" value="unknown" class="mr-2" />
                Unknown
              </label>
              <label class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="status-filter" value="" class="mr-2" checked />
                Todos
              </label>
            </div>
          </div>

          <!-- Sección Especie -->
          <div class="px-4 py-2 border-t border-gray-300">
            <h3 class="font-semibold text-lg mb-2 text-green-500">Especie</h3>
            <div class="space-y-2 text-white">
              <label class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="species-filter" value="human" class="mr-2" />
                Human
              </label>
              <label class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="species-filter" value="alien" class="mr-2" />
                Alien
              </label>
              <label class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="species-filter" value="" class="mr-2" checked />
                Todos
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Botón Aceptar -->
      <button
        id="searchBtn"
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
      >
        Aceptar
      </button>
    </div>
  `;
}
