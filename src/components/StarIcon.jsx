import React from 'react'
import Star_Icon from '../assets/icon-star.svg'
export default function StarIcon() {
  return (
    <div className='bg-gray-800 absolute top-8 left-8 w-12 h-12 rounded-full'>

    <img src={Star_Icon} alt="star" className=' w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
    </div>
  )
}
