let squareGridLength = 16;
let fillMode = 'black';
let blackIntensity = 0;

const colorModeButton = document.querySelector('.random-color-mode');
const blackModeButton = document.querySelector('.black-color-mode');
const resizeButton = document.querySelector('.resize-btn');

colorModeButton.addEventListener('click', (e) => {
  fillMode = 'color';
});

blackModeButton.addEventListener('click', (e) => {
  fillMode = 'black';
  blackIntensity = 0;
})

resizeButton.addEventListener('click', (e) => {
  squareGridLength = Number(prompt('Please enter the length of the square grid'));
  createGrid();
});


createGrid();

