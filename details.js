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


let headerElm = document.createElement("nav")
headerElm.className = "myMovie__nav"
headerElm.innerHTML = `
<a href="index.html"><i class="fa-solid fa-arrow-left"></i></a>
    <div class="switch">
            <label for="switch">
            <input type="checkbox" name="switch" id="switch">
            <span class="slider"></span>
            </label>
        </div>   
         `
document.querySelector("header").append(headerElm)


fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US&page=1&append_to_response=credits,release_dates`, options)


.then(function(response) {
    return response.json()
}).then(
    function(movie){
console.log(movie);


let countryElm = "US";

function movieRating(countryElm){
    const country = movie.release_dates.results.find(
        (country) => country.iso_3166_1 === countryElm
    );
    let rating = "N/A";
    if (country){
        country.release_dates.forEach((release) =>{
            if (release.certification){
                rating = release.certification;
            }
        })
    } else {
        rating = rating;
    }
    return rating; 
}

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
    <section class="myMovie__genre-list">
    ${movie.genres.map(function(genre){
        return `
            <p class="myMovie__genre-text">${genre.name}</p>
            `
    }).join("")}
    </section>
    <p>${Math.floor(movie.runtime/60)}h ${(movie.runtime%60)}min</p>
    <p class="myMovie__text">${movie.original_language}</p>
    <p class="myMovie__text">${movieRating(countryElm)}</p>
    <h3 class="myMovie__heading-text">Description</h3>
    <p class="myMovie__text-rating">${movie.overview}</p>
</section>

<h3 class="myMovie__heading-text">Cast</h3>
<section class="myMovie__details-cast columns">
    ${movie.credits.cast.map(function(castMember){
        return `
        <div>
            <figure class="myMovie__details-figure-cast ">
                <img src="${baseUrl}${castMember.profile_path}" alt="">
            </figure>
            <p>${castMember.name}</p>
    </div>
            
        `
    }).join("")}
</section>

`

document.querySelector("main").append(sectionElm)
;

    })