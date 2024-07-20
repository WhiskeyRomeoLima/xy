import {useState} from 'react'

function RatingSelect({setRating, selectedRating}) {

  const handleChange = (e) => {
    setRating(+e.currentTarget.value)
  }

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,the value of `v` below will be `undefined`
// It could be Array.from({ length: 5 }, (scobiedoo, i) => i));
// [0, 1, 2, 3, 4]
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (v, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selectedRating === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )

}
export default RatingSelect