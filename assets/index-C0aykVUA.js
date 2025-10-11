(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://rickandmortyapi.com/api/character`,t=9;async function n(n=1,r={}){try{let i=new URLSearchParams;console.log(r),i.append(`page`,n),r.status&&i.append(`status`,r.status),r.species&&i.append(`species`,r.species);let a=await fetch(`${e}?${i.toString()}`);if(!a.ok)throw Error(`Fallo en la conexión a la API`);return(await a.json()).results.slice(0,t)}catch(e){throw console.error(`Error al obtener los personajes:`,e),e}}const r=async t=>{try{let n=await fetch(`${e}/${t}`);if(!n.ok)throw Error(`Error al obtener personaje`);return await n.json()}catch(e){return console.error(e),null}};function i(e,t=[]){let n=t.some(t=>t.id===e.id);return`
    <div 
      class="personajes relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500/20 hover:scale-105 transition-transform duration-300 cursor-pointer"
      data-id="${e.id}"
    >
      <button class="favorite-btn absolute top-2 right-2 text-red-500 text-2xl cursor-pointer">
        ${n?`❤️`:`🤍`}
      </button>
      <img src="${e.image}" alt="${e.name}" class="w-full h-64 object-cover" />
      <div class="p-4">
        <h2 class="text-xl font-bold text-green-400">${e.name}</h2>
        <p class="text-sm text-gray-300 mt-1"><span class="font-semibold">Estado:</span> ${e.status}</p>
        <p class="text-sm text-gray-300"><span class="font-semibold">Especie:</span> ${e.species}</p>
      </div>
    </div>
  `}function a(){return`
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
  `}var o=1,s={};async function c(){let e=document.querySelector(`#main-content`);e.innerHTML=`<p class="text-center text-gray-400">Cargando personajes...</p>`;try{let t=await n(o);if(!t||!t.length){e.innerHTML=`<p class="text-center text-red-400">Error al cargar los personajes 😢</p>`;return}let r=JSON.parse(localStorage.getItem(`favorites`))||[];e.innerHTML=`
      ${a()}
      <section class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-center text-green-300">Personajes Destacados</h2>
        <div id="char-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          ${t.map(e=>i(e,r)).join(``)}
        </div>
        <div class="mt-8 text-center">
          <button id="load-more" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Cargar Más
          </button>
        </div>
      </section>
    `;let c=document.getElementById(`char-grid`);c.addEventListener(`click`,e=>{let t=JSON.parse(localStorage.getItem(`favorites`))||[],n=e.target.closest(`[data-id]`);if(!n)return;let r=e.target.closest(`.favorite-btn`),i=Number(n.getAttribute(`data-id`));if(r){let e=t.findIndex(e=>e.id===i);if(e>=0)t.splice(e,1),r.textContent=`🤍`;else{let e={id:i,name:n.querySelector(`h2, h3`).textContent,image:n.querySelector(`img`).src,status:n.querySelectorAll(`p span`)[0]?.textContent||``,species:n.querySelectorAll(`p span`)[1]?.textContent||``};t.push(e),r.textContent=`❤️`}localStorage.setItem(`favorites`,JSON.stringify(t));return}history.pushState({},``,`/character/${i}`),d()}),document.querySelector(`.relative > button`)?.addEventListener(`click`,()=>{document.querySelector(`.dropdown-content`).classList.toggle(`hidden`)}),window.addEventListener(`click`,e=>{e.target.closest(`.relative`)||document.querySelectorAll(`.dropdown-content`).forEach(e=>e.classList.add(`hidden`))}),document.getElementById(`searchBtn`).addEventListener(`click`,async()=>{let e=document.querySelector(`input[name='status-filter']:checked`)?.value||``,t=document.querySelector(`input[name='species-filter']:checked`)?.value||``;s={status:e,species:t},c.innerHTML=`<p class="col-span-full text-center text-gray-400">Buscando personajes...</p>`;try{let e=await n(1,s);if(!e||e.length===0){c.innerHTML=`<p class="col-span-full text-center text-gray-400 text-lg">No se encontraron resultados 😢</p>`;return}let t=JSON.parse(localStorage.getItem(`favorites`))||[];o=1,c.innerHTML=e.map(e=>i(e,t)).join(``)}catch(e){console.error(`Error al filtrar:`,e),c.innerHTML=`<p class="col-span-full text-center text-red-400 text-lg">Error al buscar personajes 😢</p>`}});let l=document.getElementById(`load-more`);l.addEventListener(`click`,async()=>{l.textContent=`Cargando...`,o++;let e=JSON.parse(localStorage.getItem(`favorites`))||[];try{let t=await n(o,s);if(!t||!t.length){l.textContent=`No hay más personajes`,l.disabled=!0;return}c.innerHTML+=t.map(t=>i(t,e)).join(``),l.textContent=`Cargar Más`}catch(e){console.error(`Error al cargar más personajes:`,e),l.textContent=`Error al cargar`}})}catch(t){console.error(t),e.innerHTML=`<p class="text-center text-red-400">Error al cargar los personajes 😢</p>`}}async function l(e){let t=document.querySelector(`#main-content`);t.innerHTML=`<p class="text-center text-gray-400">Cargando personaje...</p>`;let n=await r(e);if(!n){t.innerHTML=`<p class="text-center text-red-400">Error al cargar personaje 😢</p>`;return}t.innerHTML=`
    <section class="max-w-4xl mx-auto text-center">
        <img 
            src="${n.image}" 
            alt="${n.name}" 
            class="rounded-full mx-auto mb-6 w-55 h-55 shadow-lg"
        />
        <h2 class="text-3xl font-bold text-green-400 mb-2">${n.name}</h2>
        <p class="text-gray-300 mb-2"><span class="font-semibold">Estado:</span> ${n.status}</p>
        <p class="text-gray-300 mb-2"><span class="font-semibold">Especie:</span> ${n.species}</p>
        <p class="text-gray-300 mb-2"><span class="font-semibold">Género:</span> ${n.gender}</p>
        <p class="text-gray-300 mb-2"><span class="font-semibold">Origen:</span> ${n.origin.name}</p>
        <p class="text-gray-300 mb-4"><span class="font-semibold">Ubicación actual:</span> ${n.location.name}</p>
        <p class="text-gray-300 mb-4"><span class="font-semibold">Número de episodios donde aparece:</span> ${n.episode.length}</p>
        
        <button 
            id="back-btn" 
            class="mt-6 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
        >
            ← Volver
        </button>
    </section>
  `,document.getElementById(`back-btn`).addEventListener(`click`,()=>{history.pushState({},``,`/`),window.dispatchEvent(new PopStateEvent(`popstate`))})}function u(){let e=document.querySelector(`#main-content`),t=JSON.parse(localStorage.getItem(`favorites`))||[];if(t.length===0){e.innerHTML=`<p class="text-center text-gray-400 mt-10 text-lg">Ya no hay más favoritos 😢</p>`;return}e.innerHTML=`
    <section class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-center text-green-300">Mis Favoritos</h2>
      <div id="favorites-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        ${t.map(e=>i(e,t)).join(``)}
      </div>
    </section>
  `,document.getElementById(`favorites-grid`).addEventListener(`click`,t=>{let n=t.target.closest(`.favorite-btn`);if(!n)return;let r=n.closest(`[data-id]`),i=Number(r.getAttribute(`data-id`)),a=(JSON.parse(localStorage.getItem(`favorites`))||[]).filter(e=>e.id!==i);localStorage.setItem(`favorites`,JSON.stringify(a)),r.remove(),a.length===0&&(e.innerHTML=`<p class="text-center text-gray-400 mt-10 text-lg">Ya no hay más favoritos 😢</p>`)})}function d(){let e=window.location.pathname,t=document.getElementById(`main-content`);if(e===`/`||e===`/index.html`)c();else if(e.startsWith(`/character/`)){let t=e.split(`/character/`)[1];l(t)}else e===`/favorites`?u():t.innerHTML=`<p class="text-center text-gray-400">Página no encontrada 😢</p>`}function f(){let e=document.getElementById(`textSearch`);e&&e.addEventListener(`input`,()=>{let t=e.value.toLowerCase(),n=document.getElementsByClassName(`personajes`),r=document.getElementById(`main-content`);if(!n.length)return;let i=0;Array.from(n).forEach(e=>{let n=(e.textContent||e.innerText).toLowerCase().includes(t);e.classList.toggle(`hidden`,!n),n&&i++});let a=document.getElementById(`no-results-message`);if(a&&a.remove(),i===0&&t.trim()!==``){let e=document.createElement(`p`);e.id=`no-results-message`,e.className=`text-center text-gray-400 mt-6 text-lg font-semibold`,e.textContent=`No se encontraron resultados 😢`,r.appendChild(e)}})}document.querySelector(`#app`).innerHTML=`
    
    <main id="main-content" class="p-6"></main>
    `,document.getElementById(`home-link`).addEventListener(`click`,()=>{history.pushState({},``,`/`),d()});var p=document.querySelector(`button[data-route="/favorites"]`);p&&p.addEventListener(`click`,()=>{history.pushState({},``,`/favorites`),d()}),d(),window.addEventListener(`popstate`,d),window.addEventListener(`DOMContentLoaded`,()=>{f()});