import React from 'react';
import styles from './navbar.module.css'

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Header />
      <Categories />
      <SearchBar />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img src='/Homepage_Images/logo.png' alt="Logo" />
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
  );
}

function Categories() {
  return (
    <div className={styles.categories}>
      <button>Sports</button>
      <button>Concerts</button>
      <button>Theater</button>
      <button>Reality Shows</button>
      <button>Festivals</button>
    </div>
  );
}

function SearchBar() {
  return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <input type="text" placeholder="Search" />
        <button><span></span></button>
        <select>
         <option value="city">City</option>
         <option value="city1">City 1</option>
         <option value="city2">City 2</option>
       </select>
     </div>
  );
}

export default Navbar;