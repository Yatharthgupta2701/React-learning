import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  // Heading
  const [heading, setHeading] = useState('')
  const handleChangeHeading = (e) => {
    setHeading(e.target.value)
  }

  // Details
  const [details, setDetails] = useState('')
  const handleChangeDetails = (e) => {
    setDetails(e.target.value)
  }

  const [task, setTask] = useState([])

  const formHandler = (e) => {
    e.preventDefault();
    const newTask = [...task];
    newTask.push({heading, details});
    setTask(newTask);
    setHeading('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const newTask = [...task];
    newTask.splice(idx,1);
    setTask(newTask);
  }

  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form className='flex flex-col gap-4 p-10 lg:w-1/2' onSubmit={(e) => {
        formHandler(e);
      }}>
        <input onChange={handleChangeHeading} value={heading} type="text" placeholder='Enter Notes Heading' className='px-5 py-2 border-2 rounded'/>
        <textarea onChange={handleChangeDetails} value={details} type="text" placeholder='Write Deatils Here' className='px-5 py-2 h-30 border-2 rounded'/>
        <button className='active:bg-black active:text-white bg-white text-black px-5 py-2 rounded font-bold'>Add Note</button>
      </form>
      <div className='flex flex-wrap p-10 lg:w-1/2 gap-5 h-100% bg-black justify-between items-start'>
        {task.map(function(elem,idx){
          return <div key={idx} className='relative h-50 w-50 rounded-2xl bg-cover bg-white text-black p-2'>
            <h2 onClick={() => {
              deleteNote(idx)
            }} className='cursor-pointer absolute top-5 right-5 bg-red-700 text-white rounded-xl text-xs'><X /></h2>
            <h3 className='leading-tight text-xl font-bold'>{elem.heading}</h3>
            <p className='mt-2 font-medium text-gray-500'>{elem.details}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
