const jokeElement =
    document.getElementById('joke');
const jokeBtn =
    document.getElementById('jokeBtn');

// addomg a click event to the button to call the generateJoke function
jokeBtn.addEventListener('click', generateJoke);
generateJoke();

// METHOD 1 - using fetch with async await

// Recommended: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
async function generateJoke() {
    // setting up a config object to pass to the fetch method and make code cleaner
    const config = {
        headers: {
            'Accept': 'application/json',
        },
    };
    // storing all the data received from the api in variable result
    const result = await fetch('https://icanhazdadjoke.com', config)
        // converting the result to json format
    const data = await result.json();
    // setting the joke element to the joke received from the api
    jokeElement.innerHTML = data.joke;
}

// METHOD 2 : using fetch without async await
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//         },
//     };

//     fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeElement.innerHTML = data.joke;
//         });
// }