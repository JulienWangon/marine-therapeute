import React from 'react';

import './infoCard.css'

const InfoCard = ({ imageSrc, altText, primaryText, secondaryText }) => {
  return (
    <div className="infoCard">
      <img className="infoImg" src={imageSrc} alt={altText}/>
      <div className="textWrapper">
          <span>{primaryText}</span>
          {secondaryText && <span>{secondaryText}</span>}
      </div>
      
    </div>
  );
};

export default InfoCard;