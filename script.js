const gridContainer = document.getElementById('grid-container');
const rebuild = document.getElementById('rebuild');
const black = document.getElementById('black');
const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');
const pink = document.getElementById('pink');
const green = document.getElementById('green');
const grayscale = document.getElementById('grayscale');

const user = document.getElementById('user');

function getGrid(){
    let input = document.getElementById('input').value;
    console.log(input);
    
    
    for(let i=0; i<input*input; i++){
        const squares = document.createElement('div');
        squares.classList.add('squares');
        gridContainer.appendChild(squares);
        squares.style.border = '1px solid grey';
        squares.style.width = '100%';

        //gridContainer.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
        //gridContainer.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    } hover();
}

function hover(){
    gridContainer.onmouseover = () => {
        let gridBoxes = document.getElementsByClassName('squares');
        gridBoxes.style.backgroundColor = 'black';
    }
}

function resetSketch(){
    window.location.reload();
}

gridContainer.style.gridRows = `repeat(${input}, 1fr)`;
gridContainer.style.gridColumn  = `repeat(${input}, 1fr)`;