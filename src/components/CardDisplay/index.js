import React, { useState } from 'react';
import './index.css';

function CardDisplay({ object }) {
const { image, url, description,technology } = object;
const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
setIsHovered(true);
};

const handleMouseLeave = () => {
setIsHovered(false);
};

const buttonStyle = {
backgroundColor: isHovered ? 'rgb(9, 255, 0)' : 'rgb(255, 119, 0)',
color: 'white',
padding: '10px 20px',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
boxShadow: isHovered ? '0px 0px 10px 2px rgba(0,0,0,0.5)' : 'none',
};

return (
<div className="card">
  <img className="card-img-top" src={image} alt={description} />
  <div className="card-body">
    <p className="card-text">{description}</p>
    <p className="tech-text">{technology}</p>
  </div>
  <div className="centered">
    <a href={url} target="_blank" rel="noopener noreferrer">
    <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
    Click Me
    </button>
    </a>
  </div>
</div>
);
}

export default CardDisplay;