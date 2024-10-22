import React from 'react';
import Personnalite from '../Images/he-removebg-preview.png';
import { Link } from 'react-router-dom';
import TypingEffect from './typingEffect';
import './StylesComponents.scss';

export default function About() {
  return (
    <div className='About-me'>
      <div className='partie-text'>
      <TypingEffect />
              <p className='SupTitle-About'> Vous pouvez consulter mon CV et explorer mes projets ci-dessous.</p>
      </div>
      <div className='partie-image'>
        <Link to="/Home">
          <img className='Personnalite' src={Personnalite} alt="Portrait of the portfolio owner" /> 
        </Link>
      </div>
    </div>
  );
}
 