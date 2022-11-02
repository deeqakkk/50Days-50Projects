const bodyElement = document.querySelector('body');

bodyElement.addEventListener('mousemove', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const spanElement = document.createElement('span');
    spanElement.style.left = x + 'px';
    spanElement.style.top = y + 'px';
    const heartSize = randomNumber() + 'px';
    spanElement.style.width = heartSize;
    spanElement.style.height = heartSize;
    bodyElement.appendChild(spanElement);
    setTimeout(() => {
        spanElement.remove();
    }, 3000);

})

function randomNumber() {
    return Math.floor(Math.random() * 100);
}