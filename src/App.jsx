import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import feedbackData from './data/feedbackData'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

function App() {
  const [feedback, setFeedback] = useState(feedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are your are sure you want to delete.')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    console.log(feedback)
  }

  return (
    <Router>
      <Header/>
      <div className='container'>
        <Routes>
          <Route exact path='/' element = {
            <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback = {feedback} />
              <FeedbackList feedback = {feedback} handleDelete = {deleteFeedback} />               
            </>
          }>
          </Route>    
          <Route path='/about' element={<AboutPage/>}></Route>    
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App