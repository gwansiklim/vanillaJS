// if문 사용하여 코드 줄이는 방법
const h1 = document.querySelector("h1")

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);


// css파일 가져와 사용하기! className으로 h1에 class를 넣어준다.
const h1 = document.querySelector("h1")

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}
h1.addEventListener("click", handleTitleClick);



// classList를 이용하여 원래 있던 class를 사용하면서 추가(?)하는 방법
const h1 = document.querySelector("h1")

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);


// classList.toggle 사용방법 toggle은 있으면 없애고 없으면 만드는 역활
const h1 = document.querySelector("h1")

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
