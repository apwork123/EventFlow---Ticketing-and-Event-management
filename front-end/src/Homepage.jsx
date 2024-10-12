import Navbar from './homepage/navbar/navbar.jsx'
import  Footer from './homepage/footer/footer.jsx'
import Carousel from './assets/AutoCarousel/Carousel.jsx'
import SearchBar from './homepage/SearchBar/SearchBar.jsx'
import ComboboxDemo from './assets/ComboBox/ComboboxDemo.jsx'
import React from 'react'

export default function Homepage() {
  const images = [
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1019/600/400',
  ];
  return (
    <>
      <Navbar />
      
      <div style={{ display: 'flex',
        justifyContent: 'center',
        paddingBottom: '2rem'
      }}>
          <SearchBar  />
      </div>
      
      <div style={{paddingBottom: '3rem'}}>
        <h2 style={{display: 'flex'
          ,justifyContent: 'center',
          marginRight: '60%',
          color: '#e2effd'
        }}> Hottest Events Right Now </h2>
        <Carousel images={images} interval={5000} />
      </div>
      

      <div style={{paddingBottom: '3rem'}}> 
      <h2 style={{display: 'flex'
          ,justifyContent: 'center',
          marginRight: '60%',
          color: '#e2effd'
        }}> Trending in your City </h2>
        <Carousel images={images} interval={5000} />
      </div>
      
      <div>
        <Footer />
      </div>
    </>
  )
}
