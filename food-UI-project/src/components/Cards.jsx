import React from 'react'
import { Heart, Star } from "lucide-react";

const Cards = (props) => {
  return (
    <div className='bg-white rounded-3xl p-3 shadow-md hover:shadow-xl transition duration-300'>
      <div className='flex justify-between'>
        <Heart size={22} className='text-gray-400 cursor-pointer hover:text-red-500'/>
      </div>
      <div className='flex justify-center my-4'>
        <img className='w-full h-32 object-cover rounded-xl' src={props.image} alt="" />
      </div>
      <h3 className='text-lg font-semibold text-gray-800'>{props.name}</h3>
      <div className='flex justify-between items-center mt-3'>
        <span className='font-semibold'>${props.price}</span>
        <div className='flex items-center gap-1'>
            <Star size={18} className='fill-yellow-400 text-yellow-400'/>
            <span className='text-gray-600'>{props.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default Cards
