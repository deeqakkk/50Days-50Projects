const content = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav li');


// traversing through each list item
listItems.forEach((item, idx) => {
    // adding event listener to each list item
    item.addEventListener('click', () => {
        // function to hide all content div initially
        hideAllContents();
        // function to remove active class from all list items
        hideAllItems();

        // adding active class to the clicked list item
        item.classList.add('active');
        // adding show class to the content div
        content[idx].classList.add('show');
    });
});

function hideAllContents() {
    // traversing through each content div and removing show class
    content.forEach((item) => {
        item.classList.remove('show');
    });
}

function hideAllItems() {
    // traversing through each list item and removing active class
    listItems.forEach((item) => {
        item.classList.remove('active');
    });
}