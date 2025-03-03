

let headerElm = document.createElement("nav")
headerElm.className = "myMovie__nav"
headerElm.innerHTML =`
    <h1 class="myMovie__header-text">MyMovies</h1>
`

document.querySelector("header").append(headerElm)