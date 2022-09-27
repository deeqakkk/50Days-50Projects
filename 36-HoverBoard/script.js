const container = document.getElementById('container');
// storing some random colors in an array
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

// setting the number of squares to be created
const SQUARES = 600;

// traversing through the number of squares to be created
for (let i = 0; i < SQUARES; i++) {
    // created a square div here
    const square = document.createElement('div');
    // added class of 'square' to the div
    square.classList.add('square');
    // adding event listeners to the square for mouseover and mouseout
    square.addEventListener('mouseover', () => { setColor(square); });
    square.addEventListener('mouseout', () => { removeColor(square); });
    container.appendChild(square);
}

// function setColor declaration
function setColor(element) {
    // getting a random color from the colors array
    const getRandomColor = Math.floor(Math.random() * colors.length);
    // setting the background color of the square to the random color
    element.style.background = colors[getRandomColor];
    // setting the box shadow of the square to the random color
    element.style.boxShadow = `0 0 2px ${colors[getRandomColor]}, 0 0 10px ${colors[getRandomColor]}`;

}

// function removeColor declaration
function removeColor(element) {
    // setting the background color of the square to the initial color
    element.style.background = '#1d1d1d';
    // setting the box shadow of the square to the initial color
    element.style.boxShadow = `0 0 2px #000`;

}