import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

function FeedbackItem(props) {
  const [rating, setRating] = useState(7)
  const [feedback, setFeedback] = useState('This is an example of a feedback item')

    return (
    <div className='card'>
      <div className="num-display">{rating}</div>
      <div className="text-display">{feedback}</div>
    </div>
  )
}

FeedbackItem.propTypes = {

}

export default FeedbackItem

