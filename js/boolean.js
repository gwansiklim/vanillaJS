// boolean은 참인지 거짓인지를 말한다.

const calcultor = {
    add: function (a, b) {
        console.log(a + b);
    },
    min: function (a, b) {
        console.log(a - b);
    },
    divi: function (a, b) {
        console.log(a / b);
    },
    squa: function (a, b) {
        console.log(a ** b);
    }
}
calcultor.add(1, 2);
calcultor.min(1, 2);
calcultor.divi(1, 2);
calcultor.squa(1, 2);