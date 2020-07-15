const gridContainer = document.getElementById('grid-container');
const build = document.getElementById('build');
const reset = document.getElementById('reset');
const black = document.getElementById('black');
const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');
const pink = document.getElementById('pink');
const green = document.getElementById('green');
const grayscale = document.getElementById('grayscale');
const user = document.getElementById('user');

gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(16, 1fr)`;

build.onclick = () => {
    gridContainer.innerHTML = '';
    getGrid();
}
    
function getGrid(){
    let input = document.getElementById('input').value;
    console.log(input);

    for(let i=0; i<input*input; i++){
        const squares = document.createElement('div');
        squares.classList.add('squares');
        gridContainer.appendChild(squares);
        squares.style.border = '.5px solid grey';
        squares.style.width = '100%';
        gridContainer.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    } 
}


reset.onclick = () => {
    gridContainer.innerHTML = '';
    resetSketch();
}

function resetSketch(){
   let reset = Math.floor(Math.random()*100);
    console.log(reset);

    for(let i=0; i<reset*reset; i++){
        const resetSquares = document.createElement('div');
        resetSquares.classList.add('reset-squares');
        gridContainer.appendChild(resetSquares);
        resetSquares.style.border = '.5px solid grey';
        resetSquares.style.width = '100%';
        gridContainer.style.gridTemplateColumns = `repeat(${reset}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${reset}, 1fr)`;
    } hover();
} 


function hover(){
    gridContainer.onmouseover = () => {
        squares.style.backgroundColor = 'black';
    }
}