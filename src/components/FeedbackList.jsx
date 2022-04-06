import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback,handleDelete_list}) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }

  return (
    <div className='feedback-list'>
      {feedback.map((feed)=>(
          <FeedbackItem key={feed.id} item={feed} handleDelete={handleDelete_list}/>
      ))}
    </div>
  )
}

FeedbackList.propTypes ={
    feedback: PropTypes.array
}



export default FeedbackList