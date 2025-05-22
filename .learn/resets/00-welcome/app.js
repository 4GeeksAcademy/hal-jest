/* const sum = (a,b) => {
    return a + b
}

const result = sum(7, 3);
console.log(result);

module.exports = { sum }; */

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen.toFixed(2);
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar.toFixed(2);
} 

const fromYenToPound = function(valueInYen) {
     let valueInEuro = valueInYen / oneEurosIs.JPY;
      let valueInPound = valueInEuro * oneEurosIs.GBP;
    return valueInPound;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
