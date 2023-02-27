import React, { useEffect, useState } from "react";


function TodoList() {

    const [todos, setTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState("");

    useEffect(() => {
        const data = localStorage.getItem("todos");
        if (data) {
            setTodos(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        setTodos((todos) => [...todos, { id: Date.now(), text: newTodoText, done: false }]);
        setNewTodoText("");
    };

    const handelDone = (id) => {
        setTodos((todos) => todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, done: !todo.done }
            } else {
                return todo
            }
        }))
    }
    const handleNewTodoTextChange = (event) => {
        setNewTodoText(event.target.value);
    };

    const handleDeleteTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

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

export default TodoList;
