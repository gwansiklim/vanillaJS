// function 기초 공부

//boolean은 참인지 거짓인지를 말한다.

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

// function retrun 기술

// const calcultor = {
//     plus: function (a, b) {
//         return a + b;
//     },
//     min: function (a, b) {
//         return a - b;
//     },
//     divi: function (a, b) {
//         return a / b;
//     },
//     squa: function (a, b) {
//         return a ** b;
//     }
// };
// const plusResult = calcultor.plus(5, 6);
// console.log(plusResult);
// const minResult = calcultor.min(plusResult, 10)
// console.log(minResult);
// const diviResult = calcultor.divi(plusResult, minResult);
// console.log(diviResult);


// string을 숫자로 변환

// 브라우저창에서 alert창이 생기면서 글자를 쓸수 있게 해준다.
const age = prompt("How old are you?")

//typeof 뒤에 괄호를 넣지 않고 바로 변수명을 사용, typeof는 답을 썼을때 string인지 number인지 알려준다
// parseInt()는 string을 숫자로 변환 해준다.
// console.log(age)
// console.log(typeof "15", typeof parseInt("hi"))

// 다른 방식- 질문에 숫자를 입력하면 숫자를 나타나게 해주고 문자를 사용하면 NaN이 뜸.!
// const age = parseInt(prompt("How old are you?"));

// isNaN을 사용하면 참인지 거짓인지 콘솔에 알려줌
// console.log(isNaN(age));

//조건문.!
if (isNaN(age)) {
    console.log("숫자를 입력해 주세요!!!");
} else {
    console.log("감사합니다.!!");
}
