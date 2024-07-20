import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'

function FeedbackItem({item, handleDelete}) {

  return (
    <Card reverse = {false}>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-dispay'>{item.text}</div>
    </Card>

  )
}
export default FeedbackItem

/*
const handleClick = (item) => {
 console.log(item.id)
}

onClick = {() => console.log(item.id)}
onclick = {handleClick} //cannot pass argument this way
onclick = {() => handleclick(item)}
*/