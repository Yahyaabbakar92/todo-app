const taskInput = document.getElementById("task-input")
const addBtn = document.getElementById("add-btn")
const taskList = document.getElementById("task-list")

addBtn.addEventListener('click', addTasks)

function addTasks() {
    const task = taskInput.addEventListener('input', inputTasks)
    const listItem = document.createElement("li")
    listItem.textContent = task
    taskList.appendChild(listItem)
}

function inputTasks (e) {
    return e.target.value
}