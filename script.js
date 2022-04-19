const gridContainer = document.querySelector(".grid-container");
for(let i=0; i<16*16; i++){gridContainer.appendChild(document.createElement("div"))}
const gridItems = gridContainer.querySelectorAll("div");
gridItems.forEach(item => item.className = "item");

function doSomething(){
    this.classList.add("hover");
}

function endSomething(){
    this.classList.remove("hover");
}

gridItems.forEach(item => item.addEventListener("mouseenter",doSomething));
gridItems.forEach(item => item.addEventListener("mouseout",endSomething));

const slider = document.querySelector("slider");
