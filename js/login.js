const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //function을 사용하면 해당 이벤트를 바로 발생하는 것을 멈추게 해준다(즉, 기본동작을 막아준다.!)
    loginForm.classList.add(HIDDEN_CLASSNAME); //css에 있는 .hidden을 적용시킨다.
    const username = loginInput.value; //username이라는 변수를 이용하여 정보 가져오는 방법!
    localStorage.setItem(USERNAME_KEY, username); // 웹 디비에 정보 저장!
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);// getitem()은 localstorage에 저정되어 있는것을 불러올 때 사용 

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //form태그 이벤트를 발생하게 한다.
} else {
    //show the greetings
    paintGreetings(savedUsername);
}