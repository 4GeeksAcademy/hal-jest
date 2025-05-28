const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected.toFixed(2)); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dollar should be 146.26 yens", () => {
    const yens = fromDollarToYen(1);
    const expectedYens = (1 / 1.07) * 156.5;
    expect(yens).toBe(expectedYens.toFixed(2));
})

test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(1);
    const expectedDollars = 1 * 1.07;
    expect(dollars).toBe(expectedDollars.toFixed(2));
})
test("One thousand yens should be 5.56 pounds", () => {
    const pounds = fromYenToPound(1000);
    const expectedPounds = (1000 / 156.5) * 0.87;
    expect(pounds).toBe(expectedPounds.toFixed(2));
})

console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(1));
console.log(fromYenToPound(1000));

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };