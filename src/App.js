import React from "react";
import Item from './Item';
import ItemList from './ItemList';

//presentational component which takes the item as a prop and display it
const Item = ({item}) =>
{
  return (
    <div>
      <span>{item}</span>
    </div>
  );
};

//component that will contain a list of all the items that we have in the app. Takes items as a prop and display them as ul.
// Uses Item component from above for displaying individual elements
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

// Hooked them up in the App component and pass the items as props to the ItemList

const App = () => {
  const items = ["item 1", "item 2"]
  return(
    <div className="App">
      <header className="App-header">
        To Do items
        <ItemList items={items} />
      </header>
    </div>
  );
};





export {Item as default};
