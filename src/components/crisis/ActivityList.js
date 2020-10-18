import React from 'react'
import Activity from './Activity'

export default function ActivityList({ activities, toggleActivity }) {
  return (
    activities.map(activity => {
      return <Activity key={activity.id} toggleActivity={toggleActivity} activity={activity} />
    })
  )
}
