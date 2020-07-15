const gridContainer = document.getElementById('grid-container');
const build = document.getElementById('build');
const random = document.getElementById('random');
const black = document.getElementById('black');
const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');
const pink = document.getElementById('pink');
const green = document.getElementById('green');
const grayscale = document.getElementById('grayscale');
const user = document.getElementById('user');
let userChoice = document.querySelectorAll('.color');
let drawColor = 'black';

gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(16, 1fr)`;

build.onclick = () => {
    gridContainer.innerHTML = '';
    getGrid();
}

black.onclick = () =>{
    drawColor = 'black';
    hover();
}

eraser.onclick = () =>{
    drawColor = 'white';
    hover();
}

pink.onclick = ()=>{
    drawColor = '245,66,164';
    buildColor();
}

green.onclick = ()=>{
    drawColor = '21,176,37';
    buildColor();
}

rainbow.onclick = () =>{
    rainbowHover();
}

grayscale.onclick = () =>{
    randomGray();
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
    } hover();
}


random.onclick = () => {
    gridContainer.innerHTML = '';
    randomGrid();
}

function randomGrid(){
   let reset = Math.floor(Math.random()*100);
   drawColor = 'black';
   
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
    document.querySelectorAll('.squares').forEach(item=>{
        item.addEventListener('mouseover', event =>{
            item.style.backgroundColor = `${drawColor}`;
        })
    })
    document.querySelectorAll('.reset-squares').forEach(item=>{
        item.addEventListener('mouseover', event =>{
            item.style.backgroundColor = `${drawColor}`;
        })
    })
} 

function rainbowHover(){
    document.querySelectorAll('.squares').forEach(item=>{
        item.addEventListener('mouseover', event =>{
            item.style.backgroundColor = 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
        })
    })
    document.querySelectorAll('.reset-squares').forEach(item=>{
        item.addEventListener('mouseover', event =>{
            item.style.backgroundColor = 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
        })
    })
} 

function randomGray(){
    document.querySelectorAll('.squares').forEach(item=>{
        item.addEventListener('mouseover', event =>{
        let gray = Math.floor(Math.random()*255)
        item.style.backgroundColor = `rgb(${gray},${gray},${gray})`;   
        })
    })
    document.querySelectorAll('.reset-squares').forEach(item=>{
        item.addEventListener('mouseover', event =>{
            let gray = Math.floor(Math.random()*255)
            item.style.backgroundColor = `rgb(${gray},${gray},${gray})`;
        })
    })
} 

function buildColor(){
    //let opaque = 0.1;

    document.querySelectorAll('.squares').forEach(item=>{
        let opaque = 0.1;
        item.addEventListener('mouseover', event =>{
        item.style.backgroundColor = `rgb(${drawColor}, ${opaque})`;
        if (opaque < 1){
            return opaque += 0.2;
        }
        })
    })

    document.querySelectorAll('.reset-squares').forEach(item=>{
        let opaque = 0.1;
        item.addEventListener('mouseover', event =>{
        item.style.backgroundColor = `rgb(${drawColor}, ${opaque})`;
        if (opaque < 1){
            return opaque += 0.2;
        } 
        })
    })
} 