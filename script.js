makeGrid(16);

const grid8 = document.querySelector("#grid8"),
    grid16 = document.querySelector('#grid16'),
    grid24 = document.querySelector('#grid24'),
    grid32 = document.querySelector('#grid32'),
    reset = document.querySelector('#reset');

grid8.addEventListener('click', function() {makeGrid(8)});
grid16.addEventListener('click', function() {makeGrid(16)});
grid24.addEventListener('click', function() {makeGrid(24)});
grid32.addEventListener('click', function() {makeGrid(32)});
reset.addEventListener('click', resetGrid);

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

    const pixels = document.querySelectorAll('.pix');
    pixels.forEach(pix => {
        pix.addEventListener('mouseover', () => {
            opacityIncrement(pix);
        })
    })
}

function opacityIncrement(pix) {
    pix.style.background = "#000000";
    pix.style.opacity = parseFloat(pix.style.opacity) + 0.2;
}

function resetGrid() {
    //scode to reset grid
}