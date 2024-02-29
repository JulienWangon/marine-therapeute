import React from 'react';
import Button from '../Button/Button';

import './header.css';

const Header = () => {
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
            <div className="contactInfo">
                <span className="adress"></span>
                <span className="phone"></span>
            </div>


        </div>
      
    </header>
  );
};

export default Header;