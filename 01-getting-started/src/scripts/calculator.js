let n1Input = document.getElementById("num1");
let n2Input = document.getElementById("num2");
let button = document.getElementById("calculate");
let addCheckBox = document.getElementById("+");
let substractCheckBox = document.getElementById("-");
let multiplyCheckBox = document.getElementById("*");
let divideCheckBox = document.getElementById("/");
let ul = document.getElementById("ul-numbers");
// let li = document.getElementById("logs");
let num1 = 0;
let num2 = 0;



// function input1Length() {
//     return n1Input.value.length;
// }
// function input2Length() {
//     return n2Input.value.length;
// }

// function addListAfterKeyPress(event) {
//     if (input1Length() > 0 && event.keyCode === 13) {
//         createListElement();
//     }
// }

if (n1Input) {
    n1Input.addEventListener("input", updateN1);
    function updateN1(event) {
        num1 = Number(event.target.value);
        console.log(num1);
    }
}
if (n2Input) {
    n2Input.addEventListener("input", updateN2);
    function updateN2(event) {
        num2 = Number(event.target.value);
        document.getElementById("answer").value = num1 + num2;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(num1 + " + " + num2 + " = " + (Number(num1) + Number(num2))));
        ul.appendChild(li);
    }

}

if (addCheckBox) {
    addCheckBox.addEventListener("change", function () {
        if (addCheckBox.checked) {
            document.getElementById("answer").value = num1 + num2;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(num1 + " + " + num2 + " = " + ((Number(num1) + Number(num2)))));
            ul.appendChild(li);
        }
    })
}

if (substractCheckBox) {
    substractCheckBox.addEventListener("change", function () {
        if (substractCheckBox.checked) {
            document.getElementById("answer").value = num1 - num2;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(num1 + " - " + num2 + " = " + ((Number(num1) - Number(num2)))));
            ul.appendChild(li);
        }
    })
}

if (multiplyCheckBox) {
    multiplyCheckBox.addEventListener("change", function () {
        if (multiplyCheckBox.checked) {
            document.getElementById("answer").value = num1 * num2;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(num1 + " * " + num2 + " = " + ((Number(num1) * Number(num2)))));
            ul.appendChild(li);
        }
    })
}

if (divideCheckBox) {
    divideCheckBox.addEventListener("change", function () {
        if (divideCheckBox.checked) {
            document.getElementById("answer").value = num1 / num2;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(num1 + " / " + num2 + " = " + ((Number(num1) / Number(num2)))));
            ul.appendChild(li);
        }
    })
}

if (button) {
    button.addEventListener("click", function () {
        window.location.reload('#calculate');
        n1Input = "";
        n2Input = "";

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
    },

    lisenForNumber1: (num) => {
        return listen1;
    },
};

export default calculatorFunctions;