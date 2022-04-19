import React, {useState} from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, content: "My first todo", checked: false}, 
        {id: 2, content: "My second todo", checked: false}
    ]);
    // id: todos.length + 1
    return (
        <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                <input type="checkbox" /> {todo.content}
            </li>
        ))}
        </ul>
    );
}