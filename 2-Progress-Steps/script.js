// Targetting all the classes and id's in the html file
const progress =
    document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles =
    document.querySelectorAll('.circle');

let currentActive = 1;
next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    updateDOM();
    console.log(currentActive);
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    console.log(currentActive);
    updateDOM();
});

function updateDOM() {
    // using forEach to loop through the circles and remove  & add the active class from all the circles
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
            circle.style.backgroundColor = '#FF8FB1';
            circle.style.trasition = '2s ease';
        } else {
            circle.classList.remove('active');
            circle.style.backgroundColor = 'white';
        }
    });
    // Doing some basic maths to find the width percentage of progress bar
    // which will change the width of the progress bar
    const actives =
        document.querySelectorAll('.active');
    progress.style.width =
        ((actives.length - 1) /
            (circles.length - 1)) *
        100 +
        '%';

    // if the currentActive is equal to the length of the circles then the next button will be disabled
    if (currentActive == 1) {
        prev.disabled = true;
    } else if (currentActive == circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}