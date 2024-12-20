import React, { useState } from 'react';
function ItemList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');
    }
  };
  return (
    <div className="container mt-5">
       <div className="d-flex flex-column p-5 shadow-lg justify-content-center align-items-center">
          <div>
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && addItem()} 
              placeholder="Add item" 
            />
            <button onClick={addItem} className='btn btn-primary'>Add</button>
          </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;