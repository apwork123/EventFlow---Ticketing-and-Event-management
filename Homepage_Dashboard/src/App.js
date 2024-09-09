import './App.css';
import Footer from './footer';

import Navbar from './header_navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <div className='App dark'>
        {/* rest of your app content */}
      </div>

      <Footer />
    </>
  );
}