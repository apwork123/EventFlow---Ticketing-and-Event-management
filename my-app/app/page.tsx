// App.js
import React from 'react';
import Navbar from './Homepage/Navbar.js';
import Footer from './Homepage/footer.js';

export default function App() {
  return (
    <>
      <Navbar />
      <div className='App dark'>
        {/* rest of your app content */}
      </div>
      <Footer  />
    </>
  );
}
