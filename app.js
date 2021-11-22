const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //브라우저 키자마자 시간을 바로 나타나게 해준다.!
setInterval(getClock, 1000); //setInterval(sayHello, 몇초) 인수를 불러오고 단위를 입력해준다.!
