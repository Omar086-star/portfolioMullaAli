import React, { useState } from 'react';
import './StylesComponents.scss';
import { Link } from 'react-router-dom';
import Logo from '../Images/modified_logo (1).webp'; 

export default function NavBar() {
  // Définir un état pour gérer la visibilité de la liste des projets
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Fonction pour montrer la liste
  const showDropdown = () => setDropdownVisible(true);

  // Fonction pour cacher la liste
  const hideDropdown = () => setDropdownVisible(false);

  return (
    <div className="mon-Navbar">
      <nav>
        <div className="Div-Logo">
          <Link to="/Home">
            <img className='Logo' src={Logo} alt="Logo" />  
          </Link>
        </div>
        <div className="Div-Text">
          <ul>
            {/* Gestion des événements pour le lien Projects */}
            <li 
              className="dropdown" 
              onMouseEnter={showDropdown} 
              onMouseLeave={hideDropdown}
            >
              <a id='listePourAfficher' href="#Projects">Projets</a>

              {/* Afficher la liste des projets en fonction de l'état */}
              {isDropdownVisible && (
                <ul id='liste_affichage' className="dropdown-content">
                  <li className='mon_liste'>
                    <a href='#Booki'>Booki <span className="description">Agence de voyage par HTML/CSS</span> </a>
                  </li>
                  <li className='mon_liste'>
                  <a href='#SophieBluel'>Sophie Bluel <span className="description">ACréer une page dynamique avec l'API </span> </a>

                    
                  </li>
                  <li className='mon_liste'>
                  <a href='#NinaCarducci'>Nina Carducci  <span className="description">Débugger ce site de photographie avec Lighthouse & Wave</span>
                  </a>

              
                  </li>
                  <li className='mon_liste'>

                  <a href='#Kasa'>Kasa  <span className="description">Application de location de mobilier</span>
                  </a>
                   
                  </li>
                  <li className='mon_liste'>

                  <a href='#VieuxGrimoire'>Mon Vieux Grimoire  <span className="description">Projet back-end pour une bibliothèque</span>
                  </a>
               
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#skills">Compétences</a>
            </li>
            <li>
              <a href="#Contact">Contacter</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
