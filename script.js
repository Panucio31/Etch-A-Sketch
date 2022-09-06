const gridContainer = document.querySelector('.grid-container');
const button = document.querySelectorAll('.btn');
const chooseColor = document.querySelector('#choose');
const eraseField = document.querySelector('#erase');
const clearAll = document.querySelector('#clear');
const startingColor = document.querySelector('#color');

// need default values for start
const fieldCount = 16;
const initialColor = 'gray';
const defaultMode = 'color';

// mode select


const newGrid = () => {
    const input =  document.querySelector('.slider').value;
    document.querySelector('.input').innerHTML = `Current size: ${input}`;
    gridContainer.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${input}, 1fr)`;

    for (let i = 0; i < input * input; i++) {
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

newGrid()


const changeColor = (e) => {
    if (e.type === 'mousedown' && 'mouseover') {
        e.target.style.backgroundColor = initialColor;

    }

    if (e.type === 'mousedown' && !'mouseover') {
        return;
    }

}
