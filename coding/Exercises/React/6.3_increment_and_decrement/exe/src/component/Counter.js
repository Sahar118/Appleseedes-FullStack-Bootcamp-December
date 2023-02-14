import React, { useState } from 'react'



export default function Counter({ currNumber }) {

    let [number, setNumber] = useState(currNumber)
    const incrementNum = () => {
        setNumber(prevVal => prevVal < 10 ? prevVal + 1 : 10);
        console.log(number)
    }

    const decrementNum = () => {
        setNumber(prevVal => prevVal > -10 ? prevVal - 1 : -10);
        console.log(number)

    }
    return (
        <div className="container">
            <button onClick={incrementNum}>increment</button>
            <button onClick={decrementNum}>increment</button>
            <div className='label'
                style={{
                    backgroundColor: number === 0 ? 'black'
                        : number <= 10 && number > 0 ? 'green'
                            : number < 0 && number >= -10 ? 'red' : 'white'
                }}>{number}</div>
        </div>
    );
}
