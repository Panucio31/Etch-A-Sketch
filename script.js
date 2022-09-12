const gridContainer = document.querySelector(".grid-container");
const button = document.querySelectorAll(".btn");
const chooseColor = document.querySelector("#choose");
const eraseField = document.querySelector("#erase");
const startingColor = document.querySelector("#color");
const colorPicker = document.querySelector(".choose");

// need default values for start
const fieldCount = 16;
const initialGridColor = "white";
const initialDrawingColor = "#808080";
const defaultMode = "color";

// get rgb random

const randomColor = () => {
  const rgb = Math.floor(Math.random()*16777215).toString(16);
  return rgb;
}

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
    gridField.addEventListener("mouseover", () => {
      gridField.style.backgroundColor = initialDrawingColor;
    });

    gridContainer.appendChild(gridField);
  }

};

// delete grid container content

eraseField.addEventListener("click", () => {
  const input = document.querySelector(".slider").value;
  const gridField = gridContainer.children;

  for (let i = 0; i < input * input; i++) {
    gridField[i].style.backgroundColor = initialGridColor;
  }
});

// implement random rgb 
const rgbBtn = document.querySelector('#random');
rgbBtn.addEventListener('click', () => {
  const input = document.querySelector(".slider").value;
  const gridField = gridContainer.children;

  for (let i = 0; i < input * input; i++) {
    gridField[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `#${randomColor()}`;
    });
  }
})

// change color
colorPicker.addEventListener("input", () => {
  const input = document.querySelector(".slider").value;
  const newColor = document.querySelector(".choose").value;
  const gridField = gridContainer.children;

  for (let i = 0; i < input * input; i++) {
    gridField[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = newColor;
    });
  }
});

newGrid();
