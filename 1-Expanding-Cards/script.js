// It will return you all the div(in the form of array) that have a class panel
const panels =
    document.querySelectorAll('.panel');
// we are using an arrow function here
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        // With click it will add class "active" to the clicked panel
        panel.classList.add('active');
    });
});

// function to remove the class "active" from all the panels
function removeActiveClasses() {
    // we are using the arrow function similar to line 5, but as there is only one parameter we can remove the parenthesis around "panel"
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}