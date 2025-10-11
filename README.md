# 🧬 Rick and Morty Explorer

Aplicación web **SPA (Single Page Application)** creada con **Vite**, **JavaScript** y **Tailwind CSS**, que consume la [Rick and Morty API](https://rickandmortyapi.com/) para explorar personajes, episodios y localizaciones del universo de la serie.

---

## 🚀 Características Principales

✅ **Listado de Personajes**
- Muestra personajes con su imagen, nombre, especie y estado.
- Diseño responsive tipo galería.

✅ **Búsqueda y Filtrado**
- Buscador en tiempo real para filtrar personajes por nombre.
- Filtros por estado o especie (extensible).
- Función de búsqueda reutilizable (`utils/search.js`).

✅ **Detalle del Personaje**
- Al hacer clic en un personaje se muestra su información completa:
  - Estado, especie, género, origen, ubicación actual.
  - (Opcional) Episodios en los que aparece.

✅ **SPA con Router Propio**
- Navegación dinámica sin recargar la página (`router.js`).
- Rutas:
  - `/` → Home
  - `/character/:id` → Detalle del personaje

✅ **Diseño Moderno**
- Interfaz inspirada en la web oficial de Rick and Morty.
- Estilos creados con **Tailwind CSS**.
- Animaciones suaves y esquema de colores oscuros.

✅ **Arquitectura Escalable**
- Código modular dividido por responsabilidades.
- Fácil de mantener y extender (favoritos, episodios, etc.).

---

## 🏗️ Estructura del Proyecto

```
rick-and-morty-app/
├── index.html                 # Punto de entrada
├── vite.config.js
└── src/
    ├── main.js                # Inicializa la aplicación
    ├── router.js              # Maneja las rutas SPA
    ├── api/
    │   └── rmApi.js           # Funciones para consumir la API
    ├── components/
    │   ├── characterCard.js   # Tarjeta de personaje
    │   └── SearchOption.js    # Opciones de Busqueda

    ├── pages/
    │   ├── HomePage.js              # Listado principal de personajes
    │   ├── CharacterDetailPage.js   # Detalle de personaje
        └── FavoritesPage.js         # Página de Favoritos
    ├── utils/
    │   └── search.js          # Función reutilizable de búsqueda
    └── styles/
        └── index.css          # Configuración de Tailwind CSS
```

---

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tuusuario/rick-and-morty-app.git
cd rick-and-morty-app
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar en modo desarrollo
```bash
npm run dev
```
Abrir en el navegador:
```
http://localhost:5173
```

---

## 🧩 Dependencias principales

- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Rick and Morty API](https://rickandmortyapi.com/)

---

## 🌟 Mejoras Futuras


- [ ] Página de episodios y localizaciones.
- [ ] Animaciones adicionales con Framer Motion.
- [ ] Modo oscuro/claro dinámico.

---

## 💻 Autor

**Tu Nombre**  
 
💼 [GitHub](https://github.com/JCMeloza)

---

## 📝 Licencia

Este proyecto está bajo la licencia **MIT** — libre para usar, modificar y compartir.

---

> “Wubba Lubba Dub Dub!” 🛸 — Explora el multiverso con estilo.
