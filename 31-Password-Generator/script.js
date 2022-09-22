const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('number');
const symbolsElement = document.getElementById('symbol');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');
const msg = document.getElementById('msg');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

// adding an event listener to the clipboard button to copy the password to the clipboard
clipboardElement.addEventListener('click', () => {

    // storing the password in a variable
    const password = resultElement.innerText;
    // checking if the password is empty
    if (!password) {
        return;
    }

    // copying the password to the clipboard
    // Resource: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
    navigator.clipboard.writeText(password);
    msg.innerText = 'Password copied to clipboard';
    // Resetting the copied message after 4 seconds
    setTimeout(() => {
        msg.innerText = '';
    }, 4000);
});

// adding an event listener to the generate button for creating a random string
generateElement.addEventListener('click', () => {
    const length = +lengthElement.value;
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;
    // calling the generatePassword function to generate a random string and storing it in a variable
    resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// function generatePassword to generate a random string
function generatePassword(lower, upper, number, symbol, length) {
    // a variable to store the final password
    let generatedPassword = '';
    // a variable to store the types of characters to be included in the password
    const typesCount = lower + upper + number + symbol;
    // an array to store the types of characters to be included in the password
    const typesArr = [{ lower }, { upper }, { number }, { symbol }, ].filter((item) => Object.values(item)[0]);

    // checking if the typesCount is 0 then return 
    if (typesCount === 0) {
        return '';
    }
    // looping through the length of the password as per the input from the user
    for (let i = 0; i < length; i += typesCount) {
        // looping through the typesArr
        typesArr.forEach((type) => {
            // getting the key of the type
            const funcName = Object.keys(type)[0];
            // adding the random character to the generatedPassword
            generatedPassword += randomFunc[funcName]();
        });
    }
    // getting the final password by slicing the generatedPassword
    const finalPassword = generatedPassword.slice(0, length);

    // returning the final password
    return finalPassword;
}
// function to get random lowercase letter
function getRandomLower() {
    return String.fromCharCode(
        Math.floor(Math.random() * 26) + 97
    );
}

// fucntion to get random uppercase letter
function getRandomUpper() {
    return String.fromCharCode(
        Math.floor(Math.random() * 26) + 65
    );
}

// function to get a random number
function getRandomNumber() {
    return String.fromCharCode(
        Math.floor(Math.random() * 10) + 48
    );
}

// function to get a random symbol
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[
        Math.floor(Math.random() * symbols.length)
    ];
}