import React from 'react'

export default function NumberRating() {
  return (
    <div className='bg-gray-900 absolute left-8 top-64 w-85 h-12'>
      <ul className='flex items-center justify-between'>
         <li className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center text-[10px] hover:bg-amber-700">1</li>
         <li className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center text-[10px]">2</li>
         <li className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center text-[10px]">3</li>
         <li className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center text-[10px]">4</li>
         <li className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center text-[10px]">5</li>
  
      </ul>
    </div>
  )
}
