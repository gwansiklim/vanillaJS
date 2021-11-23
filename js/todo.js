const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); //appendChild는 자식을 만들어준다.
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; //input을 비워준다.
    paintTodo(newTodo); //paintTodo를 호출하고 바로 위에 있는 변수 newTodo를 불러온다.
}
toDoForm.addEventListener("submit", handleToDoSubmit);