/**
 * @description arrays, pure-functions and testing
 * @name arraysFunctions
 */

const arraysFunctions = {
    
    pushArray: (element, numArray) => {
        let msg;
        if (isNaN(element)) {
            msg = "The input is not a valid number";
        } else if (typeof element == 'number')  {
            numArray.push(element);
            msg = "The number has been added to the array";
        };
        return [numArray, msg];
    },

    showArray: (numArray) => {
        return numArray.toString();
    },

    sumArray: (numArray) => {
        let numArrayResult = 0;
            for (let i = 0; i < numArray.length; i++) {
                numArrayResult = numArray[i] + numArrayResult;
            } return numArrayResult;
    },

    clearArr: (numArray) => {
        numArray = [];
        return (numArray.length = 0);
    }
};

export default arraysFunctions;