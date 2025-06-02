
import '../css/style.css';
import goblinSrc from '../img/goblin.png';

export function initializeGame() {
    setupGrid();
    setInterval(placeImage, 1000);
}

document.addEventListener('DOMContentLoaded', initializeGame);

export function setupGrid() {
    const container = document.getElementById('game-container');
    const size = 4;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
}

let currentIndex = -1;

export function getRandomItem() {
    const items = document.querySelectorAll('.grid-item');
    return items[Math.floor(Math.random() * items.length)];
}

export function placeImage() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * document.querySelectorAll('.grid-item').length);
    } while (newIndex === currentIndex);

    currentIndex = newIndex;
    const randomItem = document.querySelectorAll('.grid-item')[newIndex];
    randomItem.innerHTML = '';
    const img = document.createElement('img');
    img.src = goblinSrc;
    img.style.width = '100px';
    img.style.height = '100px';
    randomItem.appendChild(img);
}

