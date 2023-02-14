import React, { useState } from 'react'
import './App.css';


function App(props) {
  const [number, setNumber] = useState(props.number);
  const clickHandler = () => {
    setNumber(number + 1);
    console.log(number);
  }
  return (
    <div className="App">
      <h3> {number}</h3>
      <button onClick={clickHandler}>increment</button>
    </div>
  );
}

export default App;
