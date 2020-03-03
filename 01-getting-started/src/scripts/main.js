import functions from './functions.js';
import calculator from './Calculator.js';

let num1Input = document.getElementById('num1');
let num2Input = document.getElementById('num2');
let button = document.getElementById('calculate');
let checkmark = document.getElementsByClassName('operation-checkmark');
let num1 = 0;
let num2 = 0;
// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

if (num1Input) {
    num1Input.addEventListener('input', updateN1);
    function updateN1(event) {
        num1 = Number(event.target.value);
    }
}

if (num2Input) {
    num2Input.addEventListener('input', updateN2);
    function updateN2(event) {
        num2 = Number(event.target.value);
    }
}

const performOperation = (clickobj) => {
    let operator = clickobj.target.value;
    switch (operator) {
        case '+':
            document.getElementById("answer").value = calculator.add(num1, num2);
            break;
        case '-':
            document.getElementById("answer").value = calculator.subtract(num1, num2);;
            break;
        case '*':
            document.getElementById("answer").value = calculator.multiply(num1, num2);
            break;
        case '/':
            document.getElementById("answer").value = calculator.divide(num1, num2);
            break;
        default:
            return 'error';
            break;
    };
}
for (let i = 0; i < checkmark.length; i++) {
    checkmark[i].addEventListener('click', performOperation, false);
}

if (button) {
    button.addEventListener('click', function () {
        num1Input.value = '';
        num2Input.value = '';
        document.getElementById('answer').value = '';
        window.location.href = '#calculator';
    });
}