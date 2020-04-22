import { Account, AccountController } from './account.js'
const control = new AccountController;

/**
 * @description javascript Events / DOM
 * @name domFunc
 */

let strMsg = '';
let numMsg = '';
let txnNumMsg = '';
let ii = 0;
const newAccField = document.getElementById('id-accs');
const accHistory = document.getElementById('acc-history');
const txnAcc = document.getElementById('txn-acc');
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

  //create account and add it
  addAccToDom: (name, num) => {
    control.addAcc(name, num);
    ii++;
    // append new acc to history list
    let accCardName = document.createElement('p');
    accCardName.className = name + 'myAppend id-p';
    accCardName.style.backgroundColor = 'lightgray';
    accCardName.textContent = 'Account #';
    let numSpan = document.createElement('span');
    numSpan.className = 'numSpan';
    accCardName.appendChild(numSpan);

    // accHistory.appendChild(accCardName);
    accHistory.insertBefore(accCardName, accHistory.firstChild);

    let accList = document.createElement('ol');
    let accItem = document.createElement('li');
    accItem.id = name + 'id';
    accItem.textContent = ' (Initial Balance) ';

    // append spand to li with CLASS + ADDED
    let addedAcc = document.createElement('span');
    addedAcc.className = name + 'added';
    addedAcc.textContent = name + ' : $' + Number(num).toFixed(2);
    accItem.insertBefore(addedAcc, accItem.lastChild);

    accCardName.appendChild(accList);
    accList.insertBefore(accItem, accList.lastChild);

    // append close button to each item
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    accCardName.appendChild(span);

    // append option to pulldown list WITH CLASS + APPEND
    let selectAcc = document.createElement('option');
    selectAcc.value = name;
    selectAcc.textContent = name;
    selectAcc.className = name + 'myAppend id-p';
    txnAcc.insertBefore(selectAcc, txnAcc.lastChild);
    domFunc.setAccTitleNums();
  },

  setAccTitleNums: () => {
    let accTitleNum = document.getElementsByClassName('numSpan');
    for (let i = accTitleNum.length - 1; i >= 0; i--) {
      accTitleNum[i].textContent = i + 1;
    }
  },

  // reset inputs
  resetUserInputs: () => {
    document.getElementById('id-init-amount-input').value = '';
    document.getElementById('id-acc-name-input').value = '';
    document.getElementById('txn-amount-input').value = '';
    document.getElementById('txn-acc').value = '';
    document.getElementById('transactions').value = '';
  },

  // update acc summary
  showSummary: () => {
    if (ii >= 1) {
      document.getElementById('current-balance').textContent = control.accsTotal();
      document.getElementById('biggest-acc').textContent = control.biggestAcc();
      document.getElementById('smallest-acc').textContent = control.smallestAcc();
    } else {
      document.getElementById('current-balance').textContent = '';
      document.getElementById('biggest-acc').textContent = '';
      document.getElementById('smallest-acc').textContent = '';
    }
  },

  // check for errors
  inputIsError(userInput) {
    if (userInput === '' || userInput === 'ERROR') {
      return 'ERROR'
    } return userInput;
  },

  inputNotAnError(userInput) {
    if (userInput != '' || userInput != 'ERROR') {
      return userInput
    } return 'ERROR';
  },

  // add error messages to the dom
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

  //remove error messages from the dom
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

  // check for transaction error
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

  // make a transaction
  makeAtransaction: (num, name, type) => {
    if (ii > 0) {
      let myAcc = control.accs.find((a) => { return a.name === name });
      if (type === 'Deposit' && control.accs.length > -1) {
        myAcc.deposit(num);
        domFunc.showSummary();
        domFunc.addTxnToDom(name, type, num);
      } else if (type === 'Withdraw' && control.accs.length > -1) {
        myAcc.withdraw(num);
        domFunc.showSummary();
        domFunc.addTxnToDom(name, type, num);
      }
    }
  },

  // add transaction to the dom
  addTxnToDom: (myAcc, type, num) => {
    myAcc = control.accs.find((el) => { return el.name === myAcc });

    // append txn txn acc to history list
    let txnItem = document.createElement('li');
    txnItem.style.backgroundColor = 'white';
    txnItem.className = myAcc.name + 'myAppend';
    txnItem.textContent = '      (' + type + ' ' + num + ')';

    let addedAcc = document.createElement('span');
    addedAcc.className = myAcc.name + 'added';
    addedAcc.textContent = myAcc.show();
    txnItem.insertBefore(addedAcc, txnItem.lastChild);

    // insert the transaction before existing acc
    const existingItem = document.getElementById(myAcc.name + 'id');
    existingItem.insertBefore(txnItem, existingItem.firstChild);
  },

  // add transaction error to the dom
  showTxnNumErrMsg: () => {
    domFunc.deleteTxnNumErrMsg();
    txnNumMsg = document.createElement('P');
    txnNumMsg.innerText = 'Please check your inputs';
    txnNumMsg.style.color = 'red';
    txnField.appendChild(txnNumMsg);
  },

  // remove error from the dom
  deleteTxnNumErrMsg: () => {
    if (txnNumMsg) {
      txnNumMsg.style.display = 'none';
    }
  }
};

export default domFunc;

// Click on a close button
window.addEventListener('click', (e) => {
  if (e.target.className === 'close') {
    if (ii > 0) { ii--; }
    let removeItems = document.getElementsByClassName(e.target.parentElement.className);
    for (let i = removeItems.length - 1; i >= 0; i--) {
      removeItems[i].remove();
    }
    let deleteAccName = e.target.parentElement.className.slice(0, -13);
    control.deleteAcc(deleteAccName);
    domFunc.showSummary();
    domFunc.setAccTitleNums();
  }
});