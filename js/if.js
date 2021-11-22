const age = parseInt(prompt("How old are you?"));

//조건문.!
if (isNaN(age)) {
    console.log("숫자를 입력해 주세요!!!");
} else {
    console.log("감사합니다.!!");
}

// else if와 or, and 사용법

const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
    console.log("숫자를 입력해 주셔야 합니다.");
} else if (age < 18) {
    console.log("나이가 너무 어려요.!")
} else if (age >= 18 && age <= 50) {
    console.log("드셔도 됩니다.!")
} else if (age > 50 && age <= 80) {
    console.log("건강을 생각하셔서라도 과음은 하지마세요!")
} else {
    console.log("산책 하시는 것을 추천합니다!")
}