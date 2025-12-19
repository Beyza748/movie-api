import { searchMovies } from './services/movieService.js';

const input = document.getElementById('search-input');
const btn = document.getElementById('search-btn');
const results = document.getElementById('results');

btn.addEventListener('click', async () => {
    const query = input.value.trim();
    if (!query) return;

    results.innerHTML = "<p>Aranıyor...</p>";
    const data = await searchMovies(query);
    results.innerHTML = "";

    data.forEach(item => {
        const show = item.show;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${show.image ? show.image.medium : 'https://via.placeholder.com/210x295'}" alt="${show.name}">
            <h3>${show.name}</h3>
            <p>Tür: ${show.genres.join(', ') || 'Belirtilmemiş'}</p>
        `;
        results.appendChild(card);
    });
});
