const labels = document.querySelectorAll(
    '.form-control label'
);
labels.forEach((label) => {
    label.innerHTML = label.innerText
        // split the words into an array of alphabets
        .split('')
        // map will add span and an inline css property to all the alphabets of array
        .map(
            (letter, index) =>
            `<span style="transition-delay:${
          index * 50
        }ms">${letter}</span>`
        )
        // Join the array of words back into the string
        .join('');
});

//    function of lineno 4-14 is quite complicated but simple
//    Consider we have <label>Hello</label>
//    so the above code will convert <label>Hello </label> into the following code <span style="transition-delay: 0ms">E</span>
//    <span style = "transition-delay: 50ms" > H< /span>
//     <span style = "transition-delay: 100ms" > e < /span>
//     <span style = "transition-delay: 150ms" > l < /span>
//     <span style = "transition-delay: 200ms" > l < /span>
//     <span style = "transition-delay: 250ms" > o < /span>