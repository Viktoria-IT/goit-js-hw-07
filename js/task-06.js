// вариант - 1
  
const input = document.querySelector("#validation-input");

const inputBorder = function(event) {

    input.classList.add('invalid');

    switch (event.currentTarget.value.length) {
        case Number(event.target.dataset.length):
            input.classList.replace("invalid", "valid");
            break;
        case 0:
            input.classList.remove("invalid");
            break;
    }
}

input.addEventListener('input', inputBorder);


// вариант - 2

// let input = document.getElementById('validation-input');

// let totalLenght = input.getAttribute('data-length');
// let inputlenght = parseInt(totalLenght, 10);

// input.oninput = function () {
//   if (input.value.length === inputlenght) {
//     input.classList.remove('invalid');
//     input.classList.add('valid');
//   }
//   if (input.value.length === 0) {
//     input.classList.remove('valid');
//     input.classList.remove('invalid');
//   }
//   if (
//     input.value.length !== inputlenght &&
//     input.value.length !== 0
//   ) {
//     input.classList.add('invalid');
//   }
// };
