/**
 * @description taxcalc, pure-functions and testing
 * @name taxcalc
 */
const taxCalcFunctions = {

    fedTaxRates: (netIncome) => {
        //Base Amounts
        const amt1 = 48535;
        const amt2 = 97069;
        const amt3 = 150473;
        const amt4 = 214368;
        //Tax Rates
        const rt1 = 0.15;
        const rt2 = 0.205;
        const rt3 = 0.26;
        const rt4 = 0.29;
        const rt5 = 0.33;
        //Tax paid per bracket
        const b1 = 48535 * rt1;
        const b2 = 48534 * rt2;
        const b3 = 53404 * rt3;
        const b4 = 63895 * rt4;

        let tax = 0;
        //15%
        if (netIncome <= amt1 && netIncome >= 0) {
            tax = netIncome * rt1;
            return Number((tax).toFixed(2));
        }
        //20.5%
        else if (netIncome > amt1 && netIncome <= amt2 && netIncome >= 0) {
            tax = ((netIncome - amt1) * rt2) + b1;
            return Number((tax).toFixed(2));
        }
        //26%
        else if (netIncome > amt2 && netIncome <= amt3 && netIncome >= 0) {
            tax = ((netIncome - amt2) * rt3) + b1 + b2;
            return Number((tax).toFixed(2));
        }
        //29%
        else if (netIncome > amt3 && netIncome <= amt4 && netIncome >= 0) {
            tax = ((netIncome - amt3) * rt4) + b1 + b2 + b3;
            return Number((tax).toFixed(2));
        }
        //33%
        else if (netIncome > amt4 && netIncome >= 0) {
            tax = ((netIncome - amt4) * rt5) + b1 + b2 + b3 + b4;
            return Number((tax).toFixed(2));
        }
    }
};

export default taxCalcFunctions;