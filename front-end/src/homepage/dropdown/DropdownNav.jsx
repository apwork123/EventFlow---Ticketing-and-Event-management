import React, { useState } from 'react';
import './DropdownNav.css';

const DropdownNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: 'Code', count: 5 },
    { name: 'Fonts', count: 12 },
    { name: 'HTML Templates', count: 81 },
    { name: 'Mockups', count: 9 },
    { name: 'Logo', count: 16 },
    { name: 'PSD Mockups', count: 22 },
    { name: 'Sketch App', count: 32 },
    { name: 'User Interface', count: 61 },
    { name: 'WordPress', count: 73 },
    { name: 'User Experience', count: 88 },
    { name: 'WebGL', count: 19 },
    { name: 'Mockups', count: 93 },
  ];

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        Dropdown
        <span className="chevron-down"></span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-content">
            <div className="image-container">
              <img src="https://picsum.photos/id/1019/600/400" alt="PSD Mockups" />
            </div>
            <div className="categories-container">
              <h3>PSD Mockups</h3>
              <p>View All Here</p>
              <div className="categories-grid">
                {categories.map((category) => (
                  <a key={category.name} href="#" className="category-link">
                    {category.name}({category.count})
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownNav;