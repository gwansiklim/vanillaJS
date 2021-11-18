// document 사용방법

// const title = document.getElementById("title")
// title.innerText = "Got you!!"
// console.log(title.className)


//같은 class명이 여러개 일 경우

// const hellos = document.getElementsByClassName("hello")
// console.log(hellos)

//querySelector 자식요소를 불러오는 방법, querySelectorAll은 전부 불러온다.

const title = document.querySelector(".hello h1") //부모의 class를 css쳐럼 가오는게 중요 (여러개가 있을 경우 첫번째 것만 가져온다.)

console.log(title)