import React from 'react';
import styles from './navbar.module.css';
import DropdownNav from '../../assets/Category_Dropdown/DropdownNav';
import Dropdown from '../../assets/Dropdown';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className={styles.Navbar}>
       <Header />
       <Categories />
      </div>
      <div >
        <SearchBar  />
      </div>
    </>
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
          <li>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}>
              <span>
              <Dropdown
                buttonText="Login"
                options={[
                <Link to="/login">Login</Link>,
                <Link to="/login-manager">Login (Manager)</Link>,
                ]}
        onClick={(e) => e.stopPropagation()}
      />
    </span>
            </a>
          </li>
          <li><img src="" alt="User Icon" /></li>
        </ul>
      </nav>
    </header>
  );
}

function Categories() {
  const sportsCategories = [
    {
      name: 'Sports',
      subcategories: [
        {
          name: 'Sports',
          subcategories: [
            { name: 'Football' },
            { name: 'Cricket' },
            { name: 'Basketball' },
            { name: 'Tennis' },
          ],
        },
        {
          name: 'Motorsports',
          subcategories: [
            { name: 'Formula 1' },
            { name: 'MotoGP' },
            { name: 'Endurance' },
            { name: 'Rally' },
          ],
        },
        {
          name: 'eSports',
          subcategories: [
            { name: 'LoL' },
            { name: 'CS2' },
            { name: 'Valorant' },
            { name: 'Dota 2' },
          ],
        },
      ],
    },
  ];;

  const concertsCategories = [
    { name: 'Diljit Dosanjh' },
    { name: 'KRSNA' },
    { name: 'Hanumankind' },
    { name: 'Travis Scott' },
    // Add more concerts categories here
  ];

  const theaterCategories = [
    { name: 'Natak', subcategories: [
      { name: 'Marathi', options: [
        { name: 'Jar Tar Chi Gosth' },
        { name: 'Bambai Meri Jaan' },
        { name: 'Ayushyavar Bolu Kahi' },
        { name: 'Bhumika' },
        // Add more Marathi options here
      ]},
      { name: 'Gujarati', options: [
        { name: 'Munga Bole Behra Samdhe' },
        { name: 'Gujjubhai Bnaya Dabang' },
        { name: 'Bhago Dukh Aya' },
        { name: 'Naya Nukkad' },
        // Add more Gujarati options here
      ]},
      // Add more Natak subcategories here
    ]},
    // Add more theater categories here
  ];

  const realityShowsCategories = [
    
    { name: 'Award Shows', subcategories: [
      { name: 'Filmfare Awards' },
      { name: 'ZEE Cine Awards' },
      { name: 'IIFA' },
      { name: 'Stardust Awards' },
      // Add more award shows here
    ]},
    { name: 'Talent Shows', subcategories: [
      { name: 'Comedian shows' },
      { name: 'Dance India Dance' },
      { name: 'Dance +' },
      { name: 'Indian Idol' },
      // Add more talent shows here
    ]},
    { name: 'Interviews', subcategories: [
      { name: 'Movie Release' },
      { name: 'Trailer Launch' },
      { name: 'Movie Promotion' },
      // Add more interviews here
    ]},
    // Add more reality shows categories here
  ];

  const festivalsCategories = [
    { name: 'Religious', subcategories: [
      { name: 'Navratri' },
      { name: 'Ganesh Chaturthi' },
      { name: 'Ganesh Visarjan' },
      { name: 'Christmas' },
      // Add more religious festivals here
    ]},
    // Add more festivals categories here
  ];


  
  return (
    <div className={styles.categories}>
      {sportsCategories.map((category) => (
        <DropdownNav
          key={category.name}
          label={category.name}
          categories={category.subcategories}
        />
      ))}
      <DropdownNav label="Concerts" style={{ left: 0 }} categories={concertsCategories} />
      <DropdownNav label="Theater" categories={theaterCategories} />
      <DropdownNav label="Reality Shows" style={{ right: 0 }} categories={realityShowsCategories} />
      <DropdownNav label="Festivals" style={{ right: 0 }} categories={festivalsCategories} />
    </div>
  );
}

function SearchBar() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      border:  '0.7rem solid #ccc',
      borderRadius: '2rem',
      marginRight: '18rem',
      marginLeft: '18rem',
      backgroundColor: '#ccc'
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