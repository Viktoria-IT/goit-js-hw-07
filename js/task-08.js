const number = document.querySelector('[type="number"]');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

function buttonBoxes() {
    boxes.innerHTML = '';

    const num = number.value;
    const items = [];

    for (let i = 1; i <= num; i += 1) {
        const createDiv = document.createElement('div');

        createDiv.style.backgroundColor = randomColorRGB();
        createDiv.style.width = (i * 10) + 20 + 'px';
        createDiv.style.height = (i * 10) + 20 + 'px';

        items.push(createDiv);
    }

    boxes.append(...items);
}

const buttonClear = () => {
    boxes.innerHTML = '';
}

function randomColorRGB() {
    const random = (min, max) => Math.round(Math.random() * (max - min) + min);

    const red = random(0, 255);
    const green = random(0, 255);
    const blue = random(0, 255);

    return `rgb(${red},${green},${blue})`;
}

btnRender.addEventListener('click', buttonBoxes);
btnDestroy.addEventListener('click', buttonClear);