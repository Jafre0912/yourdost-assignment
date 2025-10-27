// In-memory data store
let todos = [
  { id: 1, task: 'Complete YourDOST assignment', completed: false },
  { id: 2, task: 'Submit the form', completed: false },
];
let currentId = 3;

// These functions are exported so the controller can use them
exports.findAll = () => {
  return todos;
};

exports.create = (todoData) => {
  const newTodo = {
    id: currentId++,
    task: todoData.task,
    completed: false
  };
  todos.push(newTodo);
  return newTodo;
};

exports.update = (id, updates) => {
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return null;
  }

  if (updates.task !== undefined) {
    todo.task = updates.task;
  }
  if (updates.completed !== undefined) {
    todo.completed = Boolean(updates.completed);
  }
  return todo;
};

exports.remove = (id) => {
  const todoIndex = todos.findIndex(t => t.id === id);
  if (todoIndex === -1) {
    return false; // Not found
  }
  todos.splice(todoIndex, 1);
  return true; // Success
};
