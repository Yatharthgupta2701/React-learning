import React from 'react'

const App = () => {

  const message = () =>{
    console.log("Hello World")
  }

  return (
    <div>
      <h1>App</h1>
      <button onClick={message}>Click Here</button>
    </div>
  )
}

export default App
