const API_BASE = "http://localhost:5000";

function getPopular() {
    fetch(`${API_BASE}/popular`)
        .then(res => res.json())
        .then(data => {
            let html = "";
            data.results.forEach(movie => {
                html += `
                    <div class="movie">
                        <h3>${movie.title}</h3>
                        <p>Rating: ${movie.vote_average}</p>
                        <p>Release: ${movie.release_date}</p>
                    </div>
                `;
            });
            document.getElementById("popular").innerHTML = html;
        });
}

function searchMovie() {
    const query = document.getElementById("searchInput").value;

    fetch(`${API_BASE}/search/${query}`)
        .then(res => res.json())
        .then(data => {
            let html = "";
            data.results.forEach(movie => {
                html += `
                    <div class="movie">
                        <h3>${movie.title}</h3>
                        <p>Rating: ${movie.vote_average}</p>
                        <p>Release: ${movie.release_date}</p>
                    </div>
                `;
            });
            document.getElementById("results").innerHTML = html;
        });
}
