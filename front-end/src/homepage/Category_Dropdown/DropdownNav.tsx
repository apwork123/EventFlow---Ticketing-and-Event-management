import React, { useState } from 'react';
import './DropdownNav.css';

interface Category {
  name: string;
  subcategories?: Subcategory[];
}

interface Subcategory {
  name: string;
  imageUrl: string;
}

const DropdownNav = ({
  label,
  style,
  categories,
  onMouseLeave,
}: {
  label: string;
  style: React.CSSProperties;
  categories: Category[];
  onMouseLeave?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('../../../public/Homepage_Images/ImageIcon.png'); // default image URL

  const handleMouseLeave = () => {
    setIsOpen(false);
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  const handleSubcategoryHover = (subcategory: Subcategory) => {
    // update the image URL based on the subcategory
    setImageUrl(subcategory.imageUrl); // assuming each subcategory has an imageUrl property
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
              <img src={imageUrl} alt="" />
            </div>
            <div className="categories-container">
              <div className="categories-grid">
                {categories.map((category) => (
                  <div key={category.name}>
                    <a href="#" className="category-link">
                      {category.name}
                    </a>
                    {category.subcategories && (
                      <ul className="subcategories-list no-bullets">
                        {category.subcategories.map((subcategory) => (
                          <li key={subcategory.name}>
                            <a
                              href="#"
                              className="subcategory-link"
                              onMouseOver={() => handleSubcategoryHover(subcategory)}
                            >
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