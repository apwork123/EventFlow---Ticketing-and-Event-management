import  { useState, useEffect, useCallback } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[]; // Add type annotation for images prop
  interval?: number;
}

export default function Carousel({ images, interval = 3000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval]);

  const goToSlide = (index: number) => { // Add type annotation for index parameter
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      {images.map((image: string, index: number) => ( // Add type annotations for image and index
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <div className={styles.indicators}>
        {images.map((_: string, index: number) => ( // Add type annotations for _ (image) and index
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}