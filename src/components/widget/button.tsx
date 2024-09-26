import React, { FC } from 'react';

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button
      className='mt-8 text-3xl md:text-4xl bg-teal-800 px-6 py-3 rounded-full font-bold text-white 
        hover:bg-teal-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-600 
        focus:ring-opacity-50 active:scale-95 transition duration-300'
      aria-label={`Button for ${text}`} // Added accessibility label
    >
      {text}
    </button>
  );
}

export default Button;
