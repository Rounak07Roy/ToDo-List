import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState('pending');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === '') {
      alert('Task cannot be empty');
      return;
    }
    setTasks([...tasks, { text: newTask, completed: newTaskStatus === 'completed' }]);
    setNewTask('');
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => (
      i === index ? { ...task, completed: !task.completed } : task
    ));
    setTasks(newTasks);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <select onChange={(e) => setNewTaskStatus(e.target.value)} value={newTaskStatus}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={addTask}>Add Task</button>
      <div>
        <select onChange={handleFilterChange} value={filter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
              onClick={() => toggleTaskCompletion(index)}
            >
              {task.text} ({task.completed ? 'Completed' : 'Pending'})
            </span>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
