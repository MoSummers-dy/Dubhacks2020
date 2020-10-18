import React, { useState, useRef, useEffect } from 'react';
import ActivityList from './ActivityList'
import uuidv4 from 'uuid/v4'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const LOCAL_STORAGE_KEY = 'activityApp.activities'

function Crisis() {
  const [activities, setActivities] = useState([])
  const activityNameRef = useRef()

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedActivities) setActivities(storedActivities)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities))
  }, [activities])

  function toggleActivity(id) {
    const newActivities = [...activities]
    const activity = newActivities.find(activity => activity.id === id)
    activity.complete = !activity.complete
    setActivities(newActivities)
    handleClearActivities()
  }

  function handleAddActivity(e) {
    const name = activityNameRef.current.value
    if (name === '') return
    setActivities(prevActivities => {
      return [...prevActivities, { id: uuidv4(), name: name, complete: false}]
    })
    activityNameRef.current.value = null
  }

  function handleClearActivities() {
    const newActivities = activities.filter(activity => !activity.complete)
    setActivities(newActivities)
  }

  return (
    <>
      <h2 style={{textAlign:"center", marginTop:"50px"}}>Crisis</h2>
        <Container style={{marginTop: '40pt'}}>
          <b>Try these first:</b>
          <br></br>
          <Container style={{marginBottom: '10pt'}, {marginTop: '10pt'}}>
            <ActivityList activities={activities} toggleActivity={toggleActivity} />
          </Container>
          <input ref={activityNameRef} type="text" />
          <Button onClick={handleAddActivity} style={{marginLeft: '10pt'}}>Add</Button>
          <br></br>
          <ul class="list-group" style={{marginTop: '10pt'}}>
            <li class="list-group-item active" style={{backgroundColor: "grey"}}>People I can call:</li>
            <li class="list-group-item">Same day clinic: 206-337-1221</li>
            <li class="list-group-item">Suicide Prevention Lifeline: 1-800-273-8255</li>
            <li class="list-group-item">Warm Line: 206-933-7001 or 1-877-500-9276</li>
            <li class="list-group-item">Crisis Line: 1-866-427-4747</li>
            <li class="list-group-item">Recovery Help Line: 1-866-789-1511</li>
          </ul>
        </Container>
    </>
  )
}

export default Crisis;
