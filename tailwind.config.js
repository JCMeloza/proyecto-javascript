// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	// Asegúrate de que las rutas sean correctas para tu proyecto
	content: [
		"./index.html", // Si usas clases aquí
		"./src/**/*.{js,ts,jsx,tsx,html}", // Para archivos en la carpeta src
		// o si es una estructura más plana:
		// "./**/*.{js,html}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
