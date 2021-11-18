// if문 사용하여 코드 줄이는 방법
// const h1 = document.querySelector("h1")

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }
// h1.addEventListener("click", handleTitleClick);


// css파일 가져와 사용하기!
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