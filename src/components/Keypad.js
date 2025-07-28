// Code Keypad Component Here

// components/Keypad.js
import React from 'react';

export function Keypad() {
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
