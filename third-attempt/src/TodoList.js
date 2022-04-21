import React, {useState} from "react";

export default function TodoList(props) {
    const [checked, setChecked] = useState([]);
    
    const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        console.log(`${value} is ${checked}`);
        const checkedTodos = props.todos.map((todo) => {console.log(value); console.log(todo.id);
            if (value == todo.id) {
                
                return {id: todo.id, content: todo.content, checked: true};
            }
            return todo;
        });
        
        props.setTodos(checkedTodos);
    }

    return (
        <ul>
        {props.todos.map((todo) => (
            <li key={todo.id}>
                <input value={todo.id} type="checkbox" name="checked" onChange={handleChange}/> {todo.content}
            </li>
        ))}
        </ul>
    );
}
//TODO: identify item, setTodos ( if todo.checked from todo.id value is on then todo.checked = true) (if todo.checked is true then ...)