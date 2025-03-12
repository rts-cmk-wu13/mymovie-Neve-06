let rootElm = document.documentElement;
let switchElm = document.querySelector("#switch");
let isDarkMode = readFromLocalStorage("isDarkMode");
let browserDark = window.matchMedia("(prefers-color-scheme: dark)").matches
console.log("Matchmedia", browserDark);
console.log("localStorage", isDarkMode);

let darkState = null

if (isDarkMode == null){
    darkState = browserDark;
} else {
    darkState = isDarkMode;
}

if(darkState) {    
    console.log("Er du her på darkmode, lille ven??? :)");
    
    switchElm.checked = true
    rootElm.setAttribute("data-dark", switchElm.checked);
} 
else  {    
    console.log("fromLightMode", isDarkMode, !browserDark);
    switchElm.checked = false
    rootElm.setAttribute("data-dark", switchElm.checked);
} 

switchElm.addEventListener("change", function(){
    console.log(switchElm.checked);
    saveToLocalStorage("isDarkMode", switchElm.checked)

    if(switchElm.checked){
        rootElm.setAttribute("data-dark", switchElm.checked)
        saveToLocalStorage("isDarkMode", switchElm.checked)
    } else {
        rootElm.setAttribute("data-dark", switchElm.checked)
        saveToLocalStorage("isDarkMode", switchElm.checked)
    }
})