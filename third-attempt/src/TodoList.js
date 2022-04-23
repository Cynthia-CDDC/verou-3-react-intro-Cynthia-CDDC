import React, {useState, useRef} from "react";

export default function TodoList(props) {
    
    const inputRef = useRef();

    const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const checkedTodos = props.todos.map((todo) => {
            if (value == todo.id) {
                return {id: todo.id, content: todo.content, checked: checked, toUpdate: false};
            }
            return todo;
        });
        props.setTodos(checkedTodos);
    }

    const handleUpdateClick = (e) => {
       const toUpdateItem = e.target.value;
       const updateTodo = props.todos.map((todo) => {
            if (toUpdateItem == todo.id){
                todo.toUpdate = true;
                return todo;
            }
            return todo;
        })
        props.setTodos(updateTodo);
    }

    const handleUpdateInput = (e) => {
        const inputvalue = e.target.value;
        console.log(inputvalue);
    }

    const handleUpdateSubmit = (e) => {
        console.log('chicken');
    }

    return (
        <div>
            <ul>
            {props.todos.map((todo) => (
                <li key={todo.id}>
                    <input value={todo.id} checked={todo.checked} type="checkbox" name="checked" onChange={handleChange}/> 
                    {todo.toUpdate ? (<div>
                    <p>{todo.content}</p>
                    <input type="text" ref={inputRef} onChange={(e)=>handleUpdateInput(e)}/>
                    <br />
                    <button type='submit' onClick={(e)=>handleUpdateSubmit(e)}>Submit update</button></div>) : <div> {todo.content}
                    <button value={todo.id} type="submit" onClick={(e)=>handleUpdateClick(e)}>Update</button></div>}
                </li>
            ))}
            </ul>    
        </div>           
    );
}
//TODO: WIP: update todo list-item: if inputfield value is set to the todo.content, the inputfield doesn't accept any input
//      with inputRef the todo.id is lost to update the state
//      for now the update form does dissapear if click on checkbox, why?