const taskInput = document.getElementById("task-input")
const addBtn = document.getElementById("add-btn")
const taskList = document.getElementById("task-list")

addBtn.addEventListener('click', addTasks)

function addTasks() {
    const task = taskInput.value
    if (task.trim() === "") {
        return
    } 
    const listItem = document.createElement("li")
    listItem.textContent = task

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    listItem.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', function () {
        listItem.remove()
    })

    taskList.appendChild(listItem)
    taskInput.value = ''
}

