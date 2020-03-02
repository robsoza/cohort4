let n1Input = document.getElementById("num1");
let n2Input = document.getElementById("num2");
let button = document.getElementById("calculate");
let addCheckBox = document.getElementById("add-checkbox");
let substractCheckBox = document.getElementById("substract-checkbox");
let multiplyCheckBox = document.getElementById("multiply-checkbox");
let divideCheckBox = document.getElementById("divide-checkbox");
let ul = document.getElementById("ul-numbers");
let li = document.getElementById("logs");
let num1 = 0;
let num2 = 0;

if (n1Input) {
    n1Input.addEventListener("input", updateN1);
    function updateN1(event) {
        num1 = Number(event.target.value);
    }
}

if (n2Input) {
    n2Input.addEventListener("input", updateN2);
    function updateN2(event) {
        num2 = Number(event.target.value);
    }
}

if (addCheckBox) {
    addCheckBox.addEventListener("click", function () {
        if (addCheckBox.checked) {
            document.getElementById("answer").value = num1 + num2;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(num1 + " + " + num2 + " = " + ((Number(num1) + Number(num2)))));
            ul.appendChild(li);
        }
    })
}

if (substractCheckBox) {
    substractCheckBox.addEventListener("click", function () {
        if (substractCheckBox.checked) {
            document.getElementById("answer").value = num1 - num2;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(num1 + " - " + num2 + " = " + ((Number(num1) - Number(num2)))));
            ul.appendChild(li);
        }
    })
}

if (multiplyCheckBox) {
    multiplyCheckBox.addEventListener("click", function () {
        if (multiplyCheckBox.checked) {
            document.getElementById("answer").value = num1 * num2;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(num1 + " * " + num2 + " = " + ((Number(num1) * Number(num2)))));
            ul.appendChild(li);
        }
    })
}

if (divideCheckBox) {
    divideCheckBox.addEventListener("click", function () {
        console.log(divideCheckBox.checked);
        if (divideCheckBox.checked) {
            document.getElementById("answer").value = num1 / num2;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(num1 + " / " + num2 + " = " + ((Number(num1) / Number(num2)))));
            ul.appendChild(li);
        }
    })
}
console.log(li)
if (button) {
    button.addEventListener("click", function () {
        window.location.href = '#calculator';
        n1Input.value = "";
        n2Input.value = "";
        document.getElementById("answer").value = "";
            ul.remove(li);
        
    });
}

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
    }
};

export default calculatorFunctions;