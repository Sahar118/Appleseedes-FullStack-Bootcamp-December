import React, { useState } from 'react';

export default function TextArea() {

    const [enteredText, setEnteredText] = useState(" ");
    const textChangeHandler = (event) => {
        setEnteredText(event.target.value);
        console.log(event.target.value)
    }

    return (
        <form>
            <div className="textarea-tag">
                <label>Free Text:</label>
                <textarea type='textarea' min="0-15" step="15" onChange={textChangeHandler} />
            </div>
        </form>

    )
}