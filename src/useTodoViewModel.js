import { useState } from 'react';

const useTodoViewModel = (todoModel) => {
    const [todos, setTodos] = useState(todoModel.getTodos());
    const [task, setTask] = useState('');

    const addTodo = (task) => {
        todoModel.addTodo(task);
        setTodos(todoModel.getTodos());
    };

    const removeTodo = (id) => {
        todoModel.removeTodo(id);
        setTodos(todoModel.getTodos());
    };

    const toggleTodoCompleted = (id) => {
        todoModel.toggleTodoCompleted(id);
        setTodos(todoModel.getTodos());
    };

    const handleAddTodo = () => {
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };


    return {
        todos,
        task,
        setTask,
        addTodo,
        removeTodo,
        toggleTodoCompleted,
        handleAddTodo,
    };
}

export default useTodoViewModel;