import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const cities = [
  "New York", "London", "Tokyo", "Paris", "Berlin", "Sydney", "Moscow", "Dubai",
  "Singapore", "Toronto", "Barcelona", "Amsterdam", "Rome", "Seoul", "Mumbai"
];

export default function SearchBar() {
  const [cityValue, setCityValue] = useState('');
  const [date, setDate] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [filteredCities, setFilteredCities] = useState(cities);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest('.city-select-container') && !event.target.closest('.date-picker-container')) {
        setShowCityDropdown(false);
        setShowCalendar(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [setShowCityDropdown, setShowCalendar]);


  const handleCitySearch = (e) => {
    const filter = e.target.value.toLowerCase();
    setFilteredCities(cities.filter(city => city.toLowerCase().includes(filter)));
  };

  const selectCity = (city) => {
    setCityValue(city);
    setShowCityDropdown(false);
  };

  const renderCalendar = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
  
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<td key={`empty-${i}`}></td>);
    }
    for (let i = 1; i <= lastDate; i++) {
      days.push(
        <td key={i} onClick={() => selectDate(i, month, year)}>
          {i}
        </td>
      );
    }
  
    const rows = [];
    let cells = [];
    days.forEach((day, i) => {
      if (i % 7 !== 0) {
        cells.push(day);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(day);
      }
      if (i === days.length - 1) {
        rows.push(cells);
      }
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="7">{new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</th>
          </tr>
          <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{row}</tr>
          ))}
        </tbody>
      </table>
    );
  };

  const selectDate = (day, month, year) => {
    setDate(`${day} ${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`);
    setShowCalendar(false);
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <div className="city-select-container">
        <button className="city-select-button" onClick={() => setShowCityDropdown(!showCityDropdown)} >
          {cityValue || "Select city..."}
          <svg className="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        {showCityDropdown && (
          <div className="city-dropdown">
            <input type="text" className="city-search" placeholder="Search city..." onChange={handleCitySearch} />
            <ul className="city-list">
              {filteredCities.map((city, index) => (
                <li key={index} onClick={() => selectCity(city)}>{city}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="date-picker-container">
  <button className="date-picker-button" onClick={() => setShowCalendar(!showCalendar)}>
    {date || "Pick a date"}
    <svg className="calendar-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  </button>
  {showCalendar && (
    <div className="calendar">
      {renderCalendar()}
    </div>
  )}
</div>
    </div>
  );
}