import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Activity({ activity, toggleActivity }) {
  function handleActivityClick() {
    toggleActivity(activity.id)
  }
  
  return (
    <div>
      <label>
      {activity.name}<button class="btn btn-secondary" onClick={handleActivityClick} style={{marginLeft: '20pt', fontSize: '15px'}}>Remove</button>
      </label>
    </div>
  )
}
