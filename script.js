const taskInput = document.getElementById("task-input")
const addBtn = document.getElementById("add-btn")
const taskList = document.getElementById("task-list")

addBtn.addEventListener('click', addTasks)

function addTasks() {
    const task = taskInput.value
    const listItem = document.createElement("li")
    listItem.textContent = task
    taskList.appendChild(listItem)
}

