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
