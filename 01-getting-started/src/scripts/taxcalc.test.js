
import taxCalcFunctions from "./taxcalc"

test("does that taxRates function work?", () => {
    expect(taxCalcFunctions.fedTaxRates(1)).toBe(0.15);
    expect(taxCalcFunctions.fedTaxRates(250)).toBe(37.5);
    expect(taxCalcFunctions.fedTaxRates(12000)).toBe(1800);
    expect(taxCalcFunctions.fedTaxRates(50000)).toBe(7580.57);
    expect(taxCalcFunctions.fedTaxRates(100000)).toBe(17991.78);
    expect(taxCalcFunctions.fedTaxRates(160000)).toBe(33877.59);
    expect(taxCalcFunctions.fedTaxRates(215000)).toBe(49852.87);
});