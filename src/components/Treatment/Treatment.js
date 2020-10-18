import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Treatment.css'

import ppt from './ppt.pdf'
import myth from './relationship-myth.pdf'
import ph from './place-holder.pdf'

const Treatment = () => {
  return (
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link style={{width: '5 in'}}eventKey="first">
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
        <embed src={ppt} frameborder="0" width="90%" height="1200px"></embed>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <embed src={myth} frameborder="0" width="90%" height="1200px"></embed>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <embed src={ph} frameborder="0" width="90%" height="1200px"></embed>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  )
}
export default Treatment;