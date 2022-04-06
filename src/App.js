import { useState } from 'react';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackItem from './components/FeedbackItem';

function App() {

    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id)=>{
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=>item.id !==id))
        }
    }

    return ( 
        <>
        <Header/>
        <div className="container">
            <FeedbackList feedback={feedback} handleDelete_list = {deleteFeedback}/>
        </div>
        </>
     );
}

export default App;
