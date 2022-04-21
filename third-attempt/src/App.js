import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>

      <Form todos = {todos} setTodos = {setTodos}/>

      <div className='todolist'>
        <h2>Todo Today</h2>
        <TodoList todos = {todos} setTodos = {setTodos}/>
      </div>
    </div>
  );
}

export default App;
