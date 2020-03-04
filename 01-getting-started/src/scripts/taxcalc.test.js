import functions from "./taxcalc"

test("does that taxRates function work?", () => {
    expect(functions.taxRates(1)).toBe(0.85);
    expect(functions.taxRates(250)).toBe(212.5);
    
});