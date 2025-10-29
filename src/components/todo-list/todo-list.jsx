import React from 'react';
import { useState } from 'react';
import './todo-list.css';
import AddInput from '../add-input/add-input.jsx';
import ListItems from '../list-items/list-items.jsx';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'колла', completed: false },
    ]);

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        console.log(todos);
    };

    return (
        <div className="todo-list">
            <h1 className="title">Todo List</h1>

            <AddInput create={ createTodo } />

            <ListItems />
        </div>
    );
};

export default TodoList;