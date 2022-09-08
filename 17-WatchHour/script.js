// Official Docs : https://developers.themoviedb.org/3/getting-started/append-to-response
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e4534028c24f38be074511f0bb535db7&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=e4534028c24f38be074511f0bb535db7&query="'

// Getting DOM elements to script
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


// calling the getMovies function
getMovies(API_URL);

// getMovies() take a url as a parameter and return the result
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

// addeded a eventListener to form, so that whenever it gets submitted certain things happens
form.addEventListener('submit', (e) => {

    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    // Resource: https://www.w3schools.com/jsref/event_preventdefault.asp
    e.preventDefault();
    const searchTerm = search.value;
    // Certain checks before passing it to the api
    if (searchTerm && searchTerm !== '') {
        // calling the api with search_api url and given searchTerm
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
});

// returning a color on the basis of the rating of the movie
function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5 && vote < 8) {
        return 'orange';
    } else {
        return 'red';
    }
}

function showMovies(movies) {

    // It will empty the main div with each function call
    main.innerHTML = '  ';
    // traversing the movies using forEach loop
    movies.forEach(movie => {
        // Destructring the data and keeping only what we need
        const { title, poster_path, vote_average, overview } = movie;
        // creating a div 
        const movieElement = document.createElement('div');
        // adding class of 'movie' to the above created div
        movieElement.classList.add('movie');
        // adding data to the above create div with class 'movie'
        movieElement.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
           ${overview}
        </div>
        `
            // appending it so that it gets reflected on the fronpage
        main.append(movieElement);
    })
}