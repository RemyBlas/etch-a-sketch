//PENDIENTE:
//- evento para activar y desactivar el evento de mouseOver así al hacer click sería como apoyar o levantar el 'lápiz'

//Init:
makeGrid(16);

//Pencil/eraser switch
let pencilMode = true
const pencilButton = document.querySelector('#pencil');
const eraserButton = document.querySelector('#eraser');
pencilButton.addEventListener('click', () => {pencilMode = true});
eraserButton.addEventListener('click', () => {pencilMode = false});

//Grid selection options
const grid8 = document.querySelector('#grid8'),
    grid16 = document.querySelector('#grid16'),
    grid24 = document.querySelector('#grid24'),
    grid32 = document.querySelector('#grid32'),
    reset = document.querySelector('#reset');

grid8.addEventListener('click', function() {makeGrid(8)});
grid16.addEventListener('click', function() {makeGrid(16)});
grid24.addEventListener('click', function() {makeGrid(24)});
grid32.addEventListener('click', function() {makeGrid(32)});
reset.addEventListener('click', resetGrid);

//Grids creation function
function makeGrid(p) {
    const grid = document.querySelector('.grid');
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    
    for (let i=0; i<p*p; i++) {
        const pix = document.createElement('div');
        pix.classList.add('pix');
        pix.style.width = grid.offsetWidth/p + 'px';
        pix.style.height = grid.offsetHeight/p + 'px';
        pix.style.opacity = 0.2;
        grid.appendChild(pix);
    }
    drawing();
}

//Drawing
function drawing() {
    const pixels = document.querySelectorAll('.pix');
    pixels.forEach(pix => {
        pix.addEventListener('mouseover', () => {
            if (pencilMode) {
                opacityIncrement(pix);
            } else {
                eraserMode(pix);
            }
        })
    })
}

function opacityIncrement(pix) {
    pix.style.background = '#000000';
    pix.style.opacity = parseFloat(pix.style.opacity) + 0.2;
}

//Erasing
function eraserMode(pix) {
    pix.style.background = '#ffffff';
    pix.style.opacity = '0.2'
}

//Reset grid
function resetGrid() {
    const totalPix = document.getElementsByClassName('pix').length;
    const currentGrid = Math.sqrt(totalPix);
    makeGrid(currentGrid);
}