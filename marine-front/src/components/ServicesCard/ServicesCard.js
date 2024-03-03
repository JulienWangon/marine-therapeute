import React from 'react';

import './servicesCard.css';

const ServicesCard = ({ serviceName, pathImage}) => {
  return (
    <div className="servicesCard">
      <img className="serviceImg" src={pathImage} alt={`logo ${serviceName}`}/>
      <h3 className="serviceName">{serviceName}</h3>      
    </div>
  );
};

export default ServicesCard;