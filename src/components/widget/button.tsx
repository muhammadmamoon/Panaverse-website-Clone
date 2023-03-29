import React, { FC } from 'react'

const Button:FC<{text:string}>=({text})=> {
  
    return (
        <button className='mt-8 text-4xl bg-teal-800 px-6 py-3 rounded-full font-bold text-white hover:shadow-lg hover:scale-105 duration-300'>{text}</button>
  )
}

export default Button