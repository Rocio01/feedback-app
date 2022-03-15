import React from 'react'
import { useState } from 'react'
import Card from '../shared/Card'
const FedbackForm = () => {
const [text, setText] = useState("")

const handleTextChange = (e) => {
 setText(e.target.value)
}
  return (
    <Card>
      <form >
        <h2>How you would rate your service with us</h2>
        <div className="input-group">
          <input onChange={handleTextChange} 
                 type="text"  
                 placeholder="Write a review"
                 value={text}
          />
          <button type='submit'>Send</button>
          </div>
      </form>
    </Card>
  )
}

export default FedbackForm