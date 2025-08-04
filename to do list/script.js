let tasks = [];

function renderTasks() {
  const pending = document.getElementById('pendingTasks');
  const completed = document.getElementById('completedTasks');
  const pendingCount = document.getElementById('pendingCount');
  const completedCount = document.getElementById('completedCount');

  pending.innerHTML = '';
  completed.innerHTML = '';

  let pCount = 0, cCount = 0;

  tasks.forEach((task, index) => {
    const li = document.createElement('li');

    const timestamp = task.completed
      ? `Completed: ${task.completedAt}`
      : `Created: ${task.createdAt}`;

    li.innerHTML = `
      <span contenteditable="false">${task.text}</span>
      <span class="time">${timestamp}</span>
      <div class="actions">
        <button class="toggle" onclick="toggleStatus(${index})">${task.completed ? '↩️' : '✅'}</button>
        <button class="edit" onclick="editTask(${index})">✏️</button>
        <button class="delete" onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;

    if (task.completed) {
      completed.appendChild(li);
      cCount++;
    } else {
      pending.appendChild(li);
      pCount++;
    }
  });

  pendingCount.innerText = pCount;
  completedCount.innerText = cCount;

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return alert("Please enter a task.");

  const now = new Date().toLocaleString();
  tasks.push({
    text,
    completed: false,
    createdAt: now,
    completedAt: null
  });

  input.value = '';
  renderTasks();
}

function toggleStatus(index) {
  const task = tasks[index];
  task.completed = !task.completed;
  task.completedAt = task.completed ? new Date().toLocaleString() : null;
  renderTasks();
}

function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

function editTask(index) {
  const li = document.querySelectorAll('li')[index];
  const span = li.querySelector('span');
  if (span.isContentEditable) {
    span.contentEditable = "false";
    tasks[index].text = span.innerText.trim();
    renderTasks();
  } else {
    span.contentEditable = "true";
    span.focus();
  }
}

function loadTasks() {
  const saved = localStorage.getItem('tasks');
  if (saved) tasks = JSON.parse(saved);
  renderTasks();
}

loadTasks();
