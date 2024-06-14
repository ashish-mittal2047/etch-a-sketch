let squareGridLength = 16;
let fillMode = 'black';
let blackIntensity = 0;
const pixelCountInLength = 600;

const colorModeButton = document.querySelector('.random-color-mode');
const blackModeButton = document.querySelector('.black-color-mode');
const resizeButton = document.querySelector('.resize-btn');
const buttonContainer = document.querySelector('.btn-container');
const gridContainer = document.querySelector('.container');

colorModeButton.addEventListener('click', (e) => {
  fillMode = 'color';
});

blackModeButton.addEventListener('click', (e) => {
  fillMode = 'black';
  blackIntensity = 0;
})

resizeButton.addEventListener('click', (e) => {
  do {
    squareGridLength = Number(prompt('Please enter the length of the square grid'));
    if (squareGridLength <= 0 || squareGridLength > 100)
      alert('Input must be between 1 and 100');
  }
  while (squareGridLength <= 0 || squareGridLength > 100);

  const outerDivList = document.querySelectorAll('.container>div');
  for (let outerDiv of outerDivList) {
    gridContainer.removeChild(outerDiv);
  }
  createGrid();
});

function createGrid() {
  for (let i = 0; i < squareGridLength; i++) {
    let outerDiv = document.createElement('div');
    outerDiv.style.width = `${pixelCountInLength}px`;
    outerDiv.style.height = `${pixelCountInLength / squareGridLength}px`;
    for (let j = 0; j < squareGridLength; j++) {
      let innerDiv = document.createElement('div');
      innerDiv.style.height = `${pixelCountInLength / squareGridLength}px`;
      innerDiv.style.width = `${pixelCountInLength / squareGridLength}px`;
      innerDiv.addEventListener('mouseover', (e) => {
        if (fillMode === 'black') {
          blackIntensity += 1;
          innerDiv.style.backgroundColor = `rgba(0,0,0,${blackIntensity * (0.1)}`;
          if (blackIntensity === 10) {
            blackIntensity %= 10;
          }
        }
        else {
          innerDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        }
      });
      outerDiv.appendChild(innerDiv);
    }
    gridContainer.appendChild(outerDiv);
  }
}

createGrid();

