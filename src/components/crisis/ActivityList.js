import React from 'react'
import Activity from './Activity'

export default function ActivityList({ activities, deleteActivity }) {
  return (
    activities.map(activity => {
      return <Activity key={activity.id} activity={activity} deleteActivity={deleteActivity} />
    })
  )
}
