import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      
      <form className='createform'>
        <input type="text" name="newtodo" value='' placeholder='write your todo' />
        <button type="submit">Submit</button>
      </form>

      <div className='todolist'>
        <h2>Todo Today</h2>
        <TodoList/>
      </div>
      
    </div>
  );
}

export default App;
