import React from 'react';
import './index.css';
import { useState } from 'react';

function CardDisplay({ object }) {
  const { image, url, description } = object;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor: isHovered ? '#555' : '#ccc',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: isHovered ? '0px 0px 10px 2px rgba(0,0,0,0.5)' : 'none',
  };


  return (
    
      <div className="card">      
          <img
            className="card-img-top"
            src={image}
            alt={description}
          />      
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className='centered'>
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
