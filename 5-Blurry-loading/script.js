const loadText = document.querySelector(
    '.loading-text'
);
const bg = document.querySelector('.bg');
let load = 0;
// calling the blurImage function every 30ms
let percent = setInterval(blurImage, 30);

// A messgae will be displayed after 3 seconds
setTimeout(() => {
    alert('Welcome to the Blurry Loading Page, refresh the page to see the loading animation again!!!');
}, 3000);

function blurImage() {
    // increment the load value from 0 to 100
    load++;
    if (load > 99) {
        clearInterval(percent);
    }
    // updating the percentage text with each function call
    loadText.innerText = `${load}%`;
    // handling the blur value of the background image
    loadText.style.opacity = scale(
        load,
        0,
        100,
        1,
        0
    );
    bg.style.filter = `blur(${scale(
        load,
        0,
        100,
        30,
        0
    )}px)`;
}
// scale function used to convert a range of values to another range of values e.g. 0 to 100 to 0 to 1
const scale = (
    num,
    in_min,
    in_max,
    out_min,
    out_max
) => {
    return (
        ((num - in_min) * (out_max - out_min)) /
        (in_max - in_min) +
        out_min
    );
};

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers