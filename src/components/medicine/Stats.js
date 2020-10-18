import React from 'react';
import PropTypes from 'prop-types';

import './Medicine.css';

const Stats = (props) => {
    const congrats = (percent) => {
        return (
            percent === 100 ?
            <div style={{color: '#EE7804'}}
            >Amazing!</div> : null
        );
    };

  return (
    <div>
      <p className="stats"><span>{props.list.length}</span> Medicines</p>
      <p className="stats"><span>{props.finished}</span> Have Taken</p>
      <p className="stats-percent"><span>{props.percent}%</span> Done</p>
      {congrats(props.percent)}
    </div>
  );
};

Stats.propTypes = {
    list: PropTypes.array,
    percent: PropTypes.number,
    finished: PropTypes.number
}

export default Stats;
