
import '../css/style.css';
import goblinSrc from '../img/goblin.png';

function initializeGame() {
  setupGrid();
  setInterval(placeImage, 1000); 
}

document.addEventListener('DOMContentLoaded', initializeGame);

function setupGrid() {
  const container = document.getElementById('game-container');
  const size = 4;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
  }
}

function getRandomItem() {
  const items = document.querySelectorAll('.grid-item');
  return items[Math.floor(Math.random() * items.length)];
} 

function placeImage() {
  const img = document.createElement('img');
  img.src = goblinSrc;
  img.style.width = '100px';
  img.style.height = '100px';
  
  const randomItem = getRandomItem();
  randomItem.innerHTML = ''; 
  randomItem.appendChild(img);
}



