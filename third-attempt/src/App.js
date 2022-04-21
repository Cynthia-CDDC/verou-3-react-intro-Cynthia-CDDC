import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

const LSKEY = "MyTodoApp";

function App() {
  
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LSKEY + ".storagetodos")) || []);

  useEffect(() => {
    if (localStorage.getItem(LSKEY + ".storagetodos"))
    {
      setTodos(JSON.parse(localStorage.getItem(LSKEY + ".storagetodos")))
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(LSKEY + ".storagetodos", JSON.stringify(todos))
  },[todos]);

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
