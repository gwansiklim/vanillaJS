const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); //브라우저 키자마자 시간을 바로 나타나게 해준다.!
setInterval(getClock, 1000); //setInterval(sayHello, 몇초) 인수를 불러오고 단위를 입력해준다.!
