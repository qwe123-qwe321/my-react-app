import React from 'react'
import FeedbackCard from '../features/FeedbackCard'
export default function FeedbackPage() {
  return (
    <div className='min-h-screen bg-gray-300 flex items-center justify-center'>
      <div className='bg-black w-[90vw] h-[75vh] flex items-center justify-center '> 
           <FeedbackCard/>       
      </div>
    </div>
  )
}
