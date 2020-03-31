import { Account, AccountController } from './account.js'
import domFunc from './domFunc.js'

const control = new AccountController;
const accHistory = document.getElementById('acc-history');
const txnAcc = document.getElementById('txn-acc');
let initAmount = 0;
let newAccName = '';
let accTotal;
let biggest;
let smallest;
let newAcc;

// input initial amount eventListenner
window.addEventListener('change', (e) => {
  if (e.target.id === 'id-init-amount-input') {
    domFunc.deleteNumErrorMsg();
    // assign the input to initAmount
    initAmount = e.target.value;
    // check if it's a number
    initAmount = domFunc.isAnum(initAmount);
    if (initAmount === 'error') {
      domFunc.showNumErrorMsg();
    }
  } else {
    domFunc.deleteNumErrorMsg();
    return initAmount;
  }
});

// Input account name eventListenner
window.addEventListener('change', (e) => {
  if (e.target.id === 'id-acc-name-input') {
    domFunc.deleteNumErrorMsg();
    // assign the input to initAmount
    newAccName = e.target.value;
    // check if acc exists
    newAccName = newAccName.toUpperCase();
    newAccName = control.isNewAcc(newAccName);
    if (newAccName === 'ERROR' || newAccName === '') {
      domFunc.showStrErrorMsg();
    }
  } else {
    domFunc.deleteStrErrorMsg();
    return newAccName;
  }
});

// button new acc eventListener
window.addEventListener('click', (e) => {
  if (e.target.id === 'button4') {
    domFunc.deleteStrErrorMsg();
    // check if it's a number
    initAmount = domFunc.isAnum(initAmount);
    if (initAmount === 'error') {
      domFunc.showNumErrorMsg();
    }

    // check if the account exists
    newAccName = newAccName.toUpperCase();
    newAccName = control.isNewAcc(newAccName);
    if (newAccName === 'ERROR' || newAccName === '') {
      domFunc.showStrErrorMsg();
    }

    // if inputs are valid create new account
    else if (newAccName != 'ERROR' && newAccName != '' && initAmount != 'error' && initAmount != '') {

      newAcc = new Account(newAccName, initAmount);
      control.addAcc(newAcc);

      // append new acc to history list
      let accItem = document.createElement('li');
      accItem.className = newAccName + 'myAppend';
      accItem.innerText = newAcc.show();


      let span = document.createElement('span');
      let txt = document.createTextNode('\u00D7');
      span.className = 'close';
      span.appendChild(txt);
      accItem.appendChild(span);
      accHistory.appendChild(accItem);

      // append option to pulldown list
      let selectAcc = document.createElement('option');
      selectAcc.value = newAccName;
      selectAcc.textContent = newAccName;
      selectAcc.className = newAccName + 'myAppend';
      txnAcc.appendChild(selectAcc);

      // Add summary
      showSummary();

      // reset inputs
      document.getElementById('id-init-amount-input').value = '';
      document.getElementById('id-acc-name-input').value = '';
      initAmount = '';
      newAccName = '';
    }
  }
});
console.log(control.accs);
// Click on a close button to hide the current list item
window.addEventListener('click', (e) => {
  if (e.target.className === 'close') {
    let removeItems = document.getElementsByClassName(e.target.parentElement.className);
    for (let i = 0; i < removeItems.length; i++) {
      removeItems[i].style.display = "none";
      let deleteAccName = e.target.parentElement.className.slice(0, -8);
      control.deleteAcc(deleteAccName);
      showSummary();
    }
  }
});

function showSummary() {
  accTotal = document.getElementById('current-balance');
  accTotal.textContent = '$' + control.accsTotal();
  biggest = document.getElementById('biggest-acc');
  biggest.textContent = control.biggestAcc();
  smallest = document.getElementById('smallest-acc');
  smallest.textContent = control.smallestAcc();
}
// console.log(control.accsTotal());
// transaction btn event listener


let txnSelectedAcc;
window.addEventListener('change', (e) => {
  if (e.target.id === 'txn-acc') {
    txnSelectedAcc = document.getElementById(e.target.id);
    console.log(txnSelectedAcc.value);
  }
});

let txnSelectedType;
window.addEventListener('change', (e) => {
  if (e.target.id === 'transactions') {
    txnSelectedType = document.getElementById(e.target.id);
    console.log(txnSelectedType.value);
  }
});

let changeAcc = control.accs.find((el) => {return el.name === txnSelectedAcc});
console.log(changeAcc);
console.log(control.accs);

window.addEventListener('click', (e) => {
  if (e.target.id === 'button5') {
    let txnAmountInput = document.getElementById('txn-amount-input');
    txnAmountInput = txnAmountInput.value;
    txnAmountInput = domFunc.isAnum(txnAmountInput);

    if (txnAmountInput === 'error') {
      domFunc.showNumErrorMsg();
    }
    if (txnSelectedType = 'Deposit' && txnAmountInput != 'error' && txnAmountInput != '') {
      changeAcc.depsit(txnAmountInput);
    } else {
      if (txnSelectedType = 'Withdraw' && txnAmountInput != 'error' && txnAmountInput != '') {
        changeAcc.withdraw(txnAmountInput);
      }
    }
  }
});
