
import React, { useState } from 'react';


export default function Forms(props) {

    const [enteredText, setEnteredText] = useState(" ");
    const [enterdFirstName, setEnteredFirstName] = useState(" ");
    const [enterdSecondName, setEnteredSecondName] = useState(" ");
    const [enteredTag, setEnteredTag] = useState(" ");
    const [toggle, setToggle] = useState(false)

    const textChangeHandler = (event) => { setEnteredText(event.target.value); console.log(event.target.value) }
    const firstNameChangeHandler = (event) => { setEnteredFirstName(event.target.value); console.log(event.target.value) }
    const secondNameChangeHandler = (event) => { setEnteredSecondName(event.target.value); console.log(event.target.value) }
    const tagChangeHandler = (event) => { console.log(event.target.value); setEnteredTag(event.target.value); }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        const expenseData = {
            firstName: enterdFirstName,
            secondName: enterdSecondName,
            text: enteredText,
            age: enteredTag,
        }
        props.onSaveExpenseData(expenseData);
        setEnteredText('');
        setEnteredFirstName('');
        setEnteredSecondName('');
        setEnteredTag('');

    };



    return (
        <div className='container'>
            <form onSubmit={submitHandler}>

                <div className="input first-name">
                    <label>First Name:</label>
                    <input value={enterdFirstName} type='text' onChange={firstNameChangeHandler} />
                </div>

                <div className="input last-name">
                    <label>Last Name:</label>
                    <input value={enterdSecondName} type='text' onChange={secondNameChangeHandler} />
                </div>

                <div className="select-tag">
                    <label>Age:</label>
                    <input value={enteredTag} type='number' min="0" step="1" onChange={tagChangeHandler} />
                </div>

                <div className="textarea-tag">
                    <label>Free Text:</label>
                    <textarea value={enteredText} name="postContent" rows={4} cols={40} onChange={textChangeHandler} />
                </div>

                <button type='submit'>continue</button>

                <button
                    type='submit' onClick={() => setToggle(!toggle)}>
                    Show / Hide
                </button>
                {toggle && (
                    <button className='back-btn'>Back</button>
                )}


            </form>
        </div>
    );
};
