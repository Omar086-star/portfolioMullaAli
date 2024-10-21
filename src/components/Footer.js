// Footer.js
import React from 'react';
import './StylesComponents.scss'; // Assurez-vous d'avoir un fichier CSS/SCSS pour le style
import Logo from '../Images/modified_logo (1).webp'; // Mettez le bon chemin vers votre logo

const Footer = () => {
    return (
        <footer className="footer">
            <img src={Logo} alt="Logo" className="footer-logo" />
            <p className="footer-text">Tous droits réservés © {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;
