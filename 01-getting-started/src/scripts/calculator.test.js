import calculatorFunctions from './calculator'

test('Does that subtract function work?', () => {
    expect(calculatorFunctions.add(1,2)).toBe(3);
    expect(calculatorFunctions.add(101,202)).toBe(303);
});

test('Does that multiply function work?', () => {
    expect(calculatorFunctions.multiply(3,2)).toBe(6);
    expect(calculatorFunctions.multiply(10,5)).toBe(50);
});

test('Does that divide function work?', () => {
    expect(calculatorFunctions.divide(6,2)).toBe(3);
    expect(calculatorFunctions.divide(10,5)).toBe(2);
});