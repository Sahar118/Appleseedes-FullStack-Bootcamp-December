import React, { useState } from 'react';

export default function InputText() {
    const [enterdTitle, setEnteredTitle] = useState(" ");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value)// print all the values
    }

    const expenseData = {
        text: enterdTitle,
    }
    console.log(expenseData);

    return (
        <form>
            <div className="input first-name">
                <label>First Name:</label>
                <input value={enterdTitle} type='text' onChange={titleChangeHandler} />
            </div>

            <div className="input last-name">
                <label>Last Name:</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
        </form>
    )
}