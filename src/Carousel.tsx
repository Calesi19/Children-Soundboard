import React, { useState, useRef } from 'react';
import './Carousel.css';

type Props = {
  children: React.ReactNode[];
};

const Carousel: React.FC<Props> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    const nextIndex = activeIndex === children.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = activeIndex === 0 ? children.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  

  return (
    <div className="carousel" ref={carouselRef}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
        >
          {child}
        </div>
      ))}
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
