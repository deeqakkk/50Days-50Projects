const leftSide = document.querySelector('.left');
const rightSide = document.querySelector('.right');
const container = document.querySelector('.container');

// adding and removing 'hover-left' class on mouseenter and mouseleave event to the left side div
leftSide.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});
leftSide.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
})

// adding and removing 'hover-left' class on mouseenter and mouseleave event to the right side div
rightSide.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});
rightSide.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
})
