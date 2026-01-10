const display = document.getElementById('display');
const pads = document.querySelectorAll('.drum-pad');

const sounds = {
    Q: 'Heater 1',
    W: 'Heater 2',
    E: 'Heater 3',
    A: 'Heater 4',
    S: 'Clap',
    D: 'Open-HH',
    Z: 'Kick-n-Hat',
    X: 'Kick',
    C: 'Closed-HH'
};

// Function to play sound and update display
function playSound(padKey) {
    const audio = document.getElementById(padKey);
    if (audio) {
        audio.currentTime = 0; // restart if already playing
        audio.play();
        display.innerText = sounds[padKey];
    }
}

// Click event for drum pads
pads.forEach(pad => {
    pad.addEventListener('click', () => {
        const key = pad.innerText;
        playSound(key);
    });
});

// Keydown event for keyboard
document.addEventListener('keydown', e => {
    const key = e.key.toUpperCase();
    if (sounds[key]) {
        playSound(key);
    }
});
