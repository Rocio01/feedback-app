import React from 'react'

const FeedbackItem = ({item}) => {
  return (
    <div className="card">
      <div className="nums-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>

    </div>
  )
}

export default FeedbackItem