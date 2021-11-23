const images = [
    "1.png",
    "2.png",
    "3.png"
]
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //html에 <img>를 생성한다.

bgImage.src = `img/${chosenImage}`; //html에 <img src="./img/random"> 을 생성.

document.body.appendChild(bgImage);