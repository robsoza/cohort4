import functions from './functions.js';
import calculator from './Calculator.js';
import taxCalcFunctions from './taxcalc.js';
import arraysFunctions from './arrays.js';

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const button = document.getElementById('calculate');
const checkmark = document.getElementsByClassName('operation-checkmark');
let num1 = 0;
let num2 = 0;
let result;
// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// num1 calculator eventlisteners
if (num1Input) {
    num1Input.addEventListener('input', updateN1);
    function updateN1(event) {
        num1 = Number(event.target.value);
    }
}

// num2 calculator eventlisteners
if (num2Input) {
    num2Input.addEventListener('input', updateN2);
    function updateN2(event) {
        num2 = Number(event.target.value);
        if (checkmark[0].checked) {
            document.getElementById('answer').value = calculator.add(num1, num2).toFixed(2);
        } else if (checkmark[1].checked) {
            document.getElementById('answer').value = calculator.subtract(num1, num2).toFixed(2);
        } else if (checkmark[2].checked) {
            document.getElementById('answer').value = calculator.multiply(num1, num2).toFixed(2);
        } else if (checkmark[3].checked) {
            document.getElementById('answer').value = calculator.divide(num1, num2).toFixed(2);
        }
    }
}

//  calculator operations
const performOperation = (clickobj) => {
    let operator = clickobj.target.value;
    switch (operator) {
        case '+':
            if (checkmark[0].checked)
                document.getElementById('answer').value = calculator.add(num1, num2).toFixed(2);
            break;
        case '-':
            if (checkmark[1].checked)
                document.getElementById('answer').value = calculator.subtract(num1, num2).toFixed(2);
            break;
        case '*':
            if (checkmark[2].checked)
                document.getElementById('answer').value = calculator.multiply(num1, num2).toFixed(2);
            break;
        case '/':
            if (checkmark[3].checked)
                document.getElementById('answer').value = calculator.divide(num1, num2).toFixed(2);
            break;
        default:
            return 'error';
    };
}

// loop through operatoions checkmark eventListener
for (let i = 0; i < checkmark.length; i++) {
    checkmark[i].addEventListener('input', performOperation, false);
}

// clear calculator button
if (button) {
    button.addEventListener('click', function () {
        num1Input.value = '';
        num2Input.value = '';
        num1 = '';
        num2 = '';
        document.getElementById('answer').value = '';
        window.location.href = '#calculator';
    });
}

// netincome input eventlistener
const incomeInput = document.getElementById('income');
if (incomeInput) {
    incomeInput.addEventListener('input', updateIncome);
    function updateIncome(event) {
        let netIncome = Number(event.target.value);
        document.getElementById('federal-tax-answer').value = '$ ' + taxCalcFunctions.fedTaxRates(netIncome).toFixed(2);
    }
}

// Array input eventlisteners
const arrayButtons = document.getElementsByClassName('array-buttons');
const arrayInput = document.getElementById('array-input');
if (arrayInput) {
    arrayInput.addEventListener('input', updateArray);
    function updateArray(event) {
        element = Number(event.target.value);
    }
}

if (arrayInput) {
    arrayInput.addEventListener('change', updateArrayAnswer);
    function updateArrayAnswer(event) {
        let newNum = Number(event.target.value);
        if (typeof newNum == 'number')
        document.getElementById('array-answer').value = newNum;
    }
}

// Array Operations
let element;
let numArray = [];
const arrayOperation = (clickobj) => {
    let operator = clickobj.target.value;
    switch (operator) {
        case 'push':
            result = arraysFunctions.pushArray(element, numArray)
            numArray = result[0];
            document.getElementById('array-answer').value = result[1];
            break;

        case 'show':
            document.getElementById('array-answer').value = arraysFunctions.showArray(numArray);
            break;

        case 'total':
            document.getElementById('array-answer').value = arraysFunctions.sumArray(numArray);
            break;

        case 'clear':
            document.getElementById('array-answer').value = arraysFunctions.clearArr();
            document.getElementById('array-answer').value = '';
            arrayInput.value = '';
            numArray.length = 0;
            element = '';
            break;

        default:
            return 'error';
    };
}
//console.log(arrs);
//loop through buttons for array operations
for (let i = 0; i < arrayButtons.length; i++) {
    arrayButtons[i].addEventListener('click', arrayOperation, false);
}

const provinceDictionary = {
    AB: 'Alberta',
    BC: 'British Columbia',
    MB: 'Manitoba',
    SK: 'Saskatchewan',
    NS: 'Nova Scotia',
    NB: 'New Brunswick',
    NL: 'Newfoundland and Labrador',
    PE: 'Prince Edward Island',
    ON: 'Ontario',
    QC: 'Quebec',
    NT: 'Northwest Territories',
    YT: 'Yukon',
    NU: 'Nunavut'
};

// Working with dictionaries
const lookupProvinceInput = document.getElementById('lookup-province-input');
const lookupProvinceButton = document.getElementById('lookup-province-button');
const lookupProvinceAnswer = document.getElementById('lookup-province-answer');

if (lookupProvinceButton) {
    lookupProvinceButton.addEventListener('click', function () {
        console.log('clickedddd');
        
        lookupProvinceAnswer.value = arraysFunctions.provinceLookup(lookupProvinceInput.value, provinceDictionary);
        console.log(arraysFunctions.provinceLookup(lookupProvinceInput.value));
    });
}