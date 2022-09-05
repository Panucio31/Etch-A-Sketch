const gridContainer = document.querySelector('.grid-container');
const button = document.querySelectorAll('.btn')
const size = 0;

const newGrid = (fieldCount) => {
    gridContainer.style.gridTemplateColumns = `repeat(${fieldCount}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${fieldCount}, 1fr)`;

    for (let i = 0; i < fieldCount * fieldCount; i++) {
        const gridField = document.createElement('div');
        gridField.classList.add('active-field');
        gridField.addEventListener('mousedown', () => {
            changeColor;
        })
        gridField.addEventListener('mouseover', () => {
            changeColor
        })
        gridContainer.appendChild(gridField)
    }
}

newGrid(64)


const changeColor = () => {
    
}
