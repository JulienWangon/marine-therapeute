import React, { useState } from 'react';
import './footer.css';
import Button from '../Button/Button';
import ContactForm from '../../Contact/ContactForm/ContactForm';
import Modal from '../../Modal/Modal';


const Footer = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <footer>
        <div className="contactTopFooter">
          <div className="adressFooter topfooterItem">
            <i className="fa-solid fa-location-dot"></i>
            <span className="adressSpan">28, Rue des Dépravés 57000 Metz</span>
          </div>
          <div className="phoneFooter topfooterItem">
            <i className="fa-solid fa-phone"></i>
            <a className="phoneNumFooter" href="0725467895">0725467895</a>
          </div>
          <div className="contactBtnFooter topfooterItem">
            <Button text="Contact" className="purpleBtn contactBtnFooter" onClick={toggleModal}/>
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
              <ContactForm />
            </Modal>
          </div>
        </div>
        <div className="bodyFooter">
          <div className="serviceFooter">
            <h3 className="serviceFooterTitle">Services</h3>
            <ul className="serviceListFooter">
                <li className="serviceListFooterItem">
                <i className="fa-solid fa-chevron-right"></i><a className="serviceLien" href="/therapie-systemique">Thérapie-systèmique</a>
                </li>
                <li className="serviceListFooterItem">
                <i className="fa-solid fa-chevron-right"></i><a className="serviceLien" href="/constellations-familiales">Constellations familiales</a>
                </li>
                <li className="serviceListFooterItem">
                <i className="fa-solid fa-chevron-right"></i><a className="serviceLien" href="/therapie-psychocorporelle">Thérapie psychocorporelle</a>
                </li>
            </ul>
          </div>
          <div className="contactFooter">
            <h3 className="contactFooterTitle">Marine Ottaviani</h3>
            <ul className="contactListFooter">
              <li className="contactFooterItem"><i className="fa-solid fa-chevron-right"></i><a className="parcoursFooter" href="/mon-parcours">Mon parcours</a></li>
              <li className="contactFooterItem"><i className="fa-solid fa-chevron-right"></i><a className="parcoursFooter" href="https://www.psychologue.net/cabinets/marine-ottaviani">Psychologue.net</a></li>
              <li className="contactFooterItem"><i className="fa-solid fa-chevron-right"></i><a className="parcoursFooter" href="https://www.neovieonline.com/marine-ottaviani-praticienne-en-constellations-familiales-f1345483.html">Néovie</a></li>
            </ul>
          </div>
        </div>
        <div className="socialFooter">
        <a href="https://www.instagram.com/marine.ottaviani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="socialContainer containerOne socialFooterMedia" target="_blank" rel="noopener noreferrer">
        <svg className="socialSvg instagramSvg socialSvgFooter" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
      </a>
      
      <a href="https://www.facebook.com/explorationdescorps" className="socialContainer containerTwo socialFooterMedia" target="_blank" rel="noopener noreferrer">
      <svg className="socialSvg twitterSvg socialSvgFooter" fill="#ffffff" width="800px" height="30px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" stroke="#ffffff">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z" fillRule="evenodd"/> </g>

</svg>
      </a>
        
      <a href="https://www.linkedin.com/in/marine-ottaviani-b6a1b1249/" className="socialContainer containerThree socialFooterMedia" target="_blank" rel="noopener noreferrer">
        <svg className="socialSvg linkdinSvg socialSvgFooter" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
      </a>
        </div>
   
        <div className="bottomFooter">
          <span className="mentionsLegales"><a className="legale" href="#">Mentions légales</a></span>
          <span className="cgv"><a className="legale" href="#">Conditon générales de vente</a></span>
          <span className="cookie"><a className="legale" href="#">Données personnelles et cookies</a></span>
        </div>
        <div className="copyRight">
          <span className="copyrightText">Copyright @2024 Julio Tous droits réservés</span>
        </div>

      
    </footer>
  );
};

export default Footer;