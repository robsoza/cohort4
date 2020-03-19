import functions from './functions'

test('Does that side function work?', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(80)).toBe("large");
    expect(functions.size(2000000)).toBe("extra large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does that substract function work?', () => {
    expect(functions.substract(3,2)).toBe(1);
    expect(functions.substract(100,20)).toBe(80);
});


test('Does it return true or false', () => {
    expect(functions.isEven(1)).toBe(false);
    expect(functions.isEven(2)).toBe(true);
});