import React from 'react'

const App = () => {

  // localStorage.setItem('user', 'yatharth');
  // const user = localStorage.getItem('user');
  // localStorage.removeItem('user');
  // localStorage.clear();

  // const user = {
  //   username : 'Yatharth',
  //   age : 23,
  //   city : 'Ghazipur'
  // };

  // localStorage.setItem('user', JSON.stringify(user));
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  return (
    <div>
      <h1>Local Storage</h1>
    </div>
  )
}

export default App
