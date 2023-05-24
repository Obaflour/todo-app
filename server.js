const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Sample tasks for demonstration
let tasks = [
  { id: 1, name: 'Task 1', description: 'Description 1', completed: false },
  { id: 2, name: 'Task 2', description: 'Description 2', completed: true },
  { id: 3, name: 'Task 3', description: 'Description 3', completed: false }
];

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Create a new task
app.post('/api/tasks', (req, res) => {
  const { name, description } = req.body;
  const newTask = { id: tasks.length + 1, name, description, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task
app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { name, description, completed } = req.body;
  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.name = name || task.name;
  task.description = description || task.description;
  task.completed = completed || task.completed;

  res.json(task);
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex(task => task.id === taskId);

  if (index === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const deletedTask = tasks.splice(index, 1);
  res.json(deletedTask[0]);
});

const port = 3001; // Change the port number if needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

