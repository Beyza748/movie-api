import { searchMovies } from './services/movieService.js';

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if (!query) return;

    resultsDiv.innerHTML = "<p>Aranıyor...</p>";

    const movies = await searchMovies(query);
    
    resultsDiv.innerHTML = ""; // Temizle

    if (movies.length === 0) {
        resultsDiv.innerHTML = "<p>Sonuç bulunamadı.</p>";
        return;
    }

    movies.forEach(item => {
        const movie = item.show;
        const card = document.createElement('div');
        card.className = 'movie-card';
        
        card.innerHTML = `
            <img src="${movie.image ? movie.image.medium : 'https://via.placeholder.com/210x295?text=Resim+Yok'}" alt="${movie.name}">
            <h3>${movie.name}</h3>
            <p>Puan: ${movie.rating.average || 'Yok'}</p>
            <a href="${movie.url}" target="_blank">Detaylar</a>
        `;
        resultsDiv.appendChild(card);
    });
});
