/**
 * 
 * @param {string} file_path 
 * @returns {string}
 */


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
sectionElm.innerHTML =`
<article>
    <p class="myMovie__text">${movie.original_title}</p>
    <p>${Math.floor(movie.runtime/60)}h ${(movie.runtime%60)}min</p>
</article>
`

document.querySelector("main").append(sectionElm)
;

    })