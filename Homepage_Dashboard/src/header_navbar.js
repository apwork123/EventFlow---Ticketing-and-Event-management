import './header_navbar.css';
import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  const handleToggleSearch = () => {
    setSearchOpen((prevOpen) => !prevOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#">
          <img src="/images/logo192.png" alt="Navbar Logo" />
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Link 1
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Link 2
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            onClick={handleToggleDropdown}> Dropdown
          </a>
          <ul className={`dropdown-content ${dropdownOpen ? 'open' : ''}`}>
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">Another action</a>
            </li>
            <li>
              <a href="#">Something else here</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="navbar-search">
        <button className="search-button" onClick={handleToggleSearch}>
          <img src="/images/search_button_icon.png" alt="Search Icon" />
        </button>
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          className={searchOpen ? 'search-input' : 'search-input hidden'}
        />
      </div>
    </nav>
  );
};

export default Navbar;