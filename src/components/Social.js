// SocialMedia.js
import React from 'react';
import './StylesComponents.scss';

// Importation des icônes des réseaux sociaux (assurez-vous que les chemins sont corrects)
import FacebookIcon from '../Images/fb.png';
import InstagramIcon from '../Images/insta.jpg';
import LinkedinIcon from '../Images/ln.png';
import WhatsappIcon from '../Images/whaysapp.jpg';
import YoutubeIcon from '../Images/youtube.png';
import GmailIcon from '../Images/gmail.png';
import Tweterr from '../Images/twetter.png';

export default function SocialMedia() {
  return (
    <div className="Div-SocialMedia">
      <ul className="SocialMedia-Row">
        <li>
          <a href="https://www.facebook.com/omar.mulla.9822" target="_blank" rel="noopener noreferrer">
            <img className='imgSocial' src={FacebookIcon} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/omarmulla22?utm_source=qr&igsh=MWhhMTA4ZHN3bmwzYQ==" target="_blank" rel="noopener noreferrer">
            <img className='imgSocial' src={InstagramIcon} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/omar-mulla-461174206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <img className='imgSocial' src={LinkedinIcon} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://x.com/mullaomar086?t=mTrEJu5deZcpaxD-OdauYw&s=09" target="_blank" rel="noopener noreferrer">
            <img className='imgSocial' src={Tweterr} alt="twetter" />
          </a>
        </li>
        <li>
          <a href=" https://wa.me/qr/C2GQ2GOD35R4O1 " target="_blank" rel="noopener noreferrer">
            <img className='imgSocial' src={WhatsappIcon} alt="WhatsApp" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@OmarAlmulla-t4t" target="_blank" rel="noopener noreferrer">
            <img className='imgSocial' src={YoutubeIcon} alt="YouTube" />
          </a>
        </li>
        <li>
          <a href="webalmulla@gmail.com">
            <img className='imgSocial' src={GmailIcon} alt="Gmail" />
          </a>
        </li>
      </ul>
    </div>
  );
}
