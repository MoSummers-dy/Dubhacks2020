import React, { useState, useRef, useEffect } from 'react';
import ActivityList from './ActivityList';
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'activityApp.activities'

export default function crisis() {
    const [activities, setActivities] = useState([])
    const activityNameRef = useRef()

    useEffect(() => {
        const storedActivities = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedActivities) setActivities(storedActivities)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities))
    }, [activities])

    function deleteActivity(id) {
        const newActivities = [...activities]
        const activities = newActivities.find(activity => activity.id === id)
        activity.valid = !activity.valid
        newActivities = activities.filter(activity => !activity.valid)
        setActivities(newActivities)
    }

    function handleAdd(e) {
        const name = activityNameRef.current.value
        if (name === '') return
        setActivities(prevActivities => {
            return [...prevActivities, { id: uuidv4(), name: name, valid: false}]
        })
        activityNameRef.current.value = null
    }

    return(
        <div>
            <b>Try these first:</b> 
            <ActivityList activities={activities} deleteActivity={deleteActivity} />
            <input ref={activityNameRef} type="text" />
            <button onClick={handleAdd}>Add</button>
            <b>People I can call:</b>
            <p>Same day clinic: 206-337-1221</p>
            <p>Suicide Prevention Lifeline: 1-800-273-8255</p>
            <p>Warm Line: 206-933-7001 or 1-877-500-9276</p>
            <p>Crisis Line: 1-866-427-4747</p>
            <p>Recovery Help Line: 1-866-789-1511</p>
        </div>
    )
}