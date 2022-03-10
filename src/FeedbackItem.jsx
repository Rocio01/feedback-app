import React from 'react'
import Card from './shared/Card'

const FeedbackItem = ({item}) => {
  return (
    <Card>
      <div className="nums-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>

    </Card>
  )
}

export default FeedbackItem