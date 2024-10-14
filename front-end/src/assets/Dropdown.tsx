import React, { useState } from 'react';

interface DropdownOption {
  label: string;
  onClick?: () => void;
}

interface DropdownProps {
  buttonText: string;
  options: DropdownOption[];
}

function Dropdown({ buttonText, options }: DropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(true);
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLElement>) => {
    if (!e.relatedTarget || !(e.relatedTarget as Element).closest('ul')) {
      setShowDropdown(false);
    }
  };

  return (
    <div onMouseOut={handleMouseOut}>
      <button
        style={{
          border: '0',
          color: '#e2effd',
          padding: 0,
          margin: 0,
          fontSize: 15,
          backgroundColor: 'transparent',
        }}
        onClick={handleClick}
      >
        {buttonText}
      </button>
      {showDropdown && (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            position: 'absolute',
          }}
          onMouseOut={handleMouseOut}
        >
          {options.map((option, index) => (
            <li key={index}>
              <button onClick={option.onClick}>{option.label}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;