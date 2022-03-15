import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from './components/FeedbackStats';
import FedbackForm from './components/FedbackForm';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure?")){
      setFeedback(feedback.filter((item)=> item.id !== id ))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <div className="App">
      <Header />
      <div className="container">
        <FedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList
         feedback={feedback}
         handleDelete={deleteFeedback} />
      </div>
    </div>
  );
}

export default App;
