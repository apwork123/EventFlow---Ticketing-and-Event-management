import React, { useState, useEffect } from 'react'
import styles from './AutoCarousel.module.css'

function AutoCarousel({ images, interval = 3250 }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  const showSlide = (index) => {
    if (index < 0) index = images.length - 1
    if (index >= images.length) index = 0
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    showSlide((currentIndex + 1) % images.length)
  }

  const prevSlide = () => {
    showSlide(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    )
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <a
        href="#"
        className={`${styles.carouselControl} ${styles.carouselControlPrev}`}
        onClick={prevSlide}
      >
        &lt;
      </a>
      <a
        href="#"
        className={`${styles.carouselControl} ${styles.carouselControlNext}`}
        onClick={nextSlide}
      >
        &gt;
      </a>
      <div className={styles.carouselIndicators}>
        {images.map((image, index) => (
          <button
            key={index}
            className={`${index === currentIndex ? styles.active : ''}`}
            onClick={() => showSlide(index)}
          >
            •
          </button>
        ))}
      </div>
    </div>
  )
}

export default AutoCarousel