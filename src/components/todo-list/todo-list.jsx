import React from 'react';
import { useState, useEffect } from 'react';
import './todo-list.css';
import AddInput from '../add-input/add-input.jsx';
import ListItems from '../list-items/list-items.jsx';
import { AllCheckedIcon } from '../icons/index.js';
import FilterItems from '../filter-items/filter-items.jsx';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const [filter, setFilter] = useState('All');

    useEffect(() => {
        fetch('http://localhost:3000/api/todos')
            .then(res => res.json())
            .then(data => setTodos(data.data));
    }, []);

    const createTodo = (trimmedValue) => {
        fetch('http://localhost:3000/api/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: trimmedValue })
        })
            .then(res => res.json())
            .then(data => {
                setTodos(data.data);
            });
    };

    const deleteTodo = (todo) => {
        fetch(`http://localhost:3000/api/todos/${ todo }`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => setTodos(data.data));
    };

    const editTodo = (id, text) => {
        fetch(`http://localhost:3000/api/todos/${ id }`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: text }),
        })
            .then(res => res.json())
            .then(data => {
                setTodos(data.data);
            });
    };

    const checkedTodo = (id, checked) => {
        fetch(`http://localhost:3000/api/todos/${ id }`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ checked: checked }),
        })
            .then(res => res.json())
            .then(data => {
                setTodos(data.data);
            });
    };

    const checkedAllTodos = () => {
        fetch('http://localhost:3000/api/todos/check-all')
            .then(res => res.json())
            .then(data => {
                setTodos(data.data);
            });
    }

    const changeFilter = (filter) => {
        setFilter(filter);
    };

    const filterTodos = (filter, todos) => {
        switch (filter) {
            case 'All':
                return todos;
            case 'Completed':
                return todos.filter((item) => item.completed === true);
            case 'Active':
                return todos.filter((item) => item.completed === false);
        }
    };

    const allCheckedDelete = () => {
        fetch('http://localhost:3000/api/todos/delete-all', { method: 'DELETE' })
            .then(res => res.json())
            .then(data => setTodos(data.data));
    };

    return (
        <div className="todo-list">
            <h1 className="title">Todo List</h1>

            <div className="list-controls">
                <button className="all-checked-btn" onClick={ () => checkedAllTodos() }>
                    <AllCheckedIcon className="all-checked-icon" />
                </button>

                <AddInput create={ createTodo } />
            </div>


            <ListItems
                filteredTodos={ filterTodos(filter, todos) }
                onDelete={ deleteTodo }
                onEdit={ editTodo }
                onChecked={ checkedTodo }
            />


            { !!todos.length && (
                <FilterItems
                    filter={ filter }
                    onFilterChange={ changeFilter }
                    counter={ todos.length }
                    onDelete={ allCheckedDelete }
                />
            ) }
        </div>
    )
        ;
};

export default TodoList;