import React, { useState} from 'react'
import Counter from './Counter';

const App = () => {

  const [num, setNum] = useState(10)
  const [user, setUser] = useState('Yatharth')

  function changeNum(){
    setNum(50);
    setUser('Yashu')
  }

  return (
    <div>
      <h2>Value of num is {num} <br /> Name of user is {user}</h2>
      <button onClick={changeNum}>Change Value</button>

      <Counter />
    </div>
  )
}

export default App
