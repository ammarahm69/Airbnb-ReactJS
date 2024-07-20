import React from "react";
import "./Card.css";
function Card({src,title, describition, price}) {
  return (
    <div className="card">
      <img src={src} alt="" />

      <div className="card_info">
        <h1>{title}</h1>
        <h1>{describition}</h1>
        <h1>{price}</h1>
      </div>
    </div>
  );
}

export default Card;
