import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importation de useNavigate

const Navbar = () => {
    const navigate = useNavigate(); // Initialisation de useNavigate

    const links = [
        {text: "Accueil", url: "/accueil"},
        {text: "Mon parcours", url: "/mon-parcours"},
        {text: "Thérapie Systèmique", url: "/therapie-systemique"},
        {text: "Psychocorporelle", url: "/psychocorporelle"},
    ];

    // Fonction pour gérer la navigation
    const handleNavigate = (url) => {
        navigate(url); // Utilisation correcte de navigate avec un seul argument
    };

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
          <button className="navbar-toggler ma-toggler-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

              <ul className="navbar-nav navMenu">
              {links.map((link, index) => (
                  <li className="navItem" key={index}>
                      <a 
                          href={link.url} 
                          onClick={(e) => {
                              e.preventDefault(); // Empêche le comportement par défaut du lien
                              handleNavigate(link.url); // Correction: utilisez uniquement l'URL
                          }} 
                          className="navLink"
                      >
                          {link.text}
                      </a>
                  </li>
              ))}
              </ul>
          </div>
      </div>        
  </nav>

    );
};

export default Navbar;
