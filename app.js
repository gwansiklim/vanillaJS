// const calcultor = {
//     add: function (a, b) {
//         console.log(a + b);
//     },
//     min: function (a, b) {
//         console.log(a - b);
//     },
//     divi: function (a, b) {
//         console.log(a / b);
//     },
//     squa: function (a, b) {
//         console.log(a ** b);
//     }
// }
// calcultor.add(1, 2);
// calcultor.min(1, 2);
// calcultor.divi(1, 2);
// calcultor.squa(1, 2);

const calcultor = {
    plus: function (a, b) {
        return a + b;
    },
    min: function (a, b) {
        return a - b;
    },
    divi: function (a, b) {
        return a / b;
    },
    squa: function (a, b) {
        return a ** b;
    }
};
const plusResult = calcultor.plus(5, 6);
console.log(plusResult);
const minResult = calcultor.min(plusResult, 10)
console.log(minResult);
const diviResult = calcultor.divi(plusResult, minResult);
console.log(diviResult);
