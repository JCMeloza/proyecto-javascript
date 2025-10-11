import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	base: '/proyecto-javascript/',
	server: {
		watch: {
			usePolling: true,
		},
	},
	plugins: [
    tailwindcss(),
  ],
});
