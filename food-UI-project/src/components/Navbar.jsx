import React from 'react'
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 py-3 bg-white'>
      <div>
        <Search className='w-7 h-7 text-gray-500 cursor-pointer' />
      </div>
      <div className='text-center'>
        <p className='text-xs text-gray-400'>location:</p>
        <h3 className='text-lg font-semibold text-gray-900'>NewYork</h3>
      </div>
      <div className='relative'>
        <img className='w-11 h-11 rounded-full object-cover' src="https://images.unsplash.com/photo-1783615693285-83b2017529b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default Navbar
