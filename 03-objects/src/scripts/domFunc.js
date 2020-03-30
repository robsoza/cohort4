import { Account, AccountController } from './account.js'

/**
 * @description javascript Events / DOM
 * @name domFunc
 */

const domFunc = {

    isAnum: (num) => {
        if (isNaN(num) || num == '') {
            return 'error';
        } return num;
    },

    isAname: (name) => {
        if (name === '') {
            return 'error';
        } return name;
    },




    // DISPLAY HIDE A LIST OF ELEMENTS
    displayEl: (list) => {
        for (let i = list.length - 1; i >= 0; --i) {
            if (list[i].style.display === 'block') {
                list[i].style.display = 'none';
            } list[i].style.display = 'block';
        }
    }


};

export default domFunc;