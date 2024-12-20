import React, { useState } from 'react';
function Colorchanger() {
  // State to keep track of background color
  const [color, setBgColor] = useState('white');
  // Colors to choose from
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  return (
    <div 
      style={{ 
        backgroundColor:color, 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column' ,
        marginTop: '50px'
      }}
    >
      <h1>Background Color Changer</h1>
      <p>Current Color: <strong>{color}</strong></p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {colors.map((color) => (
          <button 
            key={color} 
            onClick={() => setBgColor(color)} 
            style={{ 
              backgroundColor: color, 
              color: 'white', 
              border: 'none', 
              padding: '10px 20px', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Colorchanger;