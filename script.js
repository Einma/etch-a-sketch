const DEFAULT_SIZE = 8;
const COLOR = 'black';


const SLIDER = document.querySelector('#range');
const CLEAR = document.querySelector('#clear');
const INPUT_VALUE = document.querySelector('#input-value')
const RAINBOW_MODE = document.querySelector('#rainbow');
const BLACK_MODE = document.querySelector('#black');

const CANVAS = document.querySelector('#canvas');
const CELLS = document.querySelectorAll('#cell');


let rainbow = false;
let black = true;


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

fillGrid(DEFAULT_SIZE)
coloring();



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

CLEAR.addEventListener('click', () => {
    fillGrid(SLIDER.value);
    coloring();
})

RAINBOW_MODE.addEventListener('click', () => {
    rainbow = true;
    black = false;
    RAINBOW_MODE.classList.add('active');
    BLACK_MODE.classList.remove('active');
})
BLACK_MODE.addEventListener('click', () => {
    rainbow = false;
    black = true;
    RAINBOW_MODE.classList.remove('active');
    BLACK_MODE.classList.add('active');
})


function coloring() {
    CANVAS.childNodes.forEach(cell => {
        cell.addEventListener('mouseover', event => {
            if (rainbow === true && black === false) {
                const randomR = Math.floor(Math.random() * 256)
                const randomG = Math.floor(Math.random() * 256)
                const randomB = Math.floor(Math.random() * 256)
                cell.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
            } else if (rainbow === false && black === true) {
                cell.style.backgroundColor = `${COLOR}`
            }
        })
    })
}

