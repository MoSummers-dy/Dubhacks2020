import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import './Medicine.css';

const ItemsList = (props) => {
    let todos = props.items;
    const listItem = todos.map((item) => {
        return (
            <Item
                item={item}
                key={todos.indexOf(item)}
                list={todos}
                completeTask={props.completeTask}
                updateList={props.updateList}
            />
        );
    });
    return (
        <div className="ItemsList">
            <ul>
                {listItem}
            </ul>
        </div>
    );
};

ItemsList.propTypes = {
  items: PropTypes.array,
  completeTask: PropTypes.func,
  updateList: PropTypes.func
}

export default ItemsList;
