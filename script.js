// Time to script!
const gridContainer = document.querySelector(".grid-container");
const eraseField = document.querySelector("#erase");
const colorPicker = document.querySelector(".choose");

const fieldCount = 8;
const initialGridColor = "white";
const initialDrawingColor = "#808080";

const getRandomColor = () => {
  const rgb = Math.floor(Math.random() * 16777215).toString(16);
  return rgb;
};

const sliderVal = document.querySelector("#grid-size");
sliderVal.addEventListener("change", () => {
  let gridSizer = sliderVal.value;
  newGrid(gridSizer);
});

const newGrid = (gridSize = fieldCount) => {
  document.querySelector(".input").innerHTML = `Current size: ${gridSize}`;
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  gridContainer.innerHTML = "";

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridField = document.createElement("div");
    gridField.classList.add("active-field");
    gridField.addEventListener("mouseover", () => {
      gridField.style.backgroundColor = initialDrawingColor;
    });
    gridContainer.appendChild(gridField);
  }
};

eraseField.addEventListener("click", () => {
  let gridSizer = sliderVal.value;
  newGrid(gridSizer);
});

const rgbBtn = document.querySelector("#random");
rgbBtn.addEventListener("click", () => {
  const input = document.querySelector(".slider").value;
  const gridField = gridContainer.children;

  for (let i = 0; i < input * input; i++) {
    gridField[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `#${getRandomColor()}`;
    });
  }
});

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
