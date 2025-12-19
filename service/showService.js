export async function searchMovies(query) {
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        if (!response.ok) throw new Error("Ağ hatası!");
        return await response.json();
    } catch (error) {
        console.error("API Hatası:", error);
        return [];
    }
}
