
import './App.css';
import React, { useState } from 'react'

const LogicalNot = () => {

  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(true)

  return (
    <div className="App">
      <div className='container'>

        <button
          onClick={() => setToggle(!toggle)}>
          Show / Hide
        </button>
        {toggle && (
          <div className='change-color'
            style={{
              backgroundColor: 'blue',
              width: '200px',
              height: '200px'
            }}> </div>
        )}
      </div>
    </div>
  )
}
export default LogicalNot