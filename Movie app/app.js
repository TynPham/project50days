const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3b92846b32d91a3d43f1b663a727fcc2&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3b92846b32d91a3d43f1b663a727fcc2&query="';
const form = document.querySelector('form');
const search = document.querySelector('.search');
const container = document.querySelector('.container');
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovie(data.results);
}

function showMovie(movies) {
    container.innerHTML = '';

    movies.forEach(function(movie) {
        let movieEl = document.createElement('div');
        movieEl.classList.add('main');
        movieEl.innerHTML = `
            <div class="movie">
                <img src="${IMG_PATH + movie.poster_path}" alt="">
                <div class="movie-content">
                    <h3 class="movie-title">${movie.title}</h3>
                    <span class="movie-point ${getColorVote(movie.vote_average)}">${movie.vote_average}</span>
                </div>
            </div>
            <div class="overview">
                <h5>Overview</h5>
                <p>${movie.overview}</p>
            </div>
        `
        container.appendChild(movieEl);
    }) 
}

function getColorVote(vote) {
    if (vote >= 8) {
        return 'green';
    }
    else if (vote >= 5) {
        return 'orange'
    }
    else {
        return 'red';
    }
}

form.addEventListener('submit' , function(e) {
    e.preventDefault();
    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    }
    else {
        window.location.reload();
    }
})