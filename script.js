async function filmAra() {
    const film = document.getElementById("filmAdi").value;

    if (!film) {
        alert("Lütfen bir film adı girin!");
        return;
    }

    // TMDB API key (ücretsiz alıyorsun)
    const API_KEY = "BURAYA_TMDB_API_KEY_YAZ"; 

    // 1) TMDB Film arama API
    const searchRes = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${film}`
    );
    const searchData = await searchRes.json();

    if (!searchData.results || searchData.results.length === 0) {
        document.getElementById("filmSonuc").textContent = "Film bulunamadı.";
        return;
    }

    // İlk bulunan film
    const movie = searchData.results[0];

    // 2) Sonuçları ekrana yaz
    document.getElementById("filmSonuc").innerHTML = `
        <h3>${movie.title}</h3>
        <p><strong>Çıkış yılı:</strong> ${movie.release_date}</p>
        <p><strong>Özet:</strong> ${movie.overview}</p>
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" style="margin-top:10px;">
    `;
}
