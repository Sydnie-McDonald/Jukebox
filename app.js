import { characters } from './data.js';
console.log(characters);

const audio = document.getElementById('audio');

const spongebobSound = document.getElementById('spongebob-sound');
spongebobSound.addEventListener('click', () => {
    audio.src = 'assets/sounds/spongebob.mp3';
    audio.play();
});

const spriteSound = document.getElementById('among-sound');
spriteSound.addEventListener('click', () => {
    audio.src = 'assets/sounds/among.mp3';
    audio.play();
});

const timmySound = document.getElementById('timmy-sound');
timmySound.addEventListener('click', () => {
    audio.src = 'assets/sounds/timmy.mp3';
    audio.play();
});
const ninjaSound = document.getElementById('ninja-sound');
ninjaSound.addEventListener('click', () => {
    audio.src = 'assets/sounds/ninja.mp3';
    audio.play();
});

const princessSound = document.getElementById('princess-sound');
princessSound.addEventListener('click', () => {
    audio.src = 'assets/sounds/princess.mp3';
    audio.play();
});

const christmasRed = document.getElementById('christmas-sound');
christmasRed.addEventListener('click', () => {
    audio.src = 'assets/sounds/christmas.mp3';
    audio.play();
});
const christmas2Sound = document.getElementById('christmas2-sound');
christmas2Sound.addEventListener('click', () => {
    audio.src = 'assets/sounds/christmas2.mp3';
    audio.play();
});
const christmas3Sound = document.getElementById('christmas3-sound');
christmas3Sound.addEventListener('click', () => {
    audio.src = 'assets/sounds/christmas3.mp3';
    audio.play();
});


