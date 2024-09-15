import Navbar from './homepage/navbar/navbar.jsx'
import  Footer from './homepage/footer/footer.jsx'
import Carousel from './homepage/AutoCarousel/AutoCarousel.jsx'
import React from 'react'

const images = [
  'https://picsum.photos/id/1018/600/400',
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1019/600/400',
];

export default function App() {
  return (
    <>
      <Navbar />
      <Carousel images={images} />
      <Footer />
    </>
  )
}
