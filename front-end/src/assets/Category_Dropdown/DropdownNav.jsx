import React, { useState } from 'react';
import './DropdownNav.css';

const DropdownNav = ({ label, style, categories, onMouseLeave }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseLeave = () => {
    setIsOpen(false);
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <div className="dropdown" onMouseLeave={handleMouseLeave}>
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {label}
      </button>
      {isOpen && (
        <div className="dropdown-menu" style={style}>
          <div className="dropdown-content">
            <div className="image-container">
              <img src="https://picsum.photos/id/1019/600/400" alt="PSD Mockups" />
            </div>
            <div className="categories-container">
              <h4>PSD Mockups</h4>
              <div className="categories-grid">
                {categories.map((category) => (
                  <div key={category.name}>
                    <a href="#" className="category-link">
                      {category.name}
                    </a>
                    {category.subcategories && (
                      <ul className="subcategories-list">
                        {category.subcategories.map((subcategory) => (
                          <li key={subcategory.name}>
                            <a href="#" className="subcategory-link">
                              {subcategory.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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