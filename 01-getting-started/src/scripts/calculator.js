var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var button = document.getElementById("calculate");
var addCheckBox = document.getElementById("+");
var substractCheckBox = document.getElementById("-");
var multiplyCheckBox = document.getElementById("*");
var divideCheckBox = document.getElementById("/");
var ul = document.getElementById("ul");
var n1i = 0;
var n2i = 0;

function input1Length() {
    return input1.value.length;
}
function input2Length() {
    return input2.value.length;
}


function addListAfterKeyPress(event) {
    if (input1Length() > 0 && event.keyCode === 13) {
        createListElement();
    }
}



n1.addEventListener("input", updateN1);
function updateN1(event) {
    n1i = Number(event.target.value);
    //    console.log(n1i); 
}

n2.addEventListener("input", updateN2);
function updateN2(event) {
    n2i = Number(event.target.value);
    // console.log(n2i);
    document.getElementById("answer").value = (Number(n1.value) + Number(n2.value));
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(n1.value + " + " + n2.value + " = " + (Number(n1.value) + Number(n2.value))));
    ul.appendChild(li);
}


addCheckBox.addEventListener("change", function () {
    if (addCheckBox.checked) {
        document.getElementById("answer").value = Number(n1.value) + Number(n2.value);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(n1.value + " + " + n2.value + " = " + (Number(n1.value) + Number(n2.value))));
        ul.appendChild(li);
    }
})

substractCheckBox.addEventListener("change", function () {
    if (substractCheckBox.checked) {
        document.getElementById("answer").value = Number(n1.value) - Number(n2.value);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(n1.value + " - " + n2.value + " = " + (Number(n1.value) - Number(n2.value))));
        ul.appendChild(li);
    }
})

multiplyCheckBox.addEventListener("change", function () {
    if (multiplyCheckBox.checked) {
        document.getElementById("answer").value = Number(n1.value) * Number(n2.value);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(n1.value + " x " + n2.value + " = " + (Number(n1.value) * Number(n2.value))));
        ul.appendChild(li);
    }
})

divideCheckBox.addEventListener("change", function () {
    if (divideCheckBox.checked) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(n1.value + " ÷ " + n2.value + " = " + (Number(n1.value) / Number(n2.value))));
        ul.appendChild(li);
    }
})

button.addEventListener("click", function () {
    n1.value = "";
    n2.value = "";
});


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