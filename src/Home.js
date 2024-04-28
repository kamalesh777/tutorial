import React, { useState } from 'react'

const Home = () => {
    const [newItem, setNewItem] = useState('');

  const [list, setList] = useState(['Apple', 'Orange'])

  const addItem = (e) => {
    const itemValue = e.target.value
    setNewItem(itemValue);
  }
  const addItemHandler = () => {
     setList([...list, newItem]);
     setNewItem('');
  }
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Todo List</h1>
      <div className="d-flex">
        <input type="text" onChange={addItem} value={newItem} />
        <button type="button" onClick={addItemHandler}>
          Add
        </button>
      </div>
      <ul>
        {list.map((currentValue) => (
          <li>{currentValue}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home