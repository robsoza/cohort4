/**
 * @description taxcalc pure-functions and testing
 * @name taxcalc
 */
const functions = {

    fedTaxRates: (netIncome) => {
        //Base Amounts
        let amt1 = 48535;
        let amt2 = 97069;
        let amt3 = 150473;
        let amt4 = 214368;
        //Tax Rates
        let rt1 = 0.15;
        let rt2 = 0.205;
        let rt3 = 0.26;
        let rt4 = 0.29;
        let rt5 = 0.33;
        //Tax paid per bracket
        let b1 = 48535 * rt1;
        let b2 = 48534 * rt2;
        let b3 = 53404 * rt3;
        let b4 = 63895 * rt4;

        let tax = 0;
        //15%
        if (netIncome <= amt1) {
            tax = netIncome * rt1;
            return (netIncome - tax);
        }
        //20.5%
        else if (netIncome > amt1 && netIncome <= amt2) {
            tax = ((netIncome - amt1) * rt2) + b1;
            return (netIncome - tax);
        }
        //26%
        else if (netIncome > amt2 && netIncome <= amt3) {
            tax = ((netIncome - amt2) * rt3) + b1 + b2;
            return (netIncome - tax);
        }
        //29%
        else if (netIncome > amt3 && netIncome <= amt4) {
            tax = ((netIncome - amt3) * rt4) + b1 + b2 + b3;
            return (netIncome - tax);
        }
        //33%
        else if (netIncome > amt4) {
            tax = ((netIncome - amt4) * rt5) + b1 + b2 + b3 + b4;
            return (netIncome - tax);
        }
    }
};

export default functions;