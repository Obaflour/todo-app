// script.js

// Get the registration form element
const registrationForm = document.getElementById('registrationForm');

// Handle form submission
registrationForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get user input values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create a user object
  const user = {
    username,
    email,
    password
  };

  try {
    // Send a POST request to the server with the user data
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    // Check if the registration was successful
    if (response.ok) {
      // Registration successful, redirect to login page or show success message
      window.location.href = '/login.html';
    } else {
      // Registration failed, display error message
      const error = await response.json();
      alert(error.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});


// Assume you have an array of tasks
const tasks = [
  { name: 'Task 1', description: 'Description of Task 1' },
  { name: 'Task 2', description: 'Description of Task 2' },
  { name: 'Task 3', description: 'Description of Task 3' }
];

// Function to dynamically create task list items
function createTaskItem(task) {
  const li = document.createElement('li');
  li.classList.add('task-item');

  const name = document.createElement('span');
  name.classList.add('task-name');
  name.textContent = task.name;

  const description = document.createElement('span');
  description.classList.add('task-description');
  description.textContent = task.description;

  li.appendChild(name);
  li.appendChild(description);

  return li;
}

// Function to display the task list
function displayTaskList() {
  const taskList = document.getElementById('tasks');

  tasks.forEach(task => {
    const taskItem = createTaskItem(task);
    taskList.appendChild(taskItem);
  });
}

// Call the displayTaskList function to show the task list
displayTaskList();

const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the task details from the form inputs
  const taskName = document.getElementById('task-name').value;
  const taskDescription = document.getElementById('task-description').value;

  // Create a new task object
  const newTask = {
    name: taskName,
    description: taskDescription,
  };

  // TODO: Perform further actions with the new task (e.g., save it to a database, add it to the task list)

  // Reset the form
  taskForm.reset();
});


// Sample tasks for demonstration
let tasks = [
  { id: 1, name: 'Task 1', description: 'Description 1' },
  { id: 2, name: 'Task 2', description: 'Description 2' },
  { id: 3, name: 'Task 3', description: 'Description 3' }
];

const taskList = document.getElementById('task-list');

// Function to render the task list
function renderTaskList() {
  taskList.innerHTML = ''; // Clear the existing list

  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <div>
        <span>${task.name}</span>
        <span>${task.description}</span>
        <button class="edit-btn" data-id="${task.id}">Edit</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });

  attachEditEventListeners(); // Attach event listeners to the edit buttons
}

// Function to handle the edit event
function handleEdit(event) {
  const taskId = parseInt(event.target.dataset.id);

  // Find the task by its ID
  const task = tasks.find(task => task.id === taskId);

  if (task) {
    // Prompt the user for the updated task details
    const updatedName = prompt('Enter updated task name:', task.name);
    const updatedDescription = prompt('Enter updated task description:', task.description);

    // Update the task details if the user provides valid inputs
    if (updatedName && updatedDescription) {
      task.name = updatedName;
      task.description = updatedDescription;
      renderTaskList(); // Render the updated task list
    }
  }
}

// Function to attach event listeners to the edit buttons
function attachEditEventListeners() {
  const editButtons = document.getElementsByClassName('edit-btn');
  Array.from(editButtons).forEach(button => {
    button.addEventListener('click', handleEdit);
  });
}

// Render the initial task list
renderTaskList();

// Sample tasks for demonstration
let tasks = [
  { id: 1, name: 'Task 1', description: 'Description 1' },
  { id: 2, name: 'Task 2', description: 'Description 2' },
  { id: 3, name: 'Task 3', description: 'Description 3' }
];

const taskList = document.getElementById('task-list');

// Function to render the task list
function renderTaskList() {
  taskList.innerHTML = ''; // Clear the existing list

  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <div>
        <span>${task.name}</span>
        <span>${task.description}</span>
        <button class="edit-btn" data-id="${task.id}">Edit</button>
        <button class="delete-btn" data-id="${task.id}">Delete</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });

  attachEditEventListeners(); // Attach event listeners to the edit buttons
  attachDeleteEventListeners(); // Attach event listeners to the delete buttons
}

