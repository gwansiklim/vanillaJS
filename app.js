// document 사용방법

// const title = document.getElementById("title")
// title.innerText = "Got you!!"
// console.log(title.className)


//같은 class명이 여러개 일 경우

// const hellos = document.getElementsByClassName("hello")
// console.log(hellos)

//querySelector 자식요소를 불러오는 방법, querySelectorAll은 전부 불러온다.

// const title = document.querySelector(".hello h1") //부모의 class를 css쳐럼 가오는게 중요 (여러개가 있을 경우 첫번째 것만 가져온다.)
// console.log(title)
// title.innerText = "Hello"

// 글짜를 클릭했을 시 변화
const title = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {
    console.log("change color"); // 브라우저 콘솔에서 확인
    title.style.color = "blue";
}

function handleMouseenter() {
    console.log("mouse is here"); // 브라우저 콘솔에서 확인
    title.innerText = "Mouse is here";
}

function handelMouseLeave() {
    title.innerText = "Mouse is gone";
}

title.addEventListener("click", handleTitleClick) //마우스로 클릭시 변형
title.addEventListener("mouseenter", handleMouseenter); //마우스를 올려놓기만 해도 변형 
title.addEventListener("mouseleave", handelMouseLeave); //마우스를 안올려 놓았을 때 변형!