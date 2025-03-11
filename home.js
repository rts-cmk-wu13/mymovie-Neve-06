/**
 * 
 * @param {string} file_path
 * @returns {string}
 */

function getIdFromMovie(file_path) {
    return file_path
}
const baseUrl = "https://image.tmdb.org/t/p/w500"

let showingElm = document.createElement("section")

let headerElm = document.createElement("nav")
headerElm.className = "myMovie__nav"
headerElm.innerHTML = `
    <h1 class="myMovie__header-text">MyMovies</h1>
    `
showingElm.innerHTML = `
            <section class="myMovie__heading-text">Now showing</section>
        `

document.querySelector("header").append(headerElm, showingElm)


let sectionElm = document.createElement("section")
sectionElm.className = "myMovie__list"
let popularElm = document.createElement("section")
popularElm.className = "myMovie__list-popular"






const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTM4YjVmMjc2Y2NhNjYxMDBjZTY4NmZmNWY2MzU5OSIsIm5iZiI6MTc0MDk4NjUzOC41OCwic3ViIjoiNjdjNTU4YWFlY2UwMWNlZGExZTc1ZThjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.F916CMlJa7XgzqWq5hYZxr2S9w1G2vWMzzbiT4_BRX4'
    }
};


fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&append_to_response=release_dates', options)
    .then(function (response) {
        return response.json()
    }).then(
        function (movies) {

            sectionElm.innerHTML += movies.results.map(movie => `
<article class="myMovie__container">
<figure class="myMovie__figure">
<img src="${baseUrl}/${getIdFromMovie(movie.poster_path)}" alt="">
</figure>
<h2  class="myMovie__text">${movie.original_title}</h2>
<p class="myMovie__text-rating">${movie.vote_average.toFixed(1)}/10 IMDb</p>
<a class="myMovie__text-link" href="/details.html?movie=${movie.id}"></a>
</article>

    
`).join("")
            document.querySelector("main").append(sectionElm)

        }
    )


fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(function (response) {
        return response.json()
    }).then(
        function (movies) {
            popularElm.innerHTML = `
            <section class="myMovie__heading-text">Popular</section>
        `
            popularElm.innerHTML += movies.results.map(movie => `
            <article class="myMovie__container-popular">
            <figure class="myMovie__figure">
            <img src="${baseUrl}/${getIdFromMovie(movie.poster_path)}" alt="">
            </figure>
            <h2 class="myMovie__text">${movie.original_title}</h2>
            <p class="myMovie__text-rating">${movie.vote_average.toFixed(1)}/10 IMDb</p>
            <div class="myMovie__genre-list">
            ${movie.genre_ids.map(genre_id =>{
                let currentGenre = genres.find(genre => genre.id == genre_id)
                return `<p class="myMovie__genre-text">${currentGenre.name}</p>`
            }).join("   ")}
            </div>
            <a class="myMovie__text-link" href="/details.html?movie=${movie.id}"></a>
            </article>
            
                
            `).join("")
            document.querySelector("main").append(popularElm)
        })
