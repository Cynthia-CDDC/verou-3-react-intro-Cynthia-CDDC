import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  //initialize a new state property called todos: 
    //Hooks have to be initialized inside of the body of a React Component. You can’t initialize them outside of the body or inside of a function.
    //todos is the state value itself, and setTodos is the function that updates the state value
    const [todos, setTodos] = useState([
    {
      content: '',
      isCompleted: false,
    },
  ]); //the initial state value is set, now use the todos in the return statement

  useEffect(() => {
    if (localStorage.getItem("toStoreData")){
      setTodos(JSON.parse(localStorage.getItem("toStoreData")))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("toStoreData", JSON.stringify(todos))
  }, [todos])

  function handleKeyDown(e, i) { // check if enter is pressed, if enter is pressed go to createTodoAtIndex function
    if (e.key === 'Enter') {
      return createTodoAtIndex(e, i);
    }
    else if (e.key === 'Backspace' && todos[i].content === '')
      return removeTodoAtIndex(i);
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos]; // create copy of the todos state array because state should never be directly mutated!
    newTodos.splice(i + 1, 0, { //using the copy of todos, insert new empty todo after the currently selected todo.
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos); // insert new todo into todos copy, the copy updates the original array
    setTimeout(() => { // set the focus to the new input field, with timeout to wait for the state to finish updating before focusing on the newly rendered input
      document.forms[0].elements[i + 1].focus();
    }, 0);
  } // function updateTodoAtIndex will assign the value of inputfield as the content of the new index

  function updateTodoAtIndex(e, i) { //the event object allows to find the value
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <div className="app">
      <div className="header">
        {/* <img src={logo} className="logo" alt="logo" /> */}
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => ( // looping through the todos array and rendering the html for each item in the array
                            //give two classes to the div
            <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
              <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}> 
              {todo.isCompleted && (<span>&#x2714;</span>)}
              </div>
              <input 
                placeholder='add a todo'
                type="text" 
                value={todo.content} 
                onKeyDown={e => handleKeyDown(e, i)} //calls function and passes the input's event and the index of the current todo
                onChange={e => updateTodoAtIndex(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;