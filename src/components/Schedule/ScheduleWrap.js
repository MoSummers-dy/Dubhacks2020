import React from 'react';
import Scheduler from './Scheduler';
import './ScheduleWrap.css';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

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
      </div><br/>
      <div>
      <div class="d-flex flex-column">
        <h1 style={{textAlign:"center", fontSize:"70px", }}>Scheduler</h1>
        <Accordion style={{width:"19%", marginLeft:"auto", marginRight:"5%"}}>
        <Card>
          <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me to learn how to use!
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
          <Card.Body>Drag to create an event : )
          </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </div>
      </div>
      <div className='scheduler-container'>
        <Scheduler events={data}/>
      </div>
    </div>

  );
}

export default UnderConstruction;