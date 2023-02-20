import React, { useState } from 'react';


export default function SelectTag() {
    const [enteredTag, setEnteredTag] = useState(" ");

    const tagChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredTag(event.target.value); // print all the values
    }
    return (
        <form>
            <div className="select-tag">
                <label>Age:</label>
                <input type='number' min="0-15" step="15" onChange={tagChangeHandler} />
            </div>
        </form>

    )
}