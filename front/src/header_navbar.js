/*
  This is a simple navbar component that can be used in any React project.
  It has a few basic features:
    - Home link
    - Link link
    - New Button link
    - Dropdown menu
    - Search bar
*/
import './header_navbar.css'

import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#">Navbar</a>
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
            onClick={handleToggleDropdown}
          >
            Dropdown
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
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;