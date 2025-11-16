import React, { useState, useRef, useEffect } from 'react';
import './add-input.css';

const AddInput = ({ create }) => {
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedValue = inputValue.trim();

        if (trimmedValue !== '') {
            create(trimmedValue);
        }
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

            <button className="add-btn">Add</button>
        </form>
    );
};

export default AddInput;