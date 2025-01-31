const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

window.addEventListener('DOMContentLoaded', loadTasks);

addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.trim() !== "" ){
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between' , 'align-items-center');
        li.innerHTML = `
        <span>${taskInput.value}</span>
        <div>
            <button class="btn btn-success btn-sm float-right ml-2 complete-btn">Complete</button>
            <button class="btn btn-danger btn-sm float-right delete-btn">Delete</button>
        </div>
        `;
    taskList.appendChild(li);
    saveTasks();
    taskInput.value = "";
        }
    });


    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('complete-btn')) {
            const taskText = e.target.closest('li').querySelector('span');
            taskText.style.textDecoration = 'line-through';
            saveTasks();
        }
        if (e.target.classList.contains('delete-btn')) {
            e.target.closest('li').remove();
            saveTasks();
        }
    });

    function saveTasks() {
        const tasks = [];
        const taskItems = taskList.querySelectorAll('li');
        taskItems.forEach(item => {
            const taskText = item.querySelector('span').textContent;
            const completed = item.querySelector('span').style.textDecoration === 'line-through';
            tasks.push({
                text: taskText,
                completed
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.classList.add('list-group-item' ,'d-flex', 'justify-content-between', 'align-items-center');
            li.innerHTML = `
                <span style="text-decoration: ${task.completed ? 'line-through' : 'none'}">${task.text}</span>
                <div>
                    <button class="btn btn-success btn-sm float-right ml-2 complete-btn">Complete</button>
                    <button class="btn btn-danger btn-sm float-right  delete-btn">Delete</button>
                </div>
                `;
            taskList.appendChild(li);
        });
    }
    