import React from 'react'
import { MoveRight } from 'lucide-react';

const RightCards = (props) => {
  return (
    <div className='overflow-hidden relative h-full w-80 rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-1xl font-semibold'>1</h2>
        <div className='flex-1 flex items-end'>
            <p className='text-lg leading-relaxed text-white mb-14'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quisquam aliquam quae quo iusto ab.</p>
        </div>
        <div className='flex justify-between'>
            <button className='bg-blue-600 rounded-full text-white font-semibold px-7 py-2'>{props.tag}</button>
            <button className='bg-blue-600 rounded-full text-white font-semibold px-4 py-2'><MoveRight size={30} /></button>
        </div>
      </div>
    </div>
  )
}

export default RightCards
