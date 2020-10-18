import React from 'react'

export default function Activity({ activity, deleteActivity }) {
  function handleDeleteClick() {
    deleteActivity(activity.id)
  }
  
  return (
    <div>
      <label>
        {activity.name}<button onClick={handleDeleteClick}>Delete</button>
      </label>
    </div>
  )
}