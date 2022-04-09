import React,{useContext} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {

  const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
        return <p>No Feedback Yet</p>
    }



    return isLoading ? (<Spinner/>) : (
      <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((feed)=>(
            <motion.div key={feed.id} initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
              <FeedbackItem key={feed.id} item={feed}/>
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



export default FeedbackList