import React from 'react'
import { useState } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'
const FedbackForm = () => {

const [text, setText] = useState("")
const [btnDisbled, setbtnDisabled] = useState(true)
const [message, setMessage] = useState("")
const [rating, setRating] = useState(10)


const handleTextChange = (e) => {
  if( text === ""){
    setbtnDisabled(true)
    setMessage(null)
  }else if (text !== "" && text.trim().length <= 10){
    setbtnDisabled(true)
    setMessage("Text must be at least 10 characters long")
  }else {
    setMessage(null)
    setbtnDisabled(false)
  }
 setText(e.target.value)
}
  return (
    <Card>
      <form >
        <h2>How you would rate your service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={handleTextChange} 
                 type="text"  
                 placeholder="Write a review"
                 value={text }
          />
          <Button type='submit' isDisabled={btnDisbled}>Send</Button>
          </div>

          {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FedbackForm