import { characters } from './data.js';
console.log(characters);
/* Audio intializing */
const audio = document.getElementById('audio');

const characterList = document.getElementById('character-list');
const template = document.getElementById('template');

//loop the array 
for (let character of characters) {
    console.log(characters);
    const copy = template.content.cloneNode(true);
    // find h3 , image and button elements
    const header = copy.querySelector('h2');
    const image = copy.querySelector('img');
    const button = copy.querySelector('button');
    console.log(header, image, button);
    //
    header.textContent = character.name;
    image.src = character.image;
    // subscribe to button click
    button.addEventListener('click', () => {
        audio.src = character.audio;
        audio.play();
    });

    characterList.appendChild(copy);
}

// for each character
//make a copy of the template

/* character sound connecting
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

const christmas4Sound = document.getElementById('christmas4-sound');
christmas4Sound.addEventListener('click', () => {
    audio.src = 'assets/sounds/christmas4.mp3';
    audio.play();
});

const christmas5Sound = document.getElementById('christmas5-sound');
christmas5Sound.addEventListener('click', () => {
    audio.src = 'assets/sounds/christmas5.mp3';
    audio.play();
});

const christmas6Sound = document.getElementById('christmas6-sound');
christmas6Sound.addEventListener('click', () => {
    audio.src = 'assets/sounds/christmas6.mp3';
    audio.play();
});

const christmas7Sound = document.getElementById('christmas7-sound');
christmas7Sound.addEventListener('click', () => {
    audio.src = 'assets/sounds/christmas7.mp3';
    audio.play();
});
*/

