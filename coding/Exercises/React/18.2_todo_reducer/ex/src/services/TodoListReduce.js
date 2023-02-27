import React, { useEffect, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'NewTextAddToList':
            return { addToListInput: action.payload }
    }
}

function TodoListReduce() {

    const [state, dispatch] = useReducer(reducer, { addToListInput: ' ', editList: [] })
    return (
        <div className="App">

            <h1>Todo List</h1>
            <div className="add-todo">
                <input
                    type="text"
                    value={newTodoText}
                    onChange={handleNewTodoTextChange}
                    placeholder="Enter new todo"
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span onClick={() => { handelDone(todo.id) }}>{todo.done ? '😊' : '😕'}{todo.text}</span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListReduce