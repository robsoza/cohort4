import { Account, AccountController } from './account.js'
const control = new AccountController;

/**
 * @description javascript Events / DOM
 * @name domFunc
 */

let strMsg = '';
let numMsg = '';
const newAccField = document.getElementById('accs');
const domFunc = {

    isAnum: (num) => {
        if (isNaN(num) || num === '') {
            return 'error';
        } return num;
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