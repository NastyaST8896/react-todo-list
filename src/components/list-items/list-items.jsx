import React from 'react';
import './list-items.css';
import { TrashIcon, PencilIcon } from '../icons/index.js';

const ListItems = ({ todos, onDelete }) => {

    return (
        <ul className="list">
            { todos.map((todo, index) => (
                <li className="item" key={ todo.id }>
                    <div className="item-content">
                        <input className="checkbox" type="checkbox" />
                        <span>{ index + 1 }. { todo.text }</span>
                    </div>

                    <div className="item-actions">
                        <button className="btn">
                            <PencilIcon className ="pencil-icon" />
                        </button>
                        <button className="btn" onClick={ () => onDelete(todo.id)}>
                            <TrashIcon className="trash-icon" />
                        </button>
                    </div>
                </li>
            )) }
        </ul>
    );
};

export default ListItems;