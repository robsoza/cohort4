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

    addNumsInArr: (arr) => {
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
            result = num;
            num++;
        }
        return result;
    },

    countToZ: (num) => {
        let result = 0;
        do {
            return result;
            num--;
            result = num;
        } while (num > 0)
    },

    containsWordTest: (word) => {
        let result;
        const students = [
            "john",
        ];
        if (students[0] == word) {
            result = true;
        } else if (students[0] !== word) {
            result = false;
        } return result;
    }
};
export default myfunctions;