import React, {useState} from 'react';

import Button from '../../common/Button/Button';
import useSendContactFormData from '../hooks/useSendContactFormData';

import './contactForm.css';

const ContactForm = () => {
  const { handleSubmit, isSubmitting, successMessage, errorMessage } = useSendContactFormData();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    content: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); 
    await handleSubmit(formData); 
  };

  return (
    
    
      <form className="form" onSubmit={onSubmit}>
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
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <div className="submitArea">
          <Button text="Envoyer" type="submit" colorStyle="purpleBtn" className="submitContact" disabled={isSubmitting}/>
        </div>   
      </form>    

  );
};

export default ContactForm;