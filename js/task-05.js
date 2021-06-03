const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const placeholder = (event) => {
    outputName.textContent = inputName.value === "" ? "незнакомец" : event.currentTarget.value;
};

inputName.addEventListener("input", placeholder);