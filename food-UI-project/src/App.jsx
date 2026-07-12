import React from 'react'
import Navbar from './components/Navbar'
import Top from './components/Top'
import Banner from './components/Banner'
import Cards from './components/Cards'
import FoodGrid from './components/FoodGrid'

const App = () => {
  return (
    <div className='min-h-screen bg-[#E8C8C4] flex justify-center items-center py-8'>
      <div className='w-[390px] bg-white rounded-[40px] overflow-hidden shadow-2xl'>
        <Navbar />
        <Top />
        <Banner />
        <FoodGrid />
      </div>
    </div>
  )
}

export default App
