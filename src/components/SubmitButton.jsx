import React from 'react'

export default function SubmitButton({onClick}) {
  return (
    <div>
      <button className='w-85 h-12 absolute top-80 left-8 bg-amber-600 rounded-l-2xl rounded-r-2xl cursor-pointer active:bg-amber-50' onClick={onClick}>SUBMIT</button>
    </div>
  )
}
