// Functions,
// Proper anotation of function, 3 strict mode features

function calcTax(income:number, taxYear = 2) {
    if (taxYear)
        return income * 1.2;
    return income * 1.3;
}

calcTax(10000)