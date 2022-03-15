import { useState } from 'react';
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
  return (
    <div className="App">
      <Header />
      <div className="container">
        <FedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
         feedback={feedback}
         handleDelete={deleteFeedback} />
      </div>
    </div>
  );
}

export default App;
