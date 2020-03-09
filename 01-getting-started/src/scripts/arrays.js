/**
 * @description arrays, Dictionaries, pure-functions and testing
 * @name arraysFunctions
 */

const provinceDictionary = {
    AB: 'Alberta',
    BC: 'British Columbia',
    MB: 'Manitoba',
    SK: 'Saskatchewan',
    NS: 'Nova Scotia',
    NB: 'New Brunswick',
    NL: 'Newfoundland and Labrador',
    PE: 'Prince Edward Island',
    ON: 'Ontario',
    QC: 'Quebec',
    NT: 'Northwest Territories',
    YT: 'Yukon',
    NU: 'Nunavut'
};


const arraysFunctions = {

    pushArray: (element, numArray) => {
        let msg;
        if (isNaN(element) || element == "") {
            msg = "The input is not a valid number";
        } else if (typeof element == 'number') {
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
    },

    provinceLookup: (provinceCode) => {
        provinceCode = provinceCode.toUpperCase()
        for (let [key, value] of Object.entries(provinceDictionary)) {
            if (key == provinceCode) {
                return value;
            }
        }

        for (let [key, value] of Object.entries(provinceDictionary)) {
            if (key != provinceCode) {
                return "error";
            }
        }

    }
};

export default arraysFunctions;