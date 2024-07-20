import { useState } from 'react'
import FeedbackItem from './FeedbackItem' //return this in the mapping function
import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList({feedback, handleDelete}) {

  return (
    <>
      <div className='feedback-list'>
        <AnimatePresence mode={'popLayout'}>
            { feedback.map((item) => (
              <motion.div 
                key={item.id}
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{delay: .25}}
                exit={{opacity: 0}}
                layout
              >
                <FeedbackItem key = {item.id} 
                item = {item} 
                handleDelete = {handleDelete}/>
              </motion.div>
            ))}            
        </AnimatePresence>
      </div>
    </>
  )

}
export default FeedbackList