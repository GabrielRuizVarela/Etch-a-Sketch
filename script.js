const DEFAULT_COLOR = '#333333';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const colorPicker = document.querySelector("#colorPicker");
const eraseButton = document.querySelector("#eraseButton");
const clearButton = document.querySelector("#clearButton");
const gridSlider = document.querySelector("#gridSlider");
const sliderLabel = document.querySelector(".sizeValue");
const grid = document.querySelector(".gridContainer");

colorPicker.addEventListener("change", setCurrentColor);
clearButton.addEventListener("click",clearGrid);
eraseButton.addEventListener("click",eraseMode);
gridSlider.addEventListener("mousemove",updateLabel);
gridSlider.addEventListener("change",updateLabel);
gridSlider.addEventListener("change",changeSize);

function updateLabel(){
    value = gridSlider.value;
    sliderLabel.textContent =`${value} x ${value}`;
}

function eraseMode(){
    this.classList.toggle('active');
    if (this.classList.contains('active')){
        currentColor = 'white';
    } else{
        currentColor = colorPicker.value;
    }
}

function setupGrid(){
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
    for(i=0; i<Math.pow(gridSlider.value,2); i++){
        let gridElement = document.createElement("div");
        gridElement.classList.add("item");
        gridElement.addEventListener("mousedown",changeColor);
        gridElement.addEventListener("mouseover",changeColor);
        grid.appendChild(gridElement);
    }
}
function clearGrid(){
    grid.innerHTML= '';
    setupGrid();
}
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e,item){
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = currentColor;
}

function setCurrentColor(e){
    currentColor = e.target.value;
}

function changeSize(){
    console.log(this.value)
    currentSize = this.value;
    clearGrid();
    // setupGrid();
    // console.log(gridSlider.label)
    // .innerHTML = `${gridSlider.value} x ${gridSlider.value}`
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE)
}