// Function to handle the delete event
function handleDelete(event) {
  const taskId = parseInt(event.target.dataset.id);

  // Find the index of the task by its ID
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1); // Remove the task from the array
    renderTaskList(); // Render the updated task list
  }
}

// Function to attach event listeners to the delete buttons
function attachDeleteEventListeners() {
  const deleteButtons = document.getElementsByClassName('delete-btn');
  Array.from(deleteButtons).forEach(button => {
    button.addEventListener('click', handleDelete);
  });
}

// Render the initial task list
renderTaskList();

// Sample tasks for demonstration
let tasks = [
  { id: 1, name: 'Task 1', description: 'Description 1', completed: false },
  { id: 2, name: 'Task 2', description: 'Description 2', completed: true },
  { id: 3, name: 'Task 3', description: 'Description 3', completed: false }
];

const taskList = document.getElementById('task-list');

// Function to render the task list
function renderTaskList() {
  taskList.innerHTML = ''; // Clear the existing list

  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    const taskStatus = task.completed ? 'Completed' : 'Incomplete';

    taskItem.innerHTML = `
      <div>
        <span>${task.name}</span>
        <span>${task.description}</span>
        <span>Status: ${taskStatus}</span>
        <button class="edit-btn" data-id="${task.id}">Edit</button>
        <button class="delete-btn" data-id="${task.id}">Delete</button>
        <button class="status-btn" data-id="${task.id}">${task.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
      </div>
    `;

    taskList.appendChild(taskItem);
  });

  attachEditEventListeners(); // Attach event listeners to the edit buttons
  attachDeleteEventListeners(); // Attach event listeners to the delete buttons
  attachStatusEventListeners(); // Attach event listeners to the status buttons
}

// Function to handle the status toggle event
function handleStatusToggle(event) {
  const taskId = parseInt(event.target.dataset.id);

  // Find the task by its ID
  const task = tasks.find(task => task.id === taskId);

  if (task) {
    task.completed = !task.completed; // Toggle the completed status
    renderTaskList(); // Render the updated task list
  }
}

// Function to attach event listeners to the status buttons
function attachStatusEventListeners() {
  const statusButtons = document.getElementsByClassName('status-btn');
  Array.from(statusButtons).forEach(button => {
    button.addEventListener('click', handleStatusToggle);
  });
}

// Render the initial task list
renderTaskList();

// Sample tasks for demonstration
let tasks = [
  { id: 1, name: 'Task 1', description: 'Description 1', completed: false },
  { id: 2, name: 'Task 2', description: 'Description 2', completed: true },
  { id: 3, name: 'Task 3', description: 'Description 3', completed: false }
];

const taskList = document.getElementById('task-list');

// Function to render the task list
function renderTaskList() {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskStatus = task.completed ? 'Completed' : 'Incomplete';

    taskItem.innerHTML = `
      <div class="task-name">${task.name}</div>
      <div class="task-description">${task.description}</div>
      <button class="status-btn">${taskStatus}</button>
    `;

    if (task.completed) {
      taskItem.classList.add('completed');
    }

    taskList.appendChild(taskItem);
  });

  attachStatusEventListeners();
}

// Function to handle the status toggle event
function handleStatusToggle(event) {
  const taskItem = event.target.parentNode;
  const taskId = parseInt(taskItem.dataset.id);
  const task = tasks.find(task => task.id === taskId);

  if (task) {
    task.completed = !task.completed;
    taskItem.classList.toggle('completed');
    event.target.textContent = task.completed ? 'Completed' : 'Incomplete';
  }
}

// Function to attach event listeners to the status buttons
function attachStatusEventListeners() {
  const statusButtons = document.getElementsByClassName('status-btn');

  Array.from(statusButtons).forEach(button => {
    button.addEventListener('click', handleStatusToggle);
  });
}

// Render the initial task list
renderTaskList();

