import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false); // État pour suivre si le bouton a été cliqué

    const links = [
        { text: "Accueil", url: "/accueil" },
        { text: "Mon parcours", url: "/mon-parcours" },
        { text: "Thérapie Systèmique", url: "/therapie-systemique" },
        { text:"Constellations Familiales", url:"/constellations-familiales"},
        { text: "Psychocorporelle", url: "/psychocorporelle" },
    ];

    const handleNavigate = (url) => {
        navigate(url);
    };

    const toggleColor = () => {
        setIsClicked(!isClicked); // Basculer l'état du clic
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button 
                    className="navbar-toggler ma-toggler-white" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={toggleColor} // Gérer le clic sur le bouton
                    style={{ color: isClicked ? '#5A1D3E' : '' }} // Appliquer la couleur conditionnellement
                >
                    <i className="fa-solid fa-bars" style={{ color: isClicked ? '#5A1D3E' : '' }}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav navMenu">
                        {links.map((link, index) => (
                            <li className="navItem" key={index}>
                                <a 
                                    href={link.url} 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigate(link.url);
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
