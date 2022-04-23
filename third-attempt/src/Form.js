import React, {useState, useRef} from "react";
import TodoList from "./TodoList";

export default function Form(props) {

    const inputRef = useRef();

    function clickHandler(e) {
      const inputElement = inputRef.current;
      props.setTodos([...props.todos, {id: props.todos.length + 1, content: inputElement.value, checked: false, toUpdate: false}]);
    }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={clickHandler}>Add todo</button>
    </div>
  );
}