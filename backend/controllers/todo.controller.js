// This file imports the "model" to interact with data
const todoModel = require('../models/todo.model');

exports.getAllTodos = (req, res) => {
  const todos = todoModel.findAll();
  res.status(200).json(todos);
};

exports.createTodo = (req, res) => {
  const { task } = req.body;
  
  if (!task || task.trim() === '') {
    return res.status(400).json({ error: 'Task content is required' });
  }

  const newTodo = todoModel.create({ task });
  res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const updates = req.body; // { task, completed }

  const updatedTodo = todoModel.update(id, updates);

  if (!updatedTodo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.status(200).json(updatedTodo);
};

exports.deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const success = todoModel.remove(id);

  if (!success) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.status(204).send();
};
