// define attributes / variables
//   number
//   string
//   boolean
//   array
//   dictionary / objects
//   undefined
//sample if / else
// functions
//   parameters
//   returns
// arrays
//   add to the front
//   add to the end
//   update values
// loops 
//   for
//   for/in
//   while
//   do while
//   forEach (with array and function)
// Objects / Dictionaries
//   declare object
//   lookup key to retrieve value

const myfunctions = {

    add: (num1, num2) => {
        return num1 + num2;
    },

    milesToKm: (mile) => {
        let km = 1.609344;
        return mile * km;
    },

    sayHi: (name) => {
        let result = "hi " + name;
        return result;
    },

    isEven: (num) => {
        if (num % 2 == 0) {
            return true;
        };
        return false;
    },

    sumArray: (arr) => {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result = result + arr[i];
        }
        return result;
    },

    isClassicCar: (year, cars) => {
        let result;
        for (let car in cars) {
            if (cars[car]["year"] < year) {
                console.log(cars[car]);
                result = true;
            } else {
                result = false;
            }
        }
        return result;
    },

    countToTen: (num) => {
        let result = 0;
        while (num <= 10) {
            result = num++;
        }
        return result;
    },

    doWhileLoop: (x) => {
        do {
            x--;
            return x;
        } while (x > 0);
    },

    checkValueInList: (word) => {
        const students = ["john",];
        if (students[0] == word) {
            return true;
        } return false;
    }
};
export default myfunctions;