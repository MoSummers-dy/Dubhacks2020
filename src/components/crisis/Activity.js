import React from 'react'

export default function Activity({ activity, toggleActivity }) {
  function handleActivityClick() {
    toggleActivity(activity.id)
  }
  
  return (
    <div>
      <label>
      {activity.name}<button onClick={handleActivityClick}>Remove</button>
      </label>
    </div>
  )
}
