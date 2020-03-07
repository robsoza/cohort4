import arraysFunctions from "./arrays"

test("does that addEleToArr function work?", () => {
    expect(arraysFunctions.addEleToArr(1)).toStrictEqual([1]);
    expect(arraysFunctions.addEleToArr(1,2)).toStrictEqual([1, 2]);
    expect(arraysFunctions.addEleToArr("a")).toStrictEqual("the input is not a valid number");
});

test("does that addEles function work?", () => {
    expect(arraysfunctions.addEles([4, 5, 6])).toBe(15);
    expect(arraysfunctions.addEles([2, 2, 2])).toBe(6);
});

test("does that clearArr function work?", () => {
    expect(arraysfunctions.clearArr([4, 5, 6])).toBe([]);
    expect(arraysfunctions.clearArr([2, 53, 3])).toBe([]);
});

// test("does that showArray function work?", () => {
//     expect(arraysfunctions.showArray([4, 5, 6])).toBe([]);
// });