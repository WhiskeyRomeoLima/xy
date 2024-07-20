import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
const [text, setText] = useState('')
const [rating, setRating] = useState(10)
const [btnDisabled, setBtnDisabled] = useState(true)
const [message, setMessage] = useState('')

const handleInputChange = (e) => {
  e.preventDefault()
  if(e.target.value === '') {
    setBtnDisabled(true)
    setMessage(null)
  } else if (e.target.value !== '' && e.target.value.trim().length < 10) {
    setMessage('Review must have at least 10 characters')
    setBtnDisabled(true)
  } else {
    setMessage(null)
    setBtnDisabled(false)
  }
  setText(e.target.value)
  
}

const handleSubmit = (e) => {
  e.preventDefault()
  if(text.trim().length >= 10) {
    const newFeedback = { //short hand object notation - values come from state
      text,
      rating,
    }
    handleAdd(newFeedback)

    setText('')
    setRating(10)
  }
}

  return (
    <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect setRating={setRating} selectedRating={rating}/>
          <div className="input-group">
            <input onChange = 
              {handleInputChange} 
              type="text" 
              placeholder='Write a review' 
              value = {text}
            />
            <Button type='submit' version='primary' isDisabled={btnDisabled}>
                Send
            </Button>
          </div>
          {message && <div className='message'>{message}</div>}

        </form>
    </Card>
  )
}
export default FeedbackForm