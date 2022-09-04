const tagsEl = document.getElementById('tags');
const textarea =
    document.getElementById('textarea');

// This will make sure, when we land on the page, the cursor is in the textarea
textarea.focus();

// 'keyup' is an event that will fire when we release a key, and we will pass in a function that will fire when that event happens
textarea.addEventListener('keyup', (e) => {
    // 'e.target.value' will give us the value of the textarea everytime we press a key
    createTags(e.target.value);
    // Once we pres eneter, we want to clear the textarea and call a function that will pick a random tag
    if (e.key === 'Enter') {
        // it will clear the texarea after a delay of 10ms
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        // This will call the function that will pick a random tag
        randomSelect();
    }
});

function createTags(input) {
    const tags = input
        // This will split the input by commas 
        .split(',')
        // This will trim the white spaces to avoid them
        .filter((tag) => tag.trim() !== '')
        // This will map through the array and return a new array with the tags
        .map((tag) => tag.trim());

    // This will clear the tags before we add new ones to avoid the overflow/duplicates
    tagsEl.innerHTML = '';

    // This will loop through the tags and create a span for each one
    tags.forEach((tag) => {
        // span is created here
        const tagEl = document.createElement('span');
        // This will add a class(.tag) to the span
        tagEl.classList.add('tag');
        // This will add the text(tag) to the span
        tagEl.innerText = tag;
        // This will append the span to the tagsEl to render it on frontened
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30;
    // here we are converting the pickRandomTag() function to a variable
    // and calling highlightTag() and unHighlightTag() functions
    // to highlight and unhighlight the tag

    const interval = setInterval(() => {
        // This will pick a random tag
        const randomTag = pickRandomTag();

        if (randomTag !== undefined) {
            highlightTag(randomTag);

            setTimeout(() => {
                unHighlightTag(randomTag);
            }, 100);
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

// This will pick a random tag using some maths
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    // we are generating a random numver between 0 and the length of the tags
    return tags[
        Math.floor(Math.random() * tags.length)
    ];
}

// This will add a class(.highlight) to the tag
function highlightTag(tag) {
    tag.classList.add('highlight');
}

// This will remove a class(.highlight) from the tag
function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}