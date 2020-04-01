import { Account, AccountController } from './account.js'
const control = new AccountController;

/**
 * @description javascript Events / DOM
 * @name domFunc
 */

let strMsg = '';
let numMsg = '';
let txnNumMsg = '';
const newAccField = document.getElementById('accs');
const accHistory = document.getElementById('acc-history');
const txnAcc = document.getElementById('txn-acc');
let accTotal;
let biggest;
let smallest;
let newAcc;

const txnField = document.getElementById('txns');

const domFunc = {

  checkAmountUserInput: (num) => {
    if (num === '') {
      domFunc.showNumErrorMsg();
      return 'ERROR';
    }
    if (num != '') {
      num = control.isNewAmount(num);
      if (num === 'ERROR') {
        domFunc.showNumErrorMsg();
        return 'ERROR';
      } else {
        domFunc.deleteNumErrorMsg();
        return num;
      }
    }
  },

  checkAccNameUserInput: (name) => {
    if (name === '') {
      domFunc.showStrErrorMsg();
      return 'ERROR';
    }
    if (name != '') {
      name = name.toUpperCase();
      name = control.isNewAcc(name);
      if (name === 'ERROR') {
        domFunc.showStrErrorMsg();
        return 'ERROR';
      } else {
        domFunc.deleteStrErrorMsg();
        return name;
      }
    }
  },

  addAccToDom: (name, num) => {
    //create account and add it
    let newAcc = new Account(name, num);
    control.addAcc(newAcc);

    // append new acc to history list
    let accItem = document.createElement('li');
    accItem.className = name + 'myAppend';
    accItem.innerText = newAcc.show();

    // append close button to each item
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    accItem.appendChild(span);
    accHistory.appendChild(accItem);

    // append option to pulldown list
    let selectAcc = document.createElement('option');
    selectAcc.value = name;
    selectAcc.textContent = name;
    selectAcc.className = name + 'myAppend';
    txnAcc.appendChild(selectAcc);
  },

  resetUserInputs: () => {
    document.getElementById('id-init-amount-input').value = '';
    document.getElementById('id-acc-name-input').value = '';
  },

  showSummary: () => {
    if (control.accs.length === 0) {
      document.getElementById('current-balance').textContent = '';
      document.getElementById('biggest-acc').textContent = '';
      document.getElementById('smallest-acc').textContent = '';
    } else {
      document.getElementById('current-balance').textContent = '$' + control.accsTotal();
      document.getElementById('biggest-acc').textContent = control.biggestAcc();
      document.getElementById('smallest-acc').textContent = control.smallestAcc();
    }
  },

  deleteAccElement: (name) => {
    control.deleteAcc(name);
  },

  showNumErrorMsg: () => {
    domFunc.deleteNumErrorMsg();
    numMsg = document.createElement('P');
    numMsg.innerText = 'Not a valid number';
    numMsg.style.color = 'red';
    newAccField.appendChild(numMsg);
  },

  showStrErrorMsg: () => {
    domFunc.deleteStrErrorMsg();
    strMsg = document.createElement('P');
    strMsg.innerText = 'Not a valid name';
    strMsg.style.color = 'red';
    newAccField.appendChild(strMsg);
  },

  deleteNumErrorMsg: () => {
    if (numMsg) {
      numMsg.style.display = 'none';
    }
  },

  deleteStrErrorMsg: () => {
    if (strMsg) {
      strMsg.style.display = 'none';
    }
  },

  checkTxnUserInput: (num) => {
      num = control.isNewAmount(num);
      if (num === 'ERROR') {
        domFunc.showTxnNumErrMsg();
        return 'ERROR';
      } else {
        domFunc.deleteTxnNumErrMsg();
        return num;
      }
  },

  makeAtransaction: (num, name, type) => {
    if (type === 'Checking') {
      changeAcc.depsit(txnAmountInput);
    } else if (type === 'Withdraw') {
      changeAcc.withdraw(txnAmountInput);
    }

  },

  showTxnNumErrMsg: () => {
    domFunc.deleteTxnNumErrMsg();
    txnNumMsg = document.createElement('P');
    txnNumMsg.innerText = 'Please check your inputs';
    txnNumMsg.style.color = 'red';
    txnField.appendChild(txnNumMsg);
  },

  deleteTxnNumErrMsg: () => {
    if (txnNumMsg) {
      txnNumMsg.style.display = 'none';
    }
  },

  // DISPLAY HIDE A LIST OF ELEMENTS
  displayEl: (list) => {
    for (let i = list.length - 1; i >= 0; --i) {
      if (list[i].style.display === 'block') {
        list[i].style.display = 'none';
      } list[i].style.display = 'block';
    }
  },
};

export default domFunc;

// Click on a close button to hide the current list item
window.addEventListener('click', (e) => {
  if (e.target.className === 'close') {
    let removeItems = document.getElementsByClassName(e.target.parentElement.className);
    for (let i = 0; i < removeItems.length; i++) {
      removeItems[i].style.display = "none";
      let deleteAccName = e.target.parentElement.className.slice(0, -8);
      domFunc.deleteAccElement(deleteAccName);
      domFunc.showSummary();
    }
  }
});