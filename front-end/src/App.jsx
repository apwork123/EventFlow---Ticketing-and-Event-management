import Navbar from './homepage/navbar/navbar.jsx'
import  Footer from './homepage/footer/footer.jsx'
import Carousel from './homepage/AutoCarousel/Carousel.jsx'
import React from 'react'




export default function App() {
  const images = [
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1019/600/400',
  ];
  return (
    <>
      <Navbar />
      <Carousel images={images} interval={5000} />
      <Footer />
    </>
  )
}
