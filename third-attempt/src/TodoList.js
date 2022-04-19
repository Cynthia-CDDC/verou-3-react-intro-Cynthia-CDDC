import React, {useState} from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, content: "My first todo",}, 
        {id: 2, content: "My second todo",}
    ]);

    return (
        <ul>
        {todos.map((todo) => (
            <li>
                <input type="checkbox" key={todo.id} /> {todo.content}
            </li>
        ))}
        </ul>
    );
}