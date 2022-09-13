const canvas = document.getElementById('canvas');
const increaseBtn =
    document.getElementById('increase');
const decreaseBtn =
    document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

// initalising the size of the stroke
let size = 10;
// variable to keep a record if the mouse button is pressed or not
let isPressed = false;
// assigning the default color to start drawring with.
colorEl.value = 'black';
// Getting the value from the color picker
let color = colorEl.value;
let x;
let y;

// Handling the mouse down event which means when the mouse button is pressed first
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

// Handling the mouse up event which means when the mouse button is released
document.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

// Handling the mouse move event which means when the mouse is moved
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

// function to draw a circle
// To Know More : https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// function to draw a line
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

// Handling the size of the stroke
function updateSizeOnScreen() {
    sizeEL.innerText = size;
}

// adding a eventlistener on the "+" button to increase the size of the stroke
increaseBtn.addEventListener('click', () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    updateSizeOnScreen();
});

// adding a eventlistener on the "-" button to decrease the size of the stroke
decreaseBtn.addEventListener('click', () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }
    updateSizeOnScreen();
});

// Handling the color of the stroke with eventListener change
colorEl.addEventListener(
    'change',
    (e) => (color = e.target.value)
);

// Handling the clear button to clear the canvas
clearEl.addEventListener('click', () =>
    ctx.clearRect(0, 0, canvas.width, canvas.height)
);