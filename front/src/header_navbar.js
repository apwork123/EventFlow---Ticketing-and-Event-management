/*
  This is a simple navbar component that can be used in any React project.
  It has a few basic features:
    - Home link
    - Link link
    - Disabled link
    - Dropdown menu
    - Search bar
*/
import './header_navbar.css'

import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Navbar</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link disabled">
            Disabled
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            onClick={toggleDropdown}
          >
            Dropdown
          </a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="#">Action</a>
              </li>
              <li className="dropdown-item">
                <a href="#">Another action</a>
              </li>
              <li className="dropdown-item">
                <a href="#">Something else here</a>
              </li>
            </ul>
          )}
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