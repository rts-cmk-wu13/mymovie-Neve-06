/**
 *  @typedef  {string | number | boolean | object | any[] } LocalStorageData to be saved in localStorage
 */
 
/**
 *
 * @param {string} key - key to be used in local storage
 * @param {string | number | boolean | object | any[] } value - value to be saved
 * @returns {string}
 */
function saveToLocalStorage(key, value){
 
    localStorage.setItem(key, JSON.stringify(value))
    return "Data was saved with the key" + key
}
 
 
/**
 *
 * @param {string} key
 * @returns {string | number | boolean | object | any[] }
 */
function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}
 
/**
 *
 * @param {string} key
 * @returns
 */
function deleteFromLocalStorage(key) {
    localStorage.removeItem(key)
    return "The element with key " + key + " was deleted";
}