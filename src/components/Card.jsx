import React from "react";

const Card = ({ image, alt, title, description, className = "" }) => {
  return (
    <div className={`statistics__card ${className}`.trim()}>
      <div className="img">
        <img src={image} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
