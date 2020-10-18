import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Treatment.css'

import dbt from './dbt-interpersonal-effectiveness-skills.pdf'
import worksheet from './worksheet.pdf'
import ph from './place-holder.pdf'

const Treatment = () => {
  return (
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">
            <span class="tab" >Treatment 1</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">
            <span class="tab" >Treatment 2</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">
            <span class="tab" >Treatment 3</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <embed class="container" src={worksheet} frameborder="0" width="90%" height="1200px"></embed>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <embed class="container" src={dbt} frameborder="0" width="90%" height="1200px"></embed>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <embed class="container" src={ph} frameborder="0" width="90%" height="1200px"></embed>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  )
}
export default Treatment;