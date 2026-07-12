import React from 'react'

const Categories = (props) => {
  return (
    <div className='flex gap-4 overflow-x-auto scrollbar-hide'>
      <div className='flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm whitespace-nowrap cursor-pointer hover:shadow-md transition'>
        <span className='w-8 h-8 flex items-center justify-center rounded-full bg-orange-50 text-lg'>{props.icon}</span>
        <span className='font-medium text-gray-800'>{props.name}</span>
      </div>
    </div>
  )
}

export default Categories
