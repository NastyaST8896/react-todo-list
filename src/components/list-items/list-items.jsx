import React, { useState } from 'react';
import './list-items.css';
import { TrashIcon, PencilIcon } from '../icons/index.js';
import Modal from '../modal/modal.jsx';

const ListItems = ({ filteredTodos, onDelete, onEdit, onChecked }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [currentTodo, setCurrentTodo] = useState(null);

    const handleCompleted = (todo) => {
        todo.completed = !todo.completed;
        onChecked(todo.id, todo.completed);
    };

    const handleEditClick = (todo) => {
        setCurrentTodo(todo);
        setIsOpen(true);
    };

    return (
        <>
            <ul className="list">
                { filteredTodos.map((todo, index) => (
                    <li className="item" key={ todo.id }>
                        <div className="item-content">
                            <input id={ 'checkbox-' + `${ todo.id }` }
                                   className="checkbox" type="checkbox"
                                   checked={ todo.completed }
                                   onChange={ () => handleCompleted(todo) } />
                            <label htmlFor={ 'checkbox-' + `${ todo.id }` }>{ index + 1 }. { todo.text }</label>
                        </div>

                        <div className="item-actions">
                            <button className="btn" onClick={ () => handleEditClick(todo) }>
                                <PencilIcon className="pencil-icon" />
                            </button>
                            <button className="btn" onClick={ () => onDelete(todo.id) }>
                                <TrashIcon className="trash-icon" />
                            </button>
                        </div>
                    </li>
                )) }
            </ul>

            { isOpen && (
                <Modal
                    onClose={ () => setIsOpen(false) }
                    onAccept={ onEdit }
                    todo={ currentTodo }
                />
            ) }
        </>

    );
};

export default ListItems;