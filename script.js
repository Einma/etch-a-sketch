const DEFAULT_SIZE = 8;


const SLIDER = document.querySelector('#range');
const CLEAR = document.querySelector('#clear');
const INPUT_VALUE = document.querySelector('#input-value')

const CANVAS = document.querySelector('#canvas');
const CELLS = document.querySelectorAll('#cell');

fillGrid(DEFAULT_SIZE)
coloring();


CANVAS.childNodes.forEach(cell => {
    cell.addEventListener('mouseover', event => {
        cell.style = 'background-color: green'
    })
})

function clearGrid() {
    CANVAS.innerHTML = ''; //Empties the grid
}



function fillGrid(size) {
    clearGrid();
    setGrid(size);
    for (i = 0; i < size * size; i++) {
        const CELL = document.createElement('div');
        CELL.setAttribute('id', 'cell');
        CANVAS.appendChild(CELL);
    }
}

function setGrid(size) {
    CANVAS.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    CANVAS.style.gridTemplateRows = `repeat(${size}, 1fr)`
}


SLIDER.oninput = function () {
    fillGrid(this.value);
    INPUT_VALUE.textContent = `SIZE: ${this.value}`;
    coloring();
}



function coloring() {
    CANVAS.childNodes.forEach(cell => {
        cell.addEventListener('mouseover', event => {
            cell.style = 'background-color: green'
        })
    })
}

// CANVAS.childNodes.forEach(cell => {
//     cell.addEventListener('mouseover', event => {
//         cell.style = 'background-color: green'
//     })
// })




// CELLS.forEach(item => {
//     item.addEventListener('click', event => {
//         console.log('hre');
//     })
// })