import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>

      <div className='p-2'>
        <h2 className='text-4xl font-bold mb-7 leading-[1.2]'>Prospective <br /> <span>Customer</span> <br /> Segmentation</h2>
        <p className='text-xl font-medium text-gray-600'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
      </div>

      <div>
        <ArrowUpRight size={80} />
      </div>

    </div>
  )
}

export default LeftContent
