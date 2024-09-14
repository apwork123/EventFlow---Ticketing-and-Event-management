import React, { useState, useEffect } from 'react';
import './carousel.css'

function AutoCarousel({ images, interval = 3250 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const showSlide = (index) => {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'carousel-item active' : 'carousel-item'}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <a href="#" className="carousel-control prev" onClick={prevSlide}>
        &lt;
      </a>
      <a href="#" className="carousel-control next" onClick={nextSlide}>
        &gt;
      </a>
      <div className="carousel-indicators">
        {images.map((image, index) => (
          <button
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => showSlide(index)}
          >
            
          </button>
        ))}
      </div>
    </div>
  );
}

export default AutoCarousel;