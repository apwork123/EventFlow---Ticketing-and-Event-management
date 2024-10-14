import Navbar from './navbar/navbar'
import  Footer from './footer/footer'
import Carousel from '../assets/AutoCarousel/Carousel'
import SearchBar from './SearchBar/SearchBar'


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
        paddingBottom: '3.5rem'
      }}>
          <SearchBar  />
      </div>
      
      <div style={{paddingBottom: '3rem'}}>
        <h2 style={{display: 'flex',
          fontSize: '1.5rem',
          fontWeight: '1.4rem',
          justifyContent: 'center',
          marginRight: '60%',
          color: '#e2effd'
        }}> Hottest Events Right Now </h2>
        <Carousel images={images} interval={5000} />
      </div>
      

      <div style={{paddingBottom: '3rem'}}> 
      <h2 style={{display: 'flex',
          fontSize: '1.5rem',
          fontWeight: '1.4rem',
          justifyContent: 'center',
          marginRight: '60%',
          color: '#e2effd'
        }}> Trending in your City </h2>
        <Carousel images={images} interval={5000} />
      </div>
      
      <div style={{backgroundColor: '#1f2937'}}>
        <Footer />
      </div>
    </>
  )
}
