

let divElm = document.createElement("div")
divElm.id = "root"

divElm.innerHTML = `
    <header class="myMovie__header"></header>
    <main class="myMovie__main"></main>
    <footer class="myMovie__footer"></footer>
`

document.querySelector("body").append(divElm)