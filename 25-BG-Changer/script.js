const box = document.querySelector('.box');
const text = document.querySelector('input');
const body = document.querySelector('body');
text.addEventListener('keyup', (e) => {
    const bgColor = e.target.value;
    body.style.backgroundColor = bgColor;

    setTimeout(() => {
        resetBG();
    }, 3000);
});

function resetBG() {
    body.style.backgroundColor = 'white';
    text.value = '';
}