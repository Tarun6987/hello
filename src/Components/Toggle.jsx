import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Toggle() {
  // State to control visibility
  const [isVisible, setIsVisible] = useState(false);
  // Function to toggle the visibility
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg text-center">
        <h2>Toggle Visibility</h2>
        {isVisible && <p className="mt-4">Hello, World!</p>}
        <button 
          onClick={toggleVisibility} 
          className="btn btn-primary mt-3"
        >
          {isVisible ? 'Hide' : 'Show'} Message
        </button>
      </div>
    </div>
  );
}
export default Toggle;