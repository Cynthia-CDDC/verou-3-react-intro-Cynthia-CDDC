import React, {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";

export default function Form(props) {

    const inputRef = useRef();

    function clickHandler() {
        const inputElement = inputRef.current;
        props.setTodos([...props.testprop, {id: 99, content: inputElement.value, checked: false}]);
    }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={clickHandler}>Add todo</button>
    </div>
  );
}