//global variables

let small = 64;
let medium = 256;
let big = 1024;
let buttons = document.querySelectorAll(".btn");

function createGrid(size = medium, cssClass = "grid-container-medium", divClass = "grid-item-medium") {
    
    let container = document.getElementById("container");
    //let input = prompt("Squares by squares?");
    //let totalSquares = input*input;

    container.innerHTML = '';
    container.classList.remove("grid-container-small", "grid-container-medium", "grid-container-large");
    container.classList.add(cssClass);

    for (let index = 0; index < size; index++) {
        //let number = index + 1;
        let gridDiv = document.createElement("div");
        gridDiv.className = divClass;
        gridDiv.id = "gridItem";
        container.append(gridDiv);
    };        

    let divs = document.querySelectorAll("#gridItem");
    divs.forEach(div => {
        div.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
        })
    })
    
    divs.forEach(div => {
        div.addEventListener("click", () => {
            console.log("div clicked");
        })
    }) 
}

function changeGridSize() {
    
    buttons.forEach(button => {

        console.log(button.id)
        if (button.id === "smallGrid") {
            button.addEventListener("click", () => {
                createGrid(small, "grid-container-small", "grid-item-small");
                
                })       
            
        }

        if (button.id === "mediumGrid") {
            button.addEventListener("click", () => {
                createGrid(medium, "grid-container-medium", "grid-item-medium");
                
                })       
            
        }

        if (button.id === "largeGrid") {
            button.addEventListener("click", () => {
                createGrid(big, "grid-container-large", "grid-item-large");
                
                })       
            
        }
    })
}






function main() {
     createGrid();
     changeGridSize();
     changeBackground();
     
}

main();

