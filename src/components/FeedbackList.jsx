import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback,handleDeleteinlist}) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }

  return (
    <div className='feedback-list'>
      {feedback.map((feed)=>(
          <FeedbackItem key={feed.id} item={feed} handleDelete={handleDeleteinlist}/>
      ))}
    </div>
  )
}

FeedbackList.propTypes ={
    feedback: PropTypes.array
}



export default FeedbackList