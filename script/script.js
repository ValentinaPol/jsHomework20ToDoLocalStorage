
let listTasks = document.querySelector('#list');
listTasks.innerHTML = localStorage.getItem('list-tasks') || '';


const saveTasks = () => {
    let currentTasks = listTasks.innerHTML;
    localStorage.setItem('list-tasks', currentTasks);
}

document.querySelector('#save-tasks').addEventListener('click', saveTasks);

const clearTasks = () => {
    let currentTasks = listTasks.innerHTML;
    localStorage.clear(currentTasks);
    listTasks.innerHTML = '';
}

document.querySelector('#clear-tasks').addEventListener('click', clearTasks);



let newTask = document.querySelector('#inputTask');
const addTask = () => {
    listTasks.innerHTML += `<li> ${newTask.value} <span>Delete</span> </li>`;
    newTask.value = '';
}

document.querySelector('#btn-add').addEventListener('click', addTask);