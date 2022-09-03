// selecting all the required elements
const toggles = document.querySelectorAll('.faq-toggle');
// traversing through each of them and adding an event listener to manage the click event
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // with each click, we are toggling the active class
        toggle.parentNode.classList.toggle('active');
    });
})