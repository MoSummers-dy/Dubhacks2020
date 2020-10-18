import React from 'react';
import Scheduler from './Scheduler';
import './ScheduleWrap.css';
const data = [
  { start_date:'2020-10-12 6:00', end_date:'2020-10-12 8:00', text:'Event 1', id: 1 },
  { start_date:'2020-10-13 11:00', end_date:'2020-10-13 18:00', text:'Event 2', id: 2 },
  { start_date:'2020-10-13 10:00', end_date:'2020-10-13 18:00', text:'Event 2', id: 3 }
];

const UnderConstruction = () => {
  return (
    <div>
      <div id="card">
        <section id="quo" >Happiness is a direction, not a place.</section>
        <section id="cit">— Sydney J. Harris</section>
      </div>
      <div className='scheduler-container'>
        <Scheduler events={data}/>
      </div>
    </div>

  );
}

export default UnderConstruction;