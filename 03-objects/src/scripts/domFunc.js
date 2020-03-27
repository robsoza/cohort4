/**
 * @description javascript Events / DOM
 * @name domFunc
 */

const domFunc = {

    isAnum: (num) => {
        if (isNaN(num) || num == '') {
            return 'The input is not a valid number';
        } return num;
    },


    isNewAcc: (obj, name) => {
        name = name.toUpperCase();
        for (let v in obj) {
            if (v === name) {
                console.log(v);
                return name + ' already exists';
            } 
        } return name;
    },
};

export default domFunc;