import React, { useState } from 'react'
import './DropdownNav.css'

const DropdownNav = ({ label, style, categories, onMouseLeave }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  return (
    <div className="dropdown" >
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
              <p>View All Here</p>
              <div className="categories-grid">
                {categories.map((category) => (
                  <a key={category.name} href="#" className="category-link">
                    {category.name} 
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownNav

//onMouseLeave={onMouseLeave || handleMouseLeave}