// string을 숫자로 변환

// 브라우저창에서 alert창이 생기면서 글자를 쓸수 있게 해준다.
const age = prompt("How old are you?")

//typeof 뒤에 괄호를 넣지 않고 바로 변수명을 사용, typeof는 답을 썼을때 string인지 number인지 알려준다
// parseInt()는 string을 숫자로 변환 해준다.
console.log(age)
console.log(typeof "15", typeof parseInt("hi"))

// 다른 방식- 질문에 숫자를 입력하면 숫자를 나타나게 해주고 문자를 사용하면 NaN이 뜸.!
const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age)); // isNaN을 사용하면 참인지 거짓인지 콘솔에 알려줌