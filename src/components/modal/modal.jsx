import React from 'react';
import { useEffect, useState } from 'react';
import './modal.css';
import ReactDom from 'react-dom';
import { CrossIcon } from '../icons/index.js';

const Modal = ({ onClose, onAccept, todo }) => {

    const [inputValue, setInputValue] = useState(`${ todo.text }`);

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            onAccept(todo.id, inputValue);
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
            <div className="modal-overlay" onClick={ onClose } />

            <form className="modal" onSubmit={ handleSubmit }>
                <div className="modal-content">

                    <div className="modal-header">
                        <h1>Edit Todo</h1>

                        <button className="exit-btn"
                                type="button"
                                onClick={ onClose }><CrossIcon
                            className="cross-icon"
                        />
                        </button>
                    </div>

                    <input
                        className="change-input"
                        value={ inputValue }
                        onChange={ handleInputChange }
                        type="text"
                    />
                    <button className="change-btn">Ok</button>
                </div>
            </form>
        </>,
        document.body
    );
};

export default Modal;