const number1 = document.getElementById("usernum1");
const number2 = document.getElementById("usernum2");
const add = document.getElementById("+");
const subtract = document.getElementById("-");
const multiply = document.getElementById("*");
const divide = document.getElementById("/");
const calc = document.getElementById("calculate");
const result = document.getElementById("result");


var myint;

number1.addEventListener("click", function () {
    if (input.value.length > 0) {
        console.log(Number(input.value) + 1);
        myint = input.value;
       // console.log(size());
    }
})


const calculatorFunctions = {

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        return num1 / num2;
    },

    lisenForNumber1: (num) => {
        return listen1;
    },
};

number1.addEventListener("click", function () {
    if (input.value.length > 0) {
        return input.value;
    }
});

export default calculatorFunctions;