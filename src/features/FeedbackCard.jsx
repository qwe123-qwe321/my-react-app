import React from 'react'
import StarIconarea from '../components/StarIcon'
import TextViewarea from '../components/TextView'
import NumberRating from '../components/NumberRating'
export default function FeedbackCard() {
  return (
    <div className='bg-gray-900 flex items-center justify-center w-100 h-100 rounded-2xl relative'>
     <StarIconarea></StarIconarea>
      <TextViewarea></TextViewarea>
      <NumberRating></NumberRating>
    </div>
  )
}
