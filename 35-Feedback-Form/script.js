const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
    // checking if classlist contains 'rating' class and 
    if (e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        // calling the removeActive function
        removeActive();
        // targetting the parent node and adding class 'active' to it
        e.target.parentNode.classList.add('active');
        // selectting the <small> using the nextElementSibling property
        selectedRating = e.target.nextElementSibling.innerHTML;
    }

});

// adding event listener to the send button
sendBtn.addEventListener('click', (e) => {
    // adding content to the panel
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

// function to remove active class from all the rating elements
function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        // removing class 'active' from element
        ratings[i].classList.remove('active');
    }
}