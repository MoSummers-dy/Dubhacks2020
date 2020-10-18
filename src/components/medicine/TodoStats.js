// Packages
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Medicine.css';

const TodoStats = (props) => {
    const congrats = (percent) => {
        return (
            percent === 100 ? 
            <div>Amazing!</div> : null 
        );
    }; 

  return (
    <div className="TodoStats">
      <p className="stats"><span>{props.list.length}</span> Medicines</p>
      <p className="stats"><span>{props.finished}</span> Have Taken</p>
      <p className="stats-percent"><span>{props.percent}%</span> Done</p>
      {congrats(props.percent)}
    </div>
  );
};

TodoStats.propTypes = {
    list: PropTypes.array,
    finished: PropTypes.number,
    percent: PropTypes.number
}

export default TodoStats;
