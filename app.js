/* const sum = (a,b) => {
    return a + b
}

module.exports = { sum }; */

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromEuroToYen = function(valueInEuro){
    let yens = valueInEuro * oneEuroIs.JPY;
    return yens.toFixed(2);
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = oneEuroIs.USD / valueInDollar;
    let valueInYen = fromEuroToYen(valueInEuro);
    return valueInYen.toFixed(2);
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar.toFixed(2);
} 

const fromEuroToPound = function(euros) {
    let pounds = euros * oneEuroIs.GBP;
    return pounds.toFixed(2);
}

const fromYenToPound = function(valueInYen) {
     let valueInEuro = valueInYen / oneEurosIs.JPY;
      let valueInPound = valueInEuro * oneEurosIs.GBP;
    return valueInPound;
}



module.export = { fromEuroToYen, fromDollarToYen, fromEuroToDollar, fromEuroToPound, fromYenToPound }

