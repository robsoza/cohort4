import myfunctions from "./syntax"

test("does the add function add?", () => {
    expect(myfunctions.add(1, 2)).toBe(3);
    expect(myfunctions.add(2, 2)).toBe(4);
});

test("Does the milesToKm function work?", () => {
    expect(myfunctions.milesToKm(1)).toBe(1.609344);
    expect(myfunctions.milesToKm(2)).toBe(3.218688);
    expect(myfunctions.milesToKm(3)).toBe(4.828032);
}),

    test("does the sayHi function work?", () => {
        expect(myfunctions.sayHi("john")).toBe("hi john");
        expect(myfunctions.sayHi("rob")).toBe("hi rob");
    });

test("Does the isEven function return true or false boolean?", () => {
    expect(myfunctions.isEven(1)).toBe(false);
    expect(myfunctions.isEven(2)).toBe(true);
    expect(myfunctions.isEven(3)).toBe(false);
});

test("does the sumArray function add numbers inside an array?", () => {
    expect(myfunctions.sumArray([1, 2, 3])).toBe(6);
    expect(myfunctions.sumArray([4, 5, 6])).toBe(15);
});

test("does the isClassicCar function work?", () => {
    expect(myfunctions.isClassicCar(1950, { "ford": { id: 1, year: 1945 }, "Chev": { id: 2, year: 1935 } })).toEqual(true);
    expect(myfunctions.isClassicCar(1960, { "ford": { id: 1, year: 1940 }, "Chev": { id: 2, year: 1955 } })).toEqual(true);
    expect(myfunctions.isClassicCar(1960, { "ford": { id: 1, year: 2000 }, "Chev": { id: 2, year: 2010 } })).toEqual(false);
});

test("Does the countToTen function work", () => {
    expect(myfunctions.countToTen(1)).toBe(10);
    expect(myfunctions.countToTen(2)).toBe(10);
    expect(myfunctions.countToTen(3)).toBe(10);
});

test("Does the doWhileLoop function work", () => {
    expect(myfunctions.doWhileLoop(5)).toBe(4);
    expect(myfunctions.doWhileLoop(8)).toBe(7);
    expect(myfunctions.doWhileLoop(9)).toBe(8);
});

test("does the checkValueInList function work?", () => {
    expect(myfunctions.checkValueInList("john")).toBe(true);
    expect(myfunctions.checkValueInList("mike")).toBe(false);
    expect(myfunctions.checkValueInList("steve")).toBe(false);
});