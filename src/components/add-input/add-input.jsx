import React, { useState } from 'react';
import './add-new-todo.css';

const AddInput = ({ create }) => {
    const [inputValue, setInputValue] = useState('');

    const newTodoAdd = () => {
        const newTodo = {
            text: inputValue,
            completed: false,
            id: Date.now(),
        };

        create(newTodo);
    };

    const handleInputChange = (event) => setInputValue(event.target.value);

    return (
        <div>
            <input
                className="add-input"
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />

            <button className="add-btn" onClick={ newTodoAdd }>Add</button>
        </div>
    );
};

export default AddInput;