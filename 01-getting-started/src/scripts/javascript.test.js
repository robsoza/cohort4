import functions from "./javascript"

test("does that convertToFahrenheit func work?", () => {
    expect(functions.convertToFahrenheit(1)).toBe(33.8);
    expect(functions.convertToFahrenheit(0)).toBe(32);
    expect(functions.convertToFahrenheit(2)).toBe(35.6);
});