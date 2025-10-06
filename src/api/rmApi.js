const API_URL = "https://rickandmortyapi.com/api/character";
const numero_personajas = 9;
export async function getCharacters(page = 1) {
	try {
		const response = await fetch(`${API_URL}?page=${page}`);
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
