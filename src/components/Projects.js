import React, { useEffect, useState } from 'react';
import './StylesComponents.scss';
import Booki from '../Images/booki.png';
import Nina from '../Images/nina 2024-10-04 214819.png';
import Sophi from '../Images/sophi.png';
import Vieux from '../Images/vieux.png';
import Kasa from '../Images/kasa.png';
import Qwenta from '../Images/veille.png';
import Data from '../Data/Data.json';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// Mapping des images importées avec leurs ids
const images = {
  'Booki': Booki,
  'Sophi': Sophi,
  'Nina': Nina,
  'Vieux': Vieux,
  'Kasa': Kasa,
  'Qwenta': Qwenta,
};

function DataDisplay() {
  const [Projets, setProjets] = useState([]);

  useEffect(() => {
    DPlay(); // Charger les données lors du montage du composant
  }, []);

  function DPlay() {
    const list = Data.projectsData; // Charger les données directement depuis Data.json
    setProjets(list); // Mettre à jour l'état avec la liste des projets
  }

  return (
    <div className='mes-Projects' id='Projects'>
      {Projets.map((Projet) => (
        <div className='box-projects' key={Projet.id}>
          <div className='photo-project'>
            <img
              id={Projet.id}
              src={images[Projet.imgSrc]} // On récupère l'image à partir du mapping
              alt={Projet.title}
            />
          </div>
          <div className='links'>
            <Link to={Projet.gitHubLink} target="_blank">
              <FontAwesomeIcon icon={faGithub} className='icon' />
              <span className='git'>voir le code</span>
            </Link>
            <Link to={Projet.liveLink} target="_blank">
              <span className='view'>voir le site</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} className='icon' />
            </Link>
          </div>
          <h2 className='text-description'>{Projet.description}</h2>
        </div>
      ))}
    </div>
  );
}

export default DataDisplay;
