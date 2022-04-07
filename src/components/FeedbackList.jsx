import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback,handleDeleteinlist}) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }

    return (
      <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((feed)=>(
            <motion.div key={feed.id} initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
              <FeedbackItem key={feed.id} item={feed} handleDelete={handleDeleteinlist}/>
            </motion.div>
        ))}
        </AnimatePresence>
      </div>
    )

/*   return (
    <div className='feedback-list'>
      {feedback.map((feed)=>(
          <FeedbackItem key={feed.id} item={feed} handleDelete={handleDeleteinlist}/>
      ))}
    </div>
  ) */
}

FeedbackList.propTypes ={
    feedback: PropTypes.array
}



export default FeedbackList