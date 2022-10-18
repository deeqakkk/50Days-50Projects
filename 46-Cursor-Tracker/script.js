const balls = document.getElementsByClassName('ball');
document.onmousemove = function() {
    // get the horizontal position of the mouse divided by the width of the window
    let x = event.clientX * 100 / window.innerWidth + "%";
    // get the vertical position of the mouse divided by the height of the window
    let y = event.clientY * 100 / window.innerHeight + "%";
    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ",-" + y + ")";
    }
}