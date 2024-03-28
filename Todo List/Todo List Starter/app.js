list = document.querySelector(".list");
input = document.querySelector('input')

let todoInputValue = ''
let counter = 0

let todoList = [];

function onInputChange(event) {
    todoInputValue = event.target.value
}

function addTodo() {
    if (!todoInputValue) {
        return
    }
    todoList.push({
        id: counter++,
        task: todoInputValue,
    })
    renderTodo()
    input.value = ''
    todoInputValue = ""
}

function deleteTodo(id) {
  todoList = todoList.filter((todo) => todo.id !== id);
  renderTodo()
}

function renderTodo() {
  list.innerHTML = todoList
    .map(
      (elem) => `
    <li>
        ${elem.task}
        <button class="todo__delete" onclick="deleteTodo(${elem.id})">
        x
        </button>
    </li>`
    )
    .join("");
}