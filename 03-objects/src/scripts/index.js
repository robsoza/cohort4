import { Account, AccountController } from './account.js'
import domFunc from './domFunc.js'

const control = new AccountController;
const NewAccField = document.getElementById('accs');
const accHistory = document.getElementById('acc-history');
const txnAcc = document.getElementById('txn-acc');
let initAmount = 0;
let newAccName = '';
let strMsg = '';
let numMsg = '';

// input initial amount eventListenner
window.addEventListener('change', (e) => {
  if (e.target.id === 'id-init-amount-input') {
    if (numMsg) { numMsg.style.display = 'none'; }
    initAmount = e.target.value;
    initAmount = domFunc.isAnum(initAmount);
    if (initAmount == 'error') {
      if (numMsg) { numMsg.style.display = 'none'; }
      numError();
    }
  } else {
    if (initAmount != 'error') {
      if (numMsg) { numMsg.style.display = 'none'; }
      return initAmount;
    }
  }
});

// account name eventListenner
window.addEventListener('change', (e) => {
  if (e.target.id === 'id-acc-name-input') {
    if (strMsg) { strMsg.style.display = 'none'; }
    newAccName = e.target.value;
    newAccName = newAccName.toUpperCase();
    newAccName = control.isNewAcc(newAccName);
    if (newAccName === 'error') {
      if (strMsg) { strMsg.style.display = 'none'; }
      strError();
    }
  } else {
    if (newAccName != 'error') {
      if (strMsg) { strMsg.style.display = 'none'; }
      return newAccName;
    }
  }
});

// create new acc button eventListener
window.addEventListener('click', (e) => {
  if (e.target.id === 'button4') {

    //if inputs are empty

    newAccName = newAccName.toUpperCase();
    newAccName = control.isNewAcc(newAccName);
    if (newAccName === 'error' || newAccName === '') {
      if (strMsg) { strMsg.style.display = 'none'; }
      strError();
    }

    initAmount = domFunc.isAnum(initAmount);
    if (initAmount == 'error') {
      if (numMsg) { numMsg.style.display = 'none'; }
      numError();
    }

    // if inputs are valid create new account
    else if (newAccName != 'ERROR' && initAmount != 'ERROR' && newAccName != '' && initAmount != '') {
      if (strMsg) { strMsg.style.display = 'none'; }
      let newAcc = new Account(newAccName, initAmount);
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

// Click on a close button to hide the current list item
window.addEventListener('click', (e) => {
  if (e.target.className === 'close') {
    let deleteEl = document.getElementsByClassName(e.target.parentElement.className);
    for (let i = 0; i < deleteEl.length; i++) {
      control.deleteAcc(e.target.parentElement.className);
      deleteEl[i].style.display = "none";
      showSummary();
    }
  }
});

//summary function
function showSummary() {
    let accTotal = document.getElementById('current-balance');
    accTotal.textContent = '$' + control.accsTotal();
    let biggest = document.getElementById('biggest-acc');
    biggest.textContent = control.biggestAcc();
    let smallest = document.getElementById('smallest-acc');
    smallest.textContent = control.smallestAcc();
}

// add errors functions
function numError() {
  if (numMsg) { numMsg.style.display = 'none'; }
  numMsg = document.createElement('P');
  numMsg.innerText = 'Not a valid number';
  numMsg.style.color = 'red';
  NewAccField.appendChild(numMsg);
}

function strError() {
  if (strMsg) { strMsg.style.display = 'none'; }
  strMsg = document.createElement('P');
  strMsg.innerText = 'Not a valid name';
  strMsg.style.color = 'red';
  NewAccField.appendChild(strMsg);
}

// transaction btn event listener
window.addEventListener('click', (e) => {
  if (e.target.id === 'button5') {
    console.log('5');
  }
});