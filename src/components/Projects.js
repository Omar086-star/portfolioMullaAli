import React from 'react';
import './StylesComponents.scss';
import Booki from '../Images/booki.png';
import Nina from '../Images/nina 2024-10-04 214819.png';
import Sophi from '../Images/sophi.png';
import Vieux from '../Images/vieux.png';
import Kasa from '../Images/kasa.png';
import Qwenta from '../Images/veille.png';
import { Link } from 'react-router-dom';
import githubIcon from '../Images/phgit.png';
import browserIcon from '../Images/bro.png';

const projectsData = [
  {
    id: 'Booki',
    title: 'Booki',
    imgSrc: Booki,
    gitHubLink: 'https://github.com/Omar086-star/booki',
    liveLink: 'https://omar086-star.github.io/booki/',
    description: 'Ce code est déjà un pepeux t en inspirer pour développer le reste du code, et il faut que tu conserves la même structure de dossiers. Tu devras ensuite m’envoyer ce dossier complet via GitHub. Pense dailiCe code est déjà un pepeux t’en inspirer pour développer le reste du code, et il faut que tu conserves la même structure de dossiers. Tu devras ensuite m’envoyer ce dossier Objectif Créer une page d accueil responsive pour une agence de voyage permettant aux utilisateurs de trouver des hébergements et activités. Technologies  Utilisation de HTML et CSS pour l intégration de l interface utilisateur.Maquettes  Les maquettes pour desktop, tablette et mobile sont fournies via Figma. Collaboration Travail en étroite collaboration avec la CTO (Sarah) et l UI Designer  :Loïc :. Structure du projet Dossier contenant un fichier index.html, un dossier css et un dossier images. Responsive Design  L interface doit être entièrement adaptée à toutes les tailles d écran (mobile, tablette, desktop). Versionnement Utilisation de Git et GitHub pour le suivi et la livraison du projet. Compétences clés  Développement de compétences en intégration de maquettes et design responsive pour devenir un développeur front-end compétent.'
  },
  {
    id: 'SophieBluel',
    title: 'Sophie Bluel',
    imgSrc: Sophi,
    gitHubLink: 'https://github.com/Omar086-star/cr-er-une-paje-dynamique-avec-java-script',
    liveLink: 'https://omar086-star.github.io/cr-er-une-paje-dynamique-avec-java-script/',
    description:  'Objectif : Optimiser les performances et le SEO du site de Nina Carducci, photographe. Analyse : Identifier les problèmes de chargement, optimiser le code et améliorer la vitesse. SEO et Référencement local : Intégrer Schema.org pour le référencement local et ajouter des métadonnées pour les réseaux sociaux. Accessibilité : Corriger les erreurs détectées par Wave pour rendre le site plus accessible. Modifications : Optimiser les images, corriger les bugs de navigation dans la galerie, et améliorer l affichage des filtres. Rapport : Documenter les améliorations avant/après pour les performances, l accessibilité et le SEO. Impact : Améliorer la visibilité, l’accessibilité et l expérience utilisateur pour attirer plus de clients.'

  },
  {
    id: 'NinaCarducci',
    title: 'Nina Carducci',
    imgSrc: Nina,
    gitHubLink: 'https://github.com/Omar086-star/nina-carducci',
    liveLink: 'https://omar086-star.github.io/nina-carducci/',
    description: 'Objectif : Développer un site web dynamique pour une architecte d’intérieur, Sophie, en utilisant JavaScript et en communiquant avec une API. Page de présentation : Créer la page de présentation des travaux de l architecte, en partant du HTML fourni. Page de connexion : Développer une page de connexion pour l’administrateur du site, qui sera utilisée pour gérer les contenus du portfolio. Modale d upload : Créer une modale permettant d uploader de nouveaux médias  photos, vidéos pour enrichir le site  entièrement développée from scratch. Communication avec l API : Gérer la communication entre le front-end et le back-end à travers une API, permettant la persistance des données (nouveaux travaux, médias). Technologies : Utilisation de Figma pour les maquettes, Visual Studio Code pour le développement, et GitHub pour la gestion de version. Maîtrise du DOM : Apprendre à gérer les événements utilisateurs et manipuler le DOM pour rendre le site interactif. Environnement de travail : Collaboration avec une équipe de 50 salariés au sein de l agence ArchiWebos, avec l usage d un Kanban pour le suivi des tâches et la gestion des missions.'

  },
  {
    id: 'Kasa',
    title: 'Kasa',
    imgSrc: Kasa,
    gitHubLink: 'https://github.com/Omar086-star/kasa-p5',
    liveLink: 'https://venerable-lamington-723772.netlify.app',
    description: '  Objectif : Développer le front-end d une application de location d appartements avec React et React Router, en suivant les maquettes responsives de Figma. Technologies : Utiliser Create React App ou Vite, et intégrer les composants React pour une navigation fluide. Données simulées : Travailler avec un fichier JSON en attendant le back-end, pour afficher les 20 dernières annonces. Design : Intégrer les maquettes Figma, y compris les galeries d images et les menus déroulants Collapse. Fonctionnalités : Implémenter le défilement cyclique dans les galeries, et des collapses interactifs ouverts/fermés au clic. Rendu visuel : Respecter les prototypes pour les animations et le style visuel exact des maquettes. Contraintes : Respecter les guidelines Kasa, maintenir une hauteur fixe pour les images recadrées. Compétences : Maîtriser React, React Router, et améliorer l intégration UI/UX pour des applications web modernes.          '

  },
  {
    id: 'VieuxGrimoire',
    title: 'Vieux Grimoire',
    imgSrc: Vieux,
    gitHubLink: 'https://github.com/Omar086-star/mon-vieux',
    liveLink: 'https://github.com/Omar086-star/mon-vieux',
    description: ' Objectif : Développer le back-end d un site de notation de livres pour une chaîne de librairies, avec gestion des livres et des notes attribuées par les utilisateurs. Technologies : Utiliser Express pour le serveur et MongoDB avec Mongoose pour la gestion des données. Implémenter une architecture MVC  /Modèle-Vue-Contrôleur /. Fonctionnalités : Création d une API RESTful pour gérer les opérations CRUD / Créer, Lire, Mettre à jour, Supprimer / sur les livres et les notations, ainsi qu un système d authentification sécurisé. Images : Gestion du téléchargement et de l optimisation des images de couverture des livres. Sécurité : Attention particulière à la sécurisation des données et à la gestion de l authentification des utilisateurs. Bonnes pratiques : Respecter les principes du Green Code pour réduire l empreinte écologique du site. Collaboration : Travailler en équipe avec un développeur front-end  /Kévin / qui se charge de la partie React du projet. Compétences : Maîtrise de Node.js, Express, MongoDB, opérations CRUD et sécurité. Cette expérience renforcera vos compétences en développement back-end pour des applications full-stack modernes.'

  },
  {
    id: 'Qwenta',
    title: 'Qwenta',
    imgSrc: Qwenta,
    gitHubLink: 'https://github.com/Omar086-star/syVeille-qwenta',
    liveLink: 'https://wakelet.com/workspace/czNrBTVj7PpCU9QC0dF9G/collections',
    description: '  Rédaction de spécifications techniques : Traduire les besoins fonctionnels en tâches techniques détaillées. Veille technologique : Rester informé des dernières technologies pertinentes pour le projet. Gestion de projet : Utilisation d outils comme Notion pour créer un tableau Kanban et organiser le travail en équipe. Présentations : Capacité à présenter des solutions techniques et des plans de développement au client. Ces compétences sont essentielles pour évoluer dans des rôles de leadership technique et améliorer votre compréhension des processus de gestion agile.'

  }
];

export default function Projects() {
  return (
    <div className='mes-Projects' id='Projects'>
      {projectsData.map((project) => (
        <div className='box-projects' key={project.id}>
          <div className='photo-project'>
            <img id={project.id} src={project.imgSrc} alt={project.title} />
          </div>
          <div className='links'>
            <Link to={project.gitHubLink}>
              <img src={githubIcon} alt='GitHub' className='icon' />
              <span className='git'> voir le code</span>
            </Link>
            <Link to={project.liveLink}>
              <span className='view'> voir le site</span>
              <img src={browserIcon} alt='Site' className='icon' />
            </Link>
          </div>
          <h2 className='text-description'>{project.description}</h2>
        </div>
      ))}
    </div>
  );
}
