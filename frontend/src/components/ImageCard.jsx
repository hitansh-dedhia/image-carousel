// src/components/ImageCard.jsx

import React from "react";

const ImageCard = ({ item }) => {
  const handleClick = async () => {
    try {
      await fetch(`http://localhost:5000/images/${item.id}/click`, {
        method: "POST",
      });
    } catch (err) {
      console.error("Click API error:", err);
    }
  };

  return (
    <div>
      <img
        src={item.url}
        alt={item.title}
        width="400"
        height="250"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <h3>{item.title}</h3>
      <p>Category: {item.category}</p>
    </div>
  );
};

export default ImageCard;