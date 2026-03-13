import React from 'react';
import { useLocation } from 'react-router-dom';
import illustration from '../assets/illustration-thank-you.svg'; 

export default function ThankYou() {
  const location = useLocation();
  const rating = new URLSearchParams(location.search).get('rating');

  return (
    <div className='min-h-screen bg-gray-300 flex items-center justify-center'>
    <div className='bg-black w-[90vw] h-[75vh] flex items-center justify-center '>
    <div className='bg-gray-900 flex items-center justify-center w-100 h-100 rounded-2xl relative'>

      <img src={illustration} alt="Thank you" className="w-35 absolute top-8" />
      <div className="bg-gray-800 text-amber-600 absolute top-40 w-45 h-8 rounded-full flex items-center justify-center text-sm">
        You selected {rating} out of 5
      </div>
      <h2 className="text-2xl font-bold text-gray-400 absolute top-58 ">Thank you!</h2>
      <p className="text-gray-500 text-sm absolute top-68 w-86 text-center">
        We appreciate you taking the time to give a rating.<br />
        If you ever need more support, don't hesitate to get in touch!
      </p>
    </div>
    </div>
    </div>
  );
}