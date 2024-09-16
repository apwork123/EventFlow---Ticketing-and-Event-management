import React, { useState } from 'react';

function Dropdown({ buttonText, options }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(true);
  };

  const handleMouseOut = (e) => {
    if (!e.relatedTarget || !e.relatedTarget.closest('ul')) {
      setShowDropdown(false);
    }
  };

  return (
    <div onMouseOut={handleMouseOut}>
      <button onClick={handleClick}>{buttonText}</button>
      {showDropdown && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, position: 'absolute' }} onMouseOut={handleMouseOut}>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;