import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // API calling using fetch
  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await response.json();
  //   console.log(data)
  // }

  // Storing axios data in array
  const [data, setData] = useState([])

  // API calling using axios
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  }


  return (
    <div>
      <h1>API Calling</h1>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){
          return <h3>Hello, {elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App
