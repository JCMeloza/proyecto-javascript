const API_URL = "https://rickandmortyapi.com/api/character";
const numero_personajas = 9;
export async function getCharacters(page = 1, filters = {}) {
    try {
        // Construir la URL base con parámetros dinámicos
        const params = new URLSearchParams();
		console.log(filters);
        params.append("page", page);

        if (filters.status) params.append("status", filters.status);
        if (filters.species) params.append("species", filters.species);

        const response = await fetch(`${API_URL}?${params.toString()}`);
        if (!response.ok) {
            throw new Error("Fallo en la conexión a la API");
        }
        const data = await response.json();
        return data.results.slice(0, numero_personajas);
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        throw error;
    }
}
export const getCharacterById = async (id) => {
    try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("Error al obtener personaje");
        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};
