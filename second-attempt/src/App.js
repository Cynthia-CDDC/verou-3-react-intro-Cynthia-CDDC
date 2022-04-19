import React, {useState, useRef, useEffect} from 'react';
import './App.css';

function App() {
//set initial state
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'example todo', 
      isCompleted: false,
    },
  ]);

  function handleAddNewTodo(e, newTodos) {
    e.preventDefault();
    //creating a copy of the current state using the spread syntax
    const createTodos = [
      //copy current todos state
      ...todos,
      //add a new object to add to the array
      {
        //use the lenght of the array for a unique id
        id: todos.length + 1,
        //adding a new todo content
        content: newTodos,
        //with the boolean status for completion
        isCompleted: false}
    ];
    //update the sate to the newTodos
    setTodos(createTodos);
  }

  function handleCreateInputChange(e) {
    const newTodos = e.target.value;
    handleAddNewTodo(newTodos);
  }

// boolean state to know if we are editing (will let us display object state to set so we know which todo item we are editing)
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

//function to get the value of the edit input and set the new state
  function handleEditInputChange(e) {
    //set the new state value to what's currently in the edit input box
    setCurrentTodo({...currentTodo, content: e.target.value});
  }

//function to handle when the 'Edit todo' button is clicked
  function handleEditClick(todo) {
    //set isEditing to true
    setIsEditing(true);
    //update the state to the updatedTodos
    setCurrentTodo({...todo});
  }

  function handleUpdateTodo(id, updatedTodo) {
    //mapping over the Todos array to check if the todo.id mathes the id we pass into the function
    //if the id's match, use the second parameter to pass in the updated todo object
    //otherwise just use old user
    const updatedObject = todos.map((todo) => 
    todo.id === id ? updatedTodo : todo);
    setIsEditing(false);
    setTodos(updatedObject);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    //call the handleUpdateTodo function - passing the currentTodo.id and the currentTodo object as arguments
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  return (
    <div className="App">
      {/* start - if the 'edit todo' is clicked */}
      {currentTodo.id && isEditing && (
        <form onSubmit={handleEditFormSubmit}>
          <input
            name='editTodo'
            type='text'
            placeholder='Edit todo'
            value={currentTodo.content}
            onChange={handleEditInputChange}
          />
          <button type='submit'>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}
     
      <form onSubmit={handleAddNewTodo}>
          <input
            name='createTodo'
            type='text'
            placeholder='new todo'
            value={todos.content}
            onChange={handleCreateInputChange}
          />
          <button type='submit'>Add new todo</button>
        </form>
      
      <ul>
        {todos.map((todo) => (
          <div  key={todo.id}>
            <p>{todo.content}</p>
            {!isEditing && (
              <button onClick={() => handleEditClick(todo)}>
                Edit Todo
              </button>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;

// TODO: useState, set newState, handle onClick, loop through useSate to list all todo's