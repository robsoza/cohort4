import arraysFunctions from "./arrays.js"

test("does that pushArray function work?", () => {
    expect(arraysFunctions.pushArray(2, [])).toEqual([[2], "The number has been added to the array"]);
    expect(arraysFunctions.pushArray(3, [])).toEqual([[3], "The number has been added to the array"]);
    expect(arraysFunctions.pushArray("a", [])).toEqual([[], "The input is not a valid number"]);
    expect(arraysFunctions.pushArray('b', [])).toEqual([[], "The input is not a valid number"]);
    expect(arraysFunctions.pushArray('', [])).toEqual([[], "The input is not a valid number"]);
});

test("does that showArray function work?", () => {
    expect(arraysFunctions.showArray([1, 1, 3])).toEqual('1,1,3');

});

test("does that sumArray function work?", () => {
    expect(arraysFunctions.sumArray([2, 1, 2])).toBe(5);
    expect(arraysFunctions.sumArray([2, 3, 3])).toBe(8);
    expect(arraysFunctions.sumArray([4, 5, 6])).toBe(15);
});

test("does that clearArr function work?", () => {
    expect(arraysFunctions.clearArr([4, 5, 6])).toBe(0);
    expect(arraysFunctions.clearArr([2, 53, 3])).toBe(0);
});

test("does that provinceLookup function work?", () => {
    expect(arraysFunctions.provinceLookup('AB')).toBe('Alberta');
    expect(arraysFunctions.provinceLookup('BC')).toBe('British Columbia');
    expect(arraysFunctions.provinceLookup('ns')).toBe('Nova Scotia');
    expect(arraysFunctions.provinceLookup('ABZ')).toBe('error');
});