import React from 'react';

import './contactHeader.css';

const ContactHeader = ({ numero, rue, codePostal, ville, phone}) => {
  return (
    <div className="contactHeader">
        <span className="adresse">{numero}, {rue} {codePostal} {ville}</span>
        <a className="phone" href={`tel:0${phone}`}>0{phone}</a>
      
    </div>
  );
};

export default ContactHeader;