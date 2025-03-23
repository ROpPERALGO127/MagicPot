"use client";

import { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

export default function ImageSlider({ images, interval = 5000 }: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={image}
          className="slider-image"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0
          }}
        />
      ))}
    </div>
  );
} 