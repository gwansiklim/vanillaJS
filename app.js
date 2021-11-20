const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault(); //function을 사용하면 해당 이벤트를 바로 발생하는 것을 멈추게 해준다(즉, 기본동작을 막아준다.!)
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);