const gridContainer = document.querySelector(".grid-container");
const button = document.querySelectorAll(".btn");
const chooseColor = document.querySelector("#choose");
const eraseField = document.querySelector("#erase");
const clearAll = document.querySelector("#clear");
const startingColor = document.querySelector("#color");

// need default values for start
const fieldCount = 16;
const initialColor = "white";
const defaultMode = "color";

// mode select

//add grid

const newGrid = () => {
  const input = document.querySelector(".slider").value;
  document.querySelector(".input").innerHTML = `Current size: ${input}`;
  gridContainer.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${input}, 1fr)`;

  gridContainer.innerHTML = "";

  for (let i = 0; i < input * input; i++) {
    const gridField = document.createElement("div");
    gridField.classList.add("active-field");
    // gridField.addEventListener('mousedown', () => {
    //     changeColor();
    // })
    gridField.addEventListener("mouseover", () => {
      gridField.style.backgroundColor = "gray";
      changeColor();
    });
    gridContainer.appendChild(gridField);
  }
};

newGrid();

const changeColor = () => {
  const field = document.querySelector('active-field');
  field.classList.add('erase');
  field.style.backgroundColor = 'white';
};
