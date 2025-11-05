import React from 'react';
import { useEffect, useState } from 'react';
import './modal.css';
import ReactDom from 'react-dom';

const Modal = ({ onClose, onAccept, todoId }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            onAccept(todoId, inputValue);
            onClose();
        }
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay" onClick={ onClose }/>

            <form className="modal" onSubmit={ handleSubmit }>
                <input
                    className="change-input"
                    value={ inputValue }
                    onChange={ handleInputChange }
                    type="text"
                />
            </form>
        </>,
        document.body
    );
};

export default Modal;