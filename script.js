function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dateTimeInput = document.getElementById('dateTimeInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value === '' || dateTimeInput.value === '') {
        alert('Please enter both task and date/time');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskInput.value} (Due: ${new Date(dateTimeInput.value).toLocaleString()})
        <div>
            <button onclick="markCompleted(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
            <button onclick="editTask(this)">Edit</button>
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = '';
    dateTimeInput.value = '';
}

function markCompleted(button) {
    const li = button.parentNode.parentNode;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentNode.parentNode;
    li.remove();
}

function editTask(button) {
    const li = button.parentNode.parentNode;
    const taskText = li.childNodes[0].textContent;
    const taskInput = document.getElementById('taskInput');
    const dateTimeInput = document.getElementById('dateTimeInput');

    const task = taskText.substring(0, taskText.indexOf(' (Due: ')).trim();
    const dateTime = taskText.substring(taskText.indexOf(' (Due: ') + 7, taskText.length - 1).trim();

    taskInput.value = task;
    dateTimeInput.value = new Date(dateTime).toISOString().slice(0, 16);

    li.remove();
}
