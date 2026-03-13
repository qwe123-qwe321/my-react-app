import React from 'react';

export default function NumberRating({ selectedRating, onSelect }) {

  return (
    <div className="bg-gray-900 absolute left-8 top-64 w-85 h-12">
      <ul className="flex items-center justify-between w-full">
        {[1, 2, 3, 4, 5].map((num) => (
          <li
            key={num}
            onClick={() => onSelect(num)} 
            className={`
              w-12 h-12 rounded-full flex items-center justify-center text-[10px]
              transition-colors duration-200 cursor-pointer
              ${num === selectedRating ? 'bg-amber-600' : 'bg-gray-800'}
              text-white
            `}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
}