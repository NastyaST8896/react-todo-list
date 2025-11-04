import React, { useState, useRef, useEffect } from 'react';
import './add-new-todo.css';

const AddInput = ({ create }) => {
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const newTodoAdd = () => {

        if (inputValue.trim() !== '') {
            const newTodo = {
                text: inputValue,
                completed: false,
                id: Date.now(),
            };

            create(newTodo);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue('');
    };

    const handleInputChange = (event) => setInputValue(event.target.value);

    return (
        <form onSubmit={ handleSubmit }>
            <input
                className="add-input"
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                ref={ inputRef }
            />

            <button className="add-btn" onClick={ newTodoAdd }>Add</button>
        </form>
    );
};

export default AddInput;