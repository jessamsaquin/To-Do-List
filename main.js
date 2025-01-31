const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.trim() !== "" ){
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="btn btn-success btn-sm float-right ml-2 complete-btn">Complete</button>
        <button class="btn btn-danger btn-sm float-right delete-btn">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
        }
    });
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('complete-btn')) {
            e.target.parentElement.querySelector('span').style.textDecoration = 'line-through';
        }
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });
    