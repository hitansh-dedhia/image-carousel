import React from "react";

const ImageCard = ({ item, position }) => {
  const handleClick = async () => {
    try {
      await fetch(`https://image-carousel-backend.onrender.com/images/${item.id}/click`, {
        method: "POST",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    // We add the dynamic position class here (active, prev, next, hidden)
    <div className={`carousel-item ${position}`}>
      <div className="card-content">
        <img
          src={item.url}
          alt={item.title}
          className="carousel-image"
          onClick={handleClick}
        />
        <div className="text-content">
          <h3 className="carousel-title">{item.title}</h3>
          <p className="carousel-category">{item.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;