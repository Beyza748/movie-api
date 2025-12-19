export async function searchMovies(query) {
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        if (!response.ok) throw new Error("API hatası oluştu.");
        return await response.json();
    } catch (error) {
        console.error("Hata:", error);
        return [];
    }
}
