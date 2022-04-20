import React, {useState} from "react";

export default function TodoList(props) {
    
    return (
        <ul>
        {props.testprop.map((todo) => (
            <li key={todo.id}>
                <input type="checkbox" /> {todo.content}
            </li>
        ))}
        </ul>
    );
}