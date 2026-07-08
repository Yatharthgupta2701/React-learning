import React from "react";
import Card from "./coomponents/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Paramvir Sinh" age={20} img="https://images.unsplash.com/photo-1783201033545-1a80276db234?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"/>
      <Card user="Yatharth Gupta" age={23} img="https://plus.unsplash.com/premium_photo-1779372801181-0d00b1448662?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"/>
    </div>
  );
};

export default App;