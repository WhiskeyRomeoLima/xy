import {useState} from 'react'
import './index.css'

function App2() {
const [showComments, setShowComments] = useState(true)

const comments = [
  {id: 1, comment: 'comment one'},
  {id: 2, comment: 'comment one'},  
  {id: 3, comment: 'comment one'},
]
console.log(comments)
  return (
    <>
      <div className='card'>
        <h1>Title: My blog</h1>
        <h3>Body: This is my blog.</h3>

        <button onClick = { () => setShowComments(!showComments)}>
            {showComments ? 'Hide Comments' : 'Show Comments'}
        </button>
      
      <ul>
          {showComments &&  comments.map(comment => <li key={comment.id}>{comment.comment}</li>)}
      </ul> 

     </div>
    </>

  )
}
export default App2