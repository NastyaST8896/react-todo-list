import React from 'react';
import { useState } from 'react';
import './todo-list.css';
import AddInput from '../add-input/add-input.jsx';
import ListItems from '../list-items/list-items.jsx';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'колла1', completed: false },
        { id: 2, text: 'колла2', completed: false },
        { id: 3, text: 'колла3', completed: false },
        { id: 4, text: 'колла4', completed: false },
        { id: 5, text: 'колла5', completed: false },
        { id: 6, text: 'колла6', completed: false },
    ]);

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (todo) => setTodos(todos.filter((item) => item.id !== todo));

    return (
        <div className="todo-list">
            <h1 className="title">Todo List</h1>

            <AddInput create={ createTodo } />

            <ListItems todos={ todos } onDelete={ deleteTodo } />
        </div>
    );
};

export default TodoList;