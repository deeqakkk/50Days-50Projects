const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

// adding event listener to toggle
toggle.addEventListener('click', () => {
    // .toggle will add a class if its not there and remove it if its there
    nav.classList.toggle('active');
})