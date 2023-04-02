import { makeAutoObservable } from 'mobx';

class TodoModel {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(text) {
        this.todos.push({
            id: Date.now(),
            text,
            completed: false,
        });
    }

    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    toggleTodoCompleted(id) {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
    }

    getTodos() {
        return this.todos;
    }
}

export default TodoModel;
