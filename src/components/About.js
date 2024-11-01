import React from 'react';
import Personnalite from '../Images/he-removebg-preview.png';
import { Link } from 'react-router-dom';
import TypingEffect from './typingEffect';
import './StylesComponents.scss';
import MyPDF from '../Images/New CV.pdf';
export default function About() {
  return (
    <div className='About-me'>
      <div className='partie-text'>
        <TypingEffect />
        <p className='SupTitle-About'>
          Vous pouvez consulter mon CV et explorer mes projets ci-dessous.
        </p>
        
        {/* Download CV Section */}
        <div className="cv-download-section">
          
          <h3>Télécharger mon CV</h3>
          <a href={MyPDF} type="application/pdf"   className="cv-download-button" download  >
            <button>Télécharger  CV</button>
          </a>


        </div>
       
      </div>
      
      <div className='partie-image'>
        <Link to="/Home">
          <img className='Personnalite' src={Personnalite} alt="Portrait of the portfolio owner" />
        </Link>
      </div>
    </div>
  );
}
