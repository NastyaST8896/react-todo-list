import React, { useState } from 'react';
import './list-items.css';
import { TrashIcon, PencilIcon } from '../icons/index.js';
import Modal from '../modal/modal.jsx';

const ListItems = ({ todos, onDelete, onEdit }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [currentId, setCurrentId] = useState(null);

    const handleEditClick = (id) => {
        setCurrentId(id);
        setIsOpen(true);
    };

    return (
        <>
            <ul className="list">
                { todos.map((todo, index) => (
                    <li className="item" key={ todo.id }>
                        <div className="item-content">
                            <input className="checkbox" type="checkbox" />
                            <span>{ index + 1 }. { todo.text }</span>
                        </div>

                        <div className="item-actions">
                            <button className="btn" onClick={ () => handleEditClick(todo.id) }>
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
                    todoId={ currentId }
                />
            ) }
        </>

    );
};

export default ListItems;