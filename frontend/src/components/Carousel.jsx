// src/components/Carousel.jsx

import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import Controls from "./Controls";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [startX, setStartX] = useState(0);
  const threshold = 50;

  // Fetch images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("http://localhost:5000/images");
        const data = await res.json();
        setImages(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const currentItem = images[currentIndex];

  // View API call
  useEffect(() => {
    if (!currentItem) return;

    fetch(`http://localhost:5000/images/${currentItem.id}/view`, {
      method: "POST",
    }).catch((err) => console.error(err));
  }, [currentIndex, currentItem]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleSwipe = (endX) => {
    const distance = endX - startX;

    if (distance > threshold) handlePrev();
    else if (distance < -threshold) handleNext();
  };

  if (loading) return <h2>Loading...</h2>;
  if (images.length === 0) return <h2>No images</h2>;

  return (
    <div
      className="carousel-container"
      onTouchStart={(e) => setStartX(e.touches[0].clientX)}
      onTouchEnd={(e) => handleSwipe(e.changedTouches[0].clientX)}
      onMouseDown={(e) => setStartX(e.clientX)}
      onMouseUp={(e) => handleSwipe(e.clientX)}
    >
      <div className="carousel-wrapper">
        {/* We map through ALL images to keep them in the DOM for the 3D effect */}
        <div className="carousel-track">
          {images.map((item, index) => {
            // Determine position class
            let position = "hidden";
            if (index === currentIndex) position = "active";
            else if (index === (currentIndex - 1 + images.length) % images.length) position = "prev";
            else if (index === (currentIndex + 1) % images.length) position = "next";

            return (
              <ImageCard 
                key={item.id} 
                item={item} 
                position={position} 
              />
            );
          })}
        </div>
        
        <Controls onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
};

export default Carousel;