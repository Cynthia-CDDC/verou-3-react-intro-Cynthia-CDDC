import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

function App() {

  const [todos, setTodos] = useState([
    {id: 1, content: "My first todo", checked: false}, 
    {id: 2, content: "My second todo", checked: false}
  ]);
// id: todos.length + 1

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>

      <Form testprop = {todos} setTodos = {setTodos}/>

      <div className='todolist'>
        <h2>Todo Today</h2>
        <TodoList testprop = {todos} setTodos = {setTodos}/>
      </div>
    </div>
  );
}

export default App;
