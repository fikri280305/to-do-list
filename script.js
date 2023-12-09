document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("task-input").focus();
});

function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("task-list");
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
        taskInput.focus();
    }
}

function deleteTask(btn) {
    var listItem = btn.closest("li");
    listItem.remove();
}
