import { Account } from './account.js'

// DISPLAY ELEMENTS
function displayEl(list) {
  for (let i = list.length - 1; i >= 0; --i) {
    if (list[i].style.display === 'block') {
      list[i].style.display = 'none';
    } else {
      list[i].style.display = 'block';
    }
  }
}


// CREATE NEW ACCOUNT DROPDOWN
const accList = document.getElementsByClassName('class-acc-el');
const accDropDownbtn = document.getElementById('acc-p');
accDropDownbtn.addEventListener('click', function (e) {
    displayEl(accList);
});

// ACCOUNT NAME EVENT LISTENER
let newAccName;
window.addEventListener('change', newAccUpdate);
function newAccUpdate(e) {
  if (e.target.id === "id-acc-name-input") {
    newAccName = e.target.value;
  }
};

// AMOUNT EVENT LISTERN
let initAmount;
window.addEventListener('change', initAmountUpdate);
function initAmountUpdate(e) {
  if (e.target.id === "id-init-amount-input") {
    initAmount = e.target.value;
  }
};

let msg = "";
let accs = [{ "SAVINGS": 5555 }];
let hTitle = document.getElementById('h1title');
let txnHide = document.getElementById('txnHide');
console.log(hTitle);

// ACC BUTTON
const txnList = document.getElementsByClassName('class-txn-el');
window.addEventListener('click', function (e) {
  if (e.target.textContent == 'Create new account') {
    pushEl(accs, newAccName, initAmount);
  }
});

// PUSH ELELEMENT FUNCTION
let txnField = document.getElementById('class-txn-hide');
function pushEl(el, accName, amount) {
  if (isNaN(amount) || amount == "") {
    msg = "The input is not a valid number";
    hTitle.textContent = msg;
  } else {
    accName = accName.toUpperCase();
    el = el.push([{ accName, amount }]);
    msg = "The number has been added to the array";
    displayEl(accList);
    hTitle.textContent = accName + " $" + amount;
    txnField.style.display = 'block';
  };
  return [el, msg];
}
console.log(accs);
console.log(msg);

function accLookup(key, obj) {
  key = key.toUpperCase()
  return (key in obj) ? obj[key] : 'Enter a valid Canadian province code';
}

let myvalue = "savings";
let eacc = accLookup(myvalue, accs);
console.log(eacc);

// MAKE TRANSACTION DROPDOWN
  function buildSelect(id, className) {
    let select = document.createElement('select');
    select.id = id;
    select.className = className;
    return select;
  }

  function buildOpts(value,textContent) {
    let option = document.createElement('option');
    option.value = value;
    option.textContent = textContent;
    return option;
  }

// MAKE TRANSACTION DROPDOWN
const txnDropDownbtn = document.getElementById('txn-p');
txnDropDownbtn.addEventListener('click', function (e) {
    displayEl(txnList);
});

let ar1 = [];
function add (accountName, bal) {
  accountName = accountName.toUpperCase();
  if ( ar1.find((element) => {
    console.log(element.name === accountName);
      return element.name === accountName;
    }) === undefined
  )
   {
   const account = new Account(accountName, Number(bal));
   ar1.push(account);
  } else  
  console.log("nonono");
}
add("sav",0);
add("chk",3)
add("sa",0)
add("s",0)
add("sav",0)
console.log(ar1);