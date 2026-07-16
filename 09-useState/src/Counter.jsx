import React, { useState } from 'react'

const Counter = () => {

    const [num, setNum] = useState(0)

    function incNum(){
        setNum(num+1)
    }

    function decNum(){
        setNum(num-1)
    }

    function jumpBy5(){
        setNum(num+5)
    }

  return (
    <div>
        <h1>{num}</h1>
      <button onClick={incNum}>Increase</button>
      <button onClick={decNum}>Decrease</button>
      <button onClick={jumpBy5}>Jump By 5</button>
    </div>
  )
}

export default Counter
