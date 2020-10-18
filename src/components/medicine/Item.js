// Packages
import React from 'react';
import PropTypes from 'prop-types';

import ItemOptions from './ItemOptions';
import './Medicine.css';

const Item = (props) => {
    const markDone = () => {
        let currentTask = props.item;
        props.completeTask(currentTask);
    };

    let name = props.item.task
    let completed = props.item.completed
    let listClass = (completed) ? 'done' : ''

    return (
        <li className={listClass}>
            <div className="ItemDiv" onClick={markDone}>
                <p>{name}</p>
            </div>
            <ItemOptions
                item={props.item}
                todoList={props.list}
                updateList={props.updateList}
            />
        </li>
    );
};

Item.propTypes = {
    list: PropTypes.array,
    item: PropTypes.object,
    completeTask: PropTypes.func,
    updateList: PropTypes.func
}

export default Item;
