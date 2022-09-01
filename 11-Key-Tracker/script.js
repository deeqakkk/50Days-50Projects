// window is the top level object in browser
const insert = document.getElementById('insert');

// adding a event listener to window object
window.addEventListener('keydown', (e) => {
    // changing the background color of the body with each button click
    document.body.style.backgroundColor =
        getRandomColor();
    insert.innerHTML = `<div class="key">
                ${e.key === ' ' ? 'space' : e.key}
                <small>event.key</small>
            </div>
            <div class="key">
                ${e.keyCode}
                <small>event.keyCode</small>
            </div>
            <div class="key">
                ${e.code}
                <small>event.code</small>
            </div>`;
});

//Resource:  https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color +=
            letters[Math.floor(Math.random() * 16)];
    }
    return color;
}