import React from 'react'
import Categories from './Categories';

const categories = [
  { name: "Ramen", icon: "🍜" },
  { name: "Sushi", icon: "🍣" },
  { name: "Rolls", icon: "🍤" },
  { name: "Pizza", icon: "🍕" },
];

const Top = () => {
  return (
    <div className='px-6 py-4'>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-3xl font-semibold text-gray-900'>Popular Food</h2>
        <button className='text-gray-400 hover:text-gray-600 text-lg'>view all</button>
      </div>
      <div className='flex gap-2'>
        {categories.map(function(elem, idx){
            return <div key={idx}>
                <Categories 
                    name = {elem.name}
                    icon = {elem.icon}
                />
            </div>
        })}
      </div>
    </div>
  )
}

export default Top
