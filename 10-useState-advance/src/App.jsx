import React, { useState } from 'react'

const App = () => {

  const [user, setUser] = useState({user:'Yatharth', age:23})

  const chnageUser = () => {
    const newUser = {...user};
    newUser.user = 'Yashu';
    newUser.age = 20;
    setUser(newUser);
  }

  return (
    <div>
      <h1>User name is {user.user}, and age is {user.age}</h1>
      <button onClick={chnageUser}>Change UserName</button>
    </div>
  )
}

export default App
