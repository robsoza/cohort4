import domFunc from './domFunc.js'
import cityDomFunc from './cityDomFunc.js'

window.onload = () => cityDomFunc.addCommunityToDom();

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

    if (domFunc.inputIsError(initAmount) === 'ERROR') {
      initAmount = domFunc.checkAmountUserInput(initAmount);
    }

    if (domFunc.inputIsError(newAccName) === 'ERROR') {
      newAccName = domFunc.checkAccNameUserInput(newAccName);
    } else if (domFunc.inputNotAnError(initAmount) != 'ERROR' &&
      domFunc.inputNotAnError(newAccName) != 'ERROR') {
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
    if (domFunc.inputIsError(txnAmountInput) === 'ERROR' || domFunc.inputIsError(txnSelectedAcc) === 'ERROR' || domFunc.inputIsError(txnSelectedType) === 'ERROR') {
      domFunc.showTxnNumErrMsg();
    } else {
      if (domFunc.inputIsError(txnAmountInput) != 'ERROR' || domFunc.inputIsError(txnSelectedAcc) != 'ERROR' || domFunc.inputIsError(txnSelectedType) != 'ERROR')
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

// city & community
let cityName = '';
let pop = '';
let lat = '';
let long = '';

// input cityName eventListenner
window.addEventListener('change', (e) => {
  if (e.target.id === 'id-city-name-input') {
    cityDomFunc.deleteStrErrorMsg();
    cityName = e.target.value;
    cityName = cityDomFunc.checkCityNameUserInput(cityName);
  }
});

// input pop eventListenner
window.addEventListener('change', (e) => {
  if (e.target.id === 'id-pop-input') {
    cityDomFunc.deleteStrErrorMsg();
    pop = e.target.value;
    pop = cityDomFunc.checkNumUserInput(pop);
  }
});

// input lat eventListenner
window.addEventListener('change', (e) => {
  if (e.target.id === 'id-lat-input') {
    cityDomFunc.deleteStrErrorMsg();
    lat = e.target.value;
    lat = cityDomFunc.checkNumUserInput(lat);
  }
});

// input long eventListenner
window.addEventListener('change', (e) => {
  if (e.target.id === 'id-long-input') {
    cityDomFunc.deleteStrErrorMsg();
    long = e.target.value;
    long = cityDomFunc.checkNumUserInput(long);
  }
});

//submit transaction button event listener
window.addEventListener('click', async (e) => {
  if (e.target.id === 'button6') {
    if (cityDomFunc.checkCityNameUserInput(cityName) === 'ERROR' || cityDomFunc.checkNumUserInput(pop) === 'ERROR' || cityDomFunc.checkNumUserInput(lat) === 'ERROR' || cityDomFunc.checkNumUserInput(long) === 'ERROR') {
      cityDomFunc.showStrErrorMsg;
    } else {
      if (cityDomFunc.checkCityNameUserInput(cityName) != 'ERROR' || cityDomFunc.checkNumUserInput(pop) != 'ERROR' || cityDomFunc.checkNumUserInput(lat) != 'ERROR' || cityDomFunc.checkNumUserInput(long) != 'ERROR')
        //make transaction and reset inputs
        cityDomFunc.deleteStrErrorMsg();
      await cityDomFunc.addCityToDatabase(cityName, lat, long, pop);

      cityDomFunc.resetUserInputs();
      cityName = '';
      pop = '';
      lat = '';
      long = '';
    }
  }
});

// update population
let updateType = '';
let updatePopNum = 0;

//select update type
window.addEventListener('change', (e) => {
  if (e.target.id === 'id-update-pop') {
    updateType = e.target.value;
  }
});

//select update type
window.addEventListener('change', (e) => {
  if (e.target.id === 'id-update-num') {
    updatePopNum = e.target.value;
  }
});

//update pop btn eventlistener
window.addEventListener('click', (e) => {
  if (e.target.id === 'popBtn') {
    if (updateType != '' && updatePopNum > 0) {
      cityDomFunc.updatePopulation(updateType, updatePopNum);
      updateType = '';
      updatePopNum = '';
      cityDomFunc.resetModal();
    }
  }
});