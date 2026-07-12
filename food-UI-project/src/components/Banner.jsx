import React from 'react'

const Banner = () => {
  return (
    <div className="px-6 mt-5">
      <div className="relative h-40 rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=1000"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-end pr-8 text-white">
          <h2 className="text-3xl font-semibold">Discount 50%</h2>
          <p className="text-gray-300 text-lg">Learn more...</p>
        </div>

      </div>
    </div>
  )
}

export default Banner