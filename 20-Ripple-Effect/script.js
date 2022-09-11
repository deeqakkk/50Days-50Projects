const buttons = document.querySelectorAll('.ripple');

// Idea :
// we have a button and on each click we will render a circle element
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        // it will gives us where it starts from the top
        const buttonTop = e.target.offsetTop;
        // it will gives us where it starts from the left
        const buttonLeft = e.target.offsetLeft;

        // It will give us the position of the click as it is relative to the button
        const xInside = x - buttonLeft;

        const yInside = y - buttonTop;

        // creating a span element
        const circle = document.createElement('span');
        // adding a class to the span element
        circle.classList.add('circle');

        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        // appending the span element to the button
        e.target.appendChild(circle);


        // removing the span element after 3000ms because with each click we are creating a new span element
        setTimeout(() => {
            circle.remove();
        }, 3000);

    })
})