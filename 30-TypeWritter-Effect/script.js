const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');

const text = "Practicing HTML, CSS & JavaScript!!!";

let idx = 1;
let speed = 300 / speedElement.value;
writeText();

function writeText() {
    textElement.innerHTML = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
        idx = 1;
    }
    setTimeout(() => {
        writeText();
    }, speed);
}

speedElement.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
});