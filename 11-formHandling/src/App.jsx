import React from 'react'

const App = () => {

  const formHandler = (e) =>{
      e.preventDefault()
      console.log("Form Submited");
    }

  return (
    <div>
      <h1>Form Handling</h1>
      <form onSubmit={(e) => {
        formHandler(e)
      }}>
        <input type="text" placeholder='Enter Your Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
