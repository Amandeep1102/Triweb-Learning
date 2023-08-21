const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() 
{
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `<span class="task">${taskText}</span> 
    <button class="deleteButton">Delete</button>`;
    
    taskList.appendChild(li);
    taskInput.value = '';

    li.querySelector('.deleteButton').addEventListener('click', ()=> {taskList.removeChild(li); });

    li.querySelector('.task').addEventListener('click', ()=> {li.querySelector('.task').classList.toggle('completed'); });
}
