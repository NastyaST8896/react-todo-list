import React from 'react';
import { useState } from 'react';
import './todo-list.css';
import AddInput from '../add-input/add-input.jsx';
import ListItems from '../list-items/list-items.jsx';
import { AllCheckedIcon } from '../icons/index.js';
import FilterItems from '../filter-items/filter-items.jsx';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'колла1', completed: false },
        { id: 2, text: 'колла2', completed: true },
        { id: 3, text: 'колла3', completed: false },
        { id: 4, text: 'колла4', completed: false },
        { id: 5, text: 'колла5', completed: false },
        { id: 6, text: 'колла6', completed: false },
    ]);

    const [filter, setFilter] = useState('All');

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (todo) => setTodos(todos.filter((item) => item.id !== todo));

    const editTodo = (id, text) => {
        const newTodos = todos.map((item) => {
            if (item.id === id) {
                return { ...item, text };
            }

            return item;
        });

        setTodos(newTodos);
    };

    const checkedTodo = (id, checked) => {
        const newTodos = todos.map((item) => {
            if (item.id === id) {
                return { ...item, checked };
            }
            return item;
        });
        setTodos(newTodos);
    };

    const checkedAllTodos = (todos) => {
        const uncheckedTodo = todos.find(item => item.completed === false);

        setTodos(todos.map((item) => ({ ...item, completed: !!uncheckedTodo })));
    };

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
        const allCheckedTodos = todos.filter((item) => item.completed === false);
        setTodos(allCheckedTodos);
    };

    return (
        <div className="todo-list">
            <h1 className="title">Todo List</h1>

            <div className="list-controls">
                <button className="all-checked-btn" onClick={ () => checkedAllTodos(todos) }>
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