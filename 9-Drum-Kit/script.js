// Stroing all the sounds in an array with same name as ID and songName
const sounds = [
    'Closer',
    'Flute',
    'Mario',
    'Sarcasm',
    'Smile',
    'Vibe',
    'Kesariya',
];

// traversing the each sound and adding event listener to each sound
sounds.forEach((sound) => {
    // for each sound we are creating a new button here
    const btn = document.createElement('button');
    // after creating button, we added class 'btn' to it
    btn.classList.add('btn');
    // We are adding the sound name to the button that will be previewed
    btn.innerText = sound;
    // Handlingi the click event on each button
    btn.addEventListener('click', () => {
        // stopSound will make sure, when we click next button when already a song is being played. It will pause the first and play the second.
        stopSound();
        // Song with same ID is being played
        document.getElementById(sound).play();
    });

    // targetting the div with id 'buttons' and adding the button to it
    document
        .getElementById('buttons')
        .appendChild(btn);
});

function stopSound() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}