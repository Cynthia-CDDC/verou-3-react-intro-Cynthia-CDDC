import React, { useState } from "react";

//presentational component which takes the item as a prop and display it

//component that will contain a list of all the items that we have in the app. Takes items as a prop and display them as ul.
// Uses Item component from above for displaying individual elements


// Hooked them up in the App component and pass the items as props to the ItemList

// Having the items in a state variable and setter function that will be used to update these items
const App = () => {
  const [items, setItems] = useState([]);
  
  
  const Item = ({item, removeItem}) =>
  {
    return (
      <div>
        <span>{item}</span>
        <buton button onclick={() => removeItem(item)}>X</buton>
     </div>
    );
  };

  const ItemList = ({items}) => {
    return (
      <div className="items-container">
        <ul>
          {items.map((item) => (
          <li>
            <Item key={item} item={item}/>
          </li>))}
        </ul>
      </div>
    );
  };
  const addItem = (item) => {
      setItems([...items, item]);
    };    
  const AddItemForm = ({addItem}) => {
    const [item, setItem] = useState('');
  
    const handleSubmit = (e) => {
      e.prevent.Default();
      addItem(item);
      setItem('');
    };
    return (
      <div>
        <p>Add item</p>
        <form onSubmit={handleSubmit}>
          <input value={item} onChange={ (e) => setItem(e.target.value)} />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
  

  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };

  
  return(
    <div className="App">
      <header className="App-header">
        To Do items
        < AddItemForm items={items} />
      </header>
    </div>
  );

};

export default App;
