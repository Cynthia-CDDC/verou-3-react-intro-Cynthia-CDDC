import React from 'react';
import './App.css';

// component
function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};

//component
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

//component
function App() { //state
  const [todos, setTodos] = React.useState([ //name the state, set that state
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);
    const addTodo = text => { // function will grab the items, add on the new item, and display that new list
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  return ( //adds a <div> for app, a <div> for todo-list and a map of the todos to Todo components
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => ( //map method create new array of items by mapping over the todo items from state and displaying them by index
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
