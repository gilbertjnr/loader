// CONSTANTS
const body = document.querySelector('body');
const container = document.querySelector('.container');

// When the DOM is loaded, hide the loader.
window.addEventListener('load', ()=>{
    body.classList.add('visible');
    container.classList.add('hide');
})
