import React, { useState } from 'react'



export default function Counter({ currNumber }) {
    const [number, setNumber] = useState(currNumber);

    const clickHandler = () => {
        setNumber(number + 1);

    }
    return (
        <div className="App">
            <button onClick={clickHandler}>increment</button>
            <h3> {number}</h3>
        </div>
    );
}
