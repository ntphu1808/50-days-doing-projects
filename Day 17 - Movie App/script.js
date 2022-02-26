const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c6976a2db115c91648cdc251e4217c8e"
const imgUrl ="https://image.tmdb.org/t/p/w500"
const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=c6976a2db115c91648cdc251e4217c8e&query="
const movieContainer = document.querySelector(".movies-container")
const searchEl = document.querySelector(".search")
// Please notice when working with the fetch API, whatever methods or processes are, we have to put them into the async function
// because inside the async function, any manipulations with the await keyword will cause the data waiting until we get the 
// actual data. If we put methods outside the async function let say the console.log(data) then this console.log will execute 
// before the data from fetching coming in.
getMoviesData(url)

searchEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (searchEl.value.trim() !== "") {
            movieContainer.innerHTML=``
            getMoviesData(searchUrl+searchEl.value)
            searchEl.value = ``
            searchEl.blur()
            e.preventDefault()
        } else {
            window.location.reload()
        }
    }
})
async function getMoviesData (url) {
    const response = await fetch(url)
    const data = await response.json()
    
    const movies = data.results
    movies.forEach(movie => appendMovieEl(movie));
    const ratings = document.querySelectorAll(".rating")
    ratings.forEach(rating => updateRatingColor(rating))
}
function appendMovieEl(data) {
    const movieEl = document.createElement("div")
    movieEl.classList.add("movie")
    movieEl.innerHTML = `<img class="poster" src="${imgUrl + data.poster_path}" alt="There's no poster available">
                        <div class="title-rating">
                            <h2 class="title">${data.title}</h2>
                            <span class="rating">${data.vote_average}</span>
                        </div>
                        <div class="overview">
                            <h3>Overview</h3>
                            <p class="content">${data.overview}</p>
                        </div>`
    movieContainer.appendChild(movieEl)
}
function updateRatingColor(rating) {
    if (Number(rating.innerText) >= 8) {
        rating.style.color = "green"
    } else if (Number(rating.innerText) >=5) {
        rating.style.color = "orange"
    } else {
        rating.style.color = "red"
    }
}