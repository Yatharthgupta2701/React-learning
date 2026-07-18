import React, { useState } from 'react'

const App = () => {

  const [input, setInput] = useState('')

  const formHandler = (e) =>{
      e.preventDefault()
      console.log("Form Submited", input);
      setInput('')
    }

  return (
    <div>
      <h1>Form Handling - Two Way Binding</h1>
      <form onSubmit={(e) => {
        formHandler(e)
      }}>
        <input onChange={(e) => {
          setInput(e.target.value)
        }} value={input} type="text" placeholder='Enter Your Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
