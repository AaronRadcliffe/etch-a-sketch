// Creates a square grid, size is the number of rows or columns
function createGrid(size) {
    for ( let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row', 'flex');
        for ( let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function resetGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
    createGrid(size);
};

// Variables
let grid = document.querySelector('.grid');
let btnGridSize = document.querySelector('.gridSize');
let btnResetGrid = document.querySelector('.resetGrid');
let gridSize = 16;

// EventListeners
grid.addEventListener('mouseover', event => {
    let target = event.target;
    if(target.style.backgroundColor) {
        let lightnessArray = target.style.backgroundColor.split('(')[1].split(')')[0].split(',');
        lightnessArray.forEach((item, index) => {
            lightnessArray[index] = Math.floor(lightnessArray[index] * 0.9);
        })
        target.style.backgroundColor = `rgb(${lightnessArray[0]}, ${lightnessArray[1]}, ${lightnessArray[2]})`;
        console.log(target.style.backgroundColor, lightnessArray);
    } else {
        let randomColor = `hsl(${Math.random() * 360}, ${Math.random() * 256}%, 90%)`;
        target.style.backgroundColor = randomColor;
    }
});
btnGridSize.addEventListener('click', () => {
    gridSize = prompt('Please enter the number of squares per side (1 to 100)');
    if(gridSize < 1){
        gridSize = 1;
    } else if (gridSize > 100) {
        gridSize = 100;
    }
    resetGrid(gridSize);
});
btnResetGrid.addEventListener('click', () => {
    resetGrid(gridSize);
});

// Start the grid creation
createGrid(gridSize);
