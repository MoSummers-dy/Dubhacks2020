import React, { useState, useRef, useEffect } from 'react';
import ActivityList from './ActivityList'
import uuidv4 from 'uuid/v4'

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
        <b>Try these first:</b> 
        <br></br>
        <ActivityList activities={activities} toggleActivity={toggleActivity} />
        <input ref={activityNameRef} type="text" />
        <button onClick={handleAddActivity}>Add</button>
        <br></br>
        <b>People I can call:</b>
        <p>Same day clinic: 206-337-1221</p>
        <p>Suicide Prevention Lifeline: 1-800-273-8255</p>
        <p>Warm Line: 206-933-7001 or 1-877-500-9276</p>
        <p>Crisis Line: 1-866-427-4747</p>
        <p>Recovery Help Line: 1-866-789-1511</p>
    </>
  )
}

export default Crisis;
