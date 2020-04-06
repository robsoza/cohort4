import domFunc from './domFunc.js'

let initAmount = '';
let newAccName = '';

// input initial amount eventListenner
window.addEventListener('change', (e) => {
  if (e.target.id === 'id-init-amount-input') {
    domFunc.deleteNumErrorMsg();
    initAmount = e.target.value;
    initAmount = domFunc.checkAmountUserInput(initAmount);
  }
});

// Input account name eventListenner
window.addEventListener('change', (e) => {
  if (e.target.id === 'id-acc-name-input') {
    domFunc.deleteStrErrorMsg();
    newAccName = e.target.value;
    newAccName = domFunc.checkAccNameUserInput(newAccName);
  }
});

// button new acc eventListener
window.addEventListener('click', (e) => {
  if (e.target.id === 'button4') {

    domFunc.deleteNumErrorMsg();
    domFunc.deleteStrErrorMsg();

    if (initAmount === '' || initAmount === 'ERROR') {
      initAmount = domFunc.checkAmountUserInput(initAmount);
    }

    if (newAccName === '' || newAccName === 'ERROR') {
      newAccName = domFunc.checkAccNameUserInput(newAccName);
    } else {
      if (initAmount != '' && newAccName != '' && initAmount != 'ERROR' && newAccName != 'ERROR')
        domFunc.addAccToDom(newAccName, initAmount);
      domFunc.showSummary();
      domFunc.resetUserInputs();
      initAmount = ''; newAccName = '';
    }
  }
});

// make a transaction
let txnSelectedAcc = '';
let txnSelectedType = '';
let txnAmountInput = '';

// txn input eventListenner
window.addEventListener('change', (e) => {
  if (e.target.id === 'txn-amount-input') {
    txnAmountInput = e.target.value;
    domFunc.deleteTxnNumErrMsg();
    txnAmountInput = domFunc.checkTxnUserInput(txnAmountInput);
  }
});

//select txn account
window.addEventListener('change', (e) => {
  if (e.target.id === 'txn-acc') {
    domFunc.deleteTxnNumErrMsg();
    txnSelectedAcc = e.target.value;
  }
});

//select txn type
window.addEventListener('change', (e) => {
  if (e.target.id === "transactions") {
    domFunc.deleteTxnNumErrMsg();
    txnSelectedType = document.getElementById(e.target.id);
    txnSelectedType = txnSelectedType.value;
  }
});

//submit transaction button event listener
window.addEventListener('click', (e) => {
  if (e.target.id === 'button5') {
    if (txnAmountInput === '' || txnAmountInput === 'ERROR' || txnSelectedAcc === '' || txnSelectedType === '') {
      domFunc.showTxnNumErrMsg();
    } else {
      if (txnAmountInput != '' && txnAmountInput != 'ERROR' && txnSelectedAcc != '' && txnSelectedType != '')
        //make transaction and reset inputs
        domFunc.deleteTxnNumErrMsg();
      domFunc.makeAtransaction(txnAmountInput, txnSelectedAcc, txnSelectedType);
      domFunc.resetUserInputs();
      txnSelectedAcc = '';
      txnSelectedType = '';
      txnAmountInput = '';
    }
  }
});