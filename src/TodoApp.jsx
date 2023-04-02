import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoModel from './TodoModel';
import useTodoViewModel from './useTodoViewModel';
import './TodoApp.css';

const todoModel = new TodoModel();

const TodoApp = observer(() => {
    const {
        todos,
        task,
        setTask,
        removeTodo,
        toggleTodoCompleted,
        handleAddTodo,
    } = useTodoViewModel(todoModel);

    return (
        <div className="todo-app">
            <h1>React Todo App with MVVM, Hooks, and MobX</h1>
            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="add-todo primary" onClick={handleAddTodo}>Add Todo</button>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li className={`todo-item${todo.completed ? ' completed' : ''}`} key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodoCompleted(todo.id)}
                        />
                        <span className="task-text">{todo.text}</span>
                        <button className="delete-btn" onClick={() => removeTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default TodoApp;
