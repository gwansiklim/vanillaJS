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
