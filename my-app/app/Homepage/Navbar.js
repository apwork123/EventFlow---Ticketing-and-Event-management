import './navbar.css';
import React from 'react';

function NavBar() {
  return (
    <div className="Navbar">
      <header>
        <div className="logo">
          <img src='./Images/logo.png' alt="Logo" />
          <h1>EventFlow</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Login</a></li>
            <li><img src="" alt="User Icon" /></li>
          </ul>
        </nav>
      </header>

      <div className="categories">
        <button>Sports</button>
        <button>Concerts</button>
        <button>Theater</button>
        <button>Reality Shows</button>
        <button>Festivals</button>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button><span><i className="fa fa-search"></i></span></button>
        <select>
          <option value="city">City</option>
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
        </select>
      </div>
    </div>
  );
}

export default NavBar;