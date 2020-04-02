import { AccountController } from './account.js'
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

  addAccToDom: (name, num) => {
    //create account and add it
    control.addAcc(name, num);
    ii++;
    // append new acc to history list
    let accCardName = document.createElement('p');
    accCardName.id = 'id-p';
    accCardName.style.backgroundColor = 'lightgray';
    accCardName.innerText = 'Account #' + ii;
    accCardName.className = name + 'myAppend';
    // append close button to each item
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    accCardName.appendChild(span);
    // accHistory.appendChild(accCardName);
    accHistory.insertBefore(accCardName, accHistory.firstChild);

    let accList = document.createElement('ol');
    let accItem = document.createElement('li');
    accItem.id = name + 'id';
    accItem.innerText = control.showAddedAcc(name, num) + '   (initial Balance)';
    accCardName.appendChild(accList);
    accList.insertBefore(accItem, accList.lastChild);
 
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
    document.getElementById('txn-amount-input').value = '';
    document.getElementById('txn-acc').value = '';
    document.getElementById('transactions').value = '';
  },

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
    if (ii>0) {
      let myAcc = control.accs.find((el) => { return el.name === name });
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

  addTxnToDom: (myAcc, type, num) => { 
    myAcc = control.accs.find((el) => { return el.name === myAcc });

    // append txn txn acc to history list
    let txnItem = document.createElement('li');
    txnItem.style.backgroundColor = 'white';
    txnItem.className = myAcc.name + 'myAppend';
    txnItem.innerText = myAcc.show() + '      (' + type + ' ' + num + ')';
   
    const existingItem = document.getElementById(myAcc.name + 'id');
    existingItem.insertBefore(txnItem, existingItem.firstChild);
  },

  isNewAcc(name) {
    if (name === '') {
      return 'ERROR'
    } else {
      for (let v in this.accs) {
        if (this.accs[v].name === name) {
          return 'ERROR';
        }
      } return name;
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
  }
};

export default domFunc;

// Click on a close button
window.addEventListener('click', (e) => {
  if (e.target.className === 'close') {
    if (ii>0){ii--;}
    let removeItems = document.getElementsByClassName(e.target.parentElement.className);
    for (let i = removeItems.length - 1; i >= 0; i--) {
      removeItems[i].style.display = "none";
    }
    let deleteAccName = e.target.parentElement.className.slice(0, -8);
    control.deleteAcc(deleteAccName);
    domFunc.showSummary();
  }
}); 