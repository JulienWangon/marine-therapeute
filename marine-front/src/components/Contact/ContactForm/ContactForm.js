import React from 'react';

import Button from '../../common/Button/Button';

import './contactForm.css';

const ContactForm = () => {
  return (
    
    
      <form className="form">
        <h3 className="contactTitle">Contact</h3>
        <div className="input">
          <input type="text" id="lastName" required/>
          <label htmlFor="firstName">Nom</label>
        </div>
        <div className="input">
          <input type="text" id="firstName" required/>
          <label htmlFor="firstName">Prénom</label>
        </div>
        <div className="input">
          <input type="text" id="email" required/>
          <label htmlFor="email">Email</label>
        </div>
        <div className="input">
          <input type="text" id="sujet" required/>
          <label htmlFor="sujet">Sujet</label>
        </div>
        <div className="input messageInput">
          <textarea cols="30" rows="1" id="message" required></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <div className="submitArea">
          <Button text="Envoyer" type="submit" colorStyle="purpleBtn" className="submitContact"/>
        </div>   
      </form>    

  );
};

export default ContactForm;