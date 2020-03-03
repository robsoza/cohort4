import calculator from './calculator'

test('Does that add function work?', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(5, 5)).toBe(10);
    expect(calculator.add(10, 10)).toBe(20);
    expect(calculator.add(20, 20)).toBe(40);
});

test('Does that subtract function work?', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(10, 10)).toBe(0);
    expect(calculator.subtract(20, 15)).toBe(5);
});

test('Does that multiply function work?', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
    expect(calculator.multiply(2, 5)).toBe(10);
    expect(calculator.multiply(3, 6)).toBe(18);
    expect(calculator.multiply(10, 5)).toBe(50);
});

test('Does that divide function work?', () => {
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(10, 5)).toBe(2);
    expect(calculator.divide(20, 10)).toBe(2);
    expect(calculator.divide(30, 2)).toBe(15);
});