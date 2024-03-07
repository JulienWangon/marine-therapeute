import React from 'react';
import Button from '../Button/Button';

import './header.css';
import ContactHeader from '../../ContactInfo/ContactHeader/ContactHeader';

import { useContactInfo } from '../../../context/ContactInfoContext';

const Header = () => {
    const { contactInfo } = useContactInfo();
  return (
    <header>
        <div className="topHeader">
            <span className="headerName">Marine Ottaviani</span>
            <span className="headerSlogan">Psychopraticienne</span>
        </div>
        <div className="bottomHeader">
            <Button
                text="contact"
                className="contactBtn"
                type="button"
                colorStyle="whiteBtn"
                onClick={() => console.log('open modal')}  
            />

            {contactInfo.map((info) => (
              <ContactHeader
                key={info.id}
                numero={info.numero}
                rue={info.rue}
                codePostal={info.codePostal}
                ville={info.ville}
                phone={info.phone}
              />
            ))}
        </div>   
    </header>
  );
};

export default Header;