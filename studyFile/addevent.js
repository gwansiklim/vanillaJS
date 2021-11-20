// document, addEventListener 사용방법

// const title = document.getElementById("title")
title.innerText = "Got you!!"
console.log(title.className)


//같은 class명이 여러개 일 경우

const hellos = document.getElementsByClassName("hello")
console.log(hellos)

//querySelector 자식요소를 불러오는 방법, querySelectorAll은 전부 불러온다.

const title = document.querySelector(".hello h1") //부모의 class를 css쳐럼 가오는게 중요 (여러개가 있을 경우 첫번째 것만 가져온다.)
console.log(title)
title.innerText = "Hello"

// 글짜를 클릭했을 시 변화
const h1 = document.querySelector("h1")


function handleTitleClick() {
    console.log("change color"); // 브라우저 콘솔에서 확인
    h1.style.color = "blue";
}

function handleMouseenter() {
    console.log("mouse is here"); // 브라우저 콘솔에서 확인
    h1.innerText = "Mouse is here";
}

function handelMouseLeave() {
    h1.innerText = "Mouse is gone";
}

function hadelWindowResize() {
    document.body.innerText = "tomato";
}

function handelWindowCopy() {
    alert("copier!")
}

function handelWindowOffline() {
    alert("SOS no WIFI")
}

function handelWindowOnline() {
    alert("ALL GOOD!!")
}

h1.addEventListener("click", handleTitleClick) //마우스로 클릭시 변형
h1.addEventListener("mouseenter", handleMouseenter); //마우스를 올려놓기만 해도 변형 
h1.addEventListener("mouseleave", handelMouseLeave); //마우스를 안올려 놓았을 때 변형!

window.addEventListener("resize", hadelWindowResize); //브라우저 창이 작아지면 변형
window.addEventListener("copy", handelWindowCopy);
window.addEventListener("offline", handelWindowOffline);
window.addEventListener("online", handelWindowOnline);


// input 기본원리(?)
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick() {
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name")
    } else if (username.length > 15) {
        alert("Your name is too long.");
    }
}

loginButton.addEventListener("click", onLoginBtnClick);

// function의 기본동적을 막아주게 해주는 용어
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault(); //function을 사용하면 해당 이벤트를 바로 발생하는 것을 멈추게 해준다(즉, 기본동작을 막아준다.!)
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
