import React from 'react';
import Navbar from './homepage/navbar.js';
import Footer from './homepage/footer.js';
import AutoCarousel from './homepage/AutoCarousel.js';

const images = [
  'https://picsum.photos/id/1018/600/400',
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1019/600/400',
];

function App() {
  return (
    <>
      <Navbar />
      <AutoCarousel images={images} />
      <Footer />
    </>
  );
}

export default App;