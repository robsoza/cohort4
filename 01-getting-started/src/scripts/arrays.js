/**
 * @description arrays, pure-functions and testing
 * @name arraysFunctions
 */
const arr = [];
const arraysFunctions = {
    
    addEleToArr: (element) => {
        if (isNaN(element)) {
            return "The input is not a valid number"
        } arr.push(element);
        return "The number has been added to the array";
    },

    showArray: () => {
        let show = arr.join(', ');
        return show;
    },

    addEles: (arr) => {
        let arrResult = 0;
        for (let i = 0; i < arr.length; i++) {
            return (arrResult + arr[i]);
        }
    },

    clearArr: (arr) => {
        return (arr.length = 0);
    }
};

export default arraysFunctions;