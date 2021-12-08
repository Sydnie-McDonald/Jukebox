import { characters } from './data.js';
console.log(characters);
/* Audio initializing */
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
};