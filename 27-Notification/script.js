const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

// Random message array
const messages = [
    'Hey, how are you?',
    'Learning HTML, CSS & Js?',
    'Follow me at @deeqakkk',
    'Hello, Im Deepak'
];

// random types array that will basically change the color of the notification
const types = ['info', 'success', 'error'];
// adding a event listener to the button, which will call createNotification function
button.addEventListener('click', () => createNotification());

// createNotification function that accepts two parameters, message and type
// if nothing is passed in the parameters, it will take null as default value
function createNotification(message = null, type = null) {
    // creating a new element 'div' and adding a class 'toast' to it
    const notif = document.createElement('div');
    notif.classList.add('toast');

    // adding a class to the notification based on the type
    notif.classList.add(type ? type : getRandomType());

    // adding the message to the notification iva  getRandonMessage function
    notif.innerText = message ? message : getRandomMessage();

    // adding the notification to the toasts div
    toasts.appendChild(notif);


    // removing the notification after 3 seconds
    setTimeout(() => {
        notif.remove();
    }, 3000);
}

// function that will return a random message from the messages array
function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

// function that will return a random type from the types array
function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}
