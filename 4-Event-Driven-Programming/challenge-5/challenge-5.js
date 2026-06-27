// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// DOM Elements
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Event Listener
addButton.addEventListener("click", addTask);

// Function
function addTask() {

    // Remove extra spaces
    const taskName = taskInput.value.trim();

    // Validation
    if (taskName === "") {
        alert("Please enter a task.");
        taskInput.focus();
        return;
    }

    // Create elements
    const listItem = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = taskName;

    const actions = document.createElement("div");
    actions.className = "actions";

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.className = "complete-btn";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    // Append buttons
    actions.appendChild(completeButton);
    actions.appendChild(deleteButton);

    // Append elements
    listItem.appendChild(taskText);
    listItem.appendChild(actions);

    taskList.appendChild(listItem);

    // Complete event
    completeButton.addEventListener("click", function () {
        taskText.classList.toggle("completed");
    });

    // Delete event
    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    // Clear input
    taskInput.value = "";
    taskInput.focus();
}