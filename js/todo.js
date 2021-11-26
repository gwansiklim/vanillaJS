const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify()를 이용해 Array들을 String으로 만들고 localstorage에 저장!
}

function deleteToDO(event) {
    // event라는 인자에서 target=button이고 parentElement는 말그대로 부모를 가리키는데 이때 부모는 li를 가르키게 된다
    // 즉, 버튼을 클릭시 button이 가지고있는 부모를 삭제하겠다는 뜻이 된다.
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //내가 클릭한 li.id와 다른 toDo는 남겨두고 싶다라는 뜻.
    saveToDos()
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✖︎";
    button.addEventListener("click", deleteToDO); //버튼을 클릭하면 이벤트 발생
    li.appendChild(span); //appendChild는 자식을 만들어준다.
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; //input을 비워준다.
    const newTodoObj = { // Array를 object로 바꿈!
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); // toDos에 Array를 만들어준다.
    paintTodo(newTodoObj); //paintTodo를 호출하고 바로 위에 있는 변수 newTodo를 불러온다.
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // 저장되어있는 object를 불러온다.

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // string을 object로 변환해준다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo); // forEach()는 괄호 안에있는 정보들을 한개씩 돌아가면서 정보를 가져온다(?)
}

