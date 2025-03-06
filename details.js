/**
 * 
 * @param {string} file_path 
 * @returns {string}
 */
function getIdFromMovie(file_path) {
    return file_path
}
const baseUrl = "https://image.tmdb.org/t/p/w500"



const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTM4YjVmMjc2Y2NhNjYxMDBjZTY4NmZmNWY2MzU5OSIsIm5iZiI6MTc0MDk4NjUzOC41OCwic3ViIjoiNjdjNTU4YWFlY2UwMWNlZGExZTc1ZThjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.F916CMlJa7XgzqWq5hYZxr2S9w1G2vWMzzbiT4_BRX4'
    }
  };


let search = window.location.search
let params = new URLSearchParams(search)
let movie = params.get("movie")





fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US&page=1&append_to_response=credits`, options)


.then(function(response) {
    return response.json()
}).then(
    function(movie){
console.log(movie);

let sectionElm = document.createElement("section")
sectionElm.classList.add("full-width")
sectionElm.innerHTML =`
    <figure class="myMovie__details-figure full-width">
        <img src="${baseUrl}/${getIdFromMovie(movie.backdrop_path)}" alt="">
    </figure>
<section class="myMovie__details-article full-width">
    <h2 class="myMovie__text">${movie.original_title}</h2>
    <p class="myMovie__text-rating">${movie.vote_average.toFixed(1)}/10 IMDb</p>

<section>
    ${movie.genres.map(function(genre){
        return `
            <p>${genre.name}</p>
            `
    })}
    <p>${Math.floor(movie.runtime/60)}h ${(movie.runtime%60)}min</p>
    <p class="myMovie__text">${movie.original_language}</p>
    <h3>Description</h3>
    <p>${movie.overview}</p>
</section>

`

document.querySelector("main").append(sectionElm)
;

    })