// js for input field
const input_field = document.querySelector('.input');

document.addEventListener('click', function (e) {
    if (input_field.contains(e.target)) {
        // click inside
        input_field.style.border = "2px solid rgba(220, 20, 60, 0.5)";
    } else {
        // click outside
        input_field.style.border = "2px solid rgba(220, 20, 60, 0.2)";
    }
});


// js for rating
const rating = document.querySelector('.rating');
const logo = document.querySelector('.logo');

rating.addEventListener('click', function () {
    logo.style.opacity = "0.9";
    logo.style.transform = " translate(-50%, -50%) scale(1)";
    setTimeout(() => {
        logo.style.opacity = "0";
        logo.style.transform = " translate(-50%, -50%) scale(0.2)";
    }, 1000);
});


// main js for to do
let todo = JSON.parse(localStorage.getItem('todo')) || [];
const todoinput = document.querySelector('#todoinput');
const add = document.querySelector('.add');
const del = document.querySelector('.del');
const todoList = document.querySelector('.scroll');
const cnter = document.querySelector('.cnter');
let counter = todo.length;

cnter.innerHTML = counter;

document.addEventListener('DOMContentLoaded', function () {
    todoinput.addEventListener('keydown', function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            addTask();
        }
    })
    add.addEventListener('click', addTask);
    del.addEventListener('click', delAllTasks);
    displayTask();
})

function addTask() {
    const newTask = todoinput.value.trim();
    if (newTask.length >= 1) {
        todo.push({
            text: newTask,
            disabled: false,
        });
        saveToLocalStorage();
        todoinput.value = "";
        displayTask();
        counter = counter + 1;
        cnter.innerHTML = counter;
    }else{
        window.alert("Please enter a task");
    }

}
function delAllTasks() {

}

function displayTask() {
    todoList.innerHTML = "";
    todo.forEach(function (item, index) {
        const task = document.createElement('p');
        task.innerHTML = `
        <div class="todo-container">
            <input type="checkbox" id="input-${index}" ${item.disabled ? "checked" : ""} class="todo-checkbox">
            <li id="todo-${index}" class="${item.disabled ? "disabled" : ""}" onclick="editTask(${index})">${item.text}</li>
            </div>
        `;
        task.querySelector('.todo-checkbox').addEventListener('change', function () {
            toggleTask(index);
        });
        todoList.appendChild(task);
    });
}

function saveToLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(todo));
}