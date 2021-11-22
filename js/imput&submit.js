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
