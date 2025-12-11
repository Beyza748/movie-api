async function filmAra() {
    const film = document.getElementById("filmAdi").value;

    if (!film) {
        alert("Lütfen bir film adı girin!");
        return;
    }

    const API_KEY = "demo";  // Buraya kendi OMDB API key’ini yazabilirsin
    const url = `https://www.omdbapi.com/?t=${film}&apikey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    const div = document.getElementById("filmSonuc");

    if (data.Response === "False") {
        div.innerHTML = "<p>Film bulunamadı.</p>";
        return;
    }

    div.innerHTML = `
        <h3>${data.Title}</h3>
        <p><strong>Yıl:</strong> ${data.Year}</p>
        <p><strong>Tür:</strong> ${data.Genre}</p>
        <p><strong>IMDB:</strong> ${data.imdbRating}</p>
        <img src="${data.Poster}" style="width:150px;">
    `;
}
