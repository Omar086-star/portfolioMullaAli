import React from 'react';
import './Home.scss';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Plan() {
  return (
    <div>
      <NavBar/>
      <div className='MainPlan'>
        <h1 className='Tit'>Expérience Obtenu</h1>
<div className='PlanEXP'>
<div className='EXP'>
<h1 className='TitleEXP'>Intégration web avec HTML - CSS </h1>
<span className='spanTogl'> Intégrer du contenu conformément à une maquette avec HTML et CSS.</span>
<span className='spanTogl'> Implémenter une interface responsive avec HTML et CSS.</span>
<span className='spanTogl'> Héberger un site par GitHub</span>
</div>

<div className='EXP'>
<h1 className='TitleEXP'>Développement web avec JavaScript</h1>
<span className='spanTogl'> Récupérer les données utilisateurs via des formulaires.</span>
<span className='spanTogl'> Utiliser l'API pour rendre le site dynamique</span>
<span className='spanTogl'> Manipuler les éléments du DOM avec JavaScript.</span>
<span className='spanTogl'> Gérer les événements utilisateurs avec JavaScript.</span>
</div>
<div className='EXP'>
<h1 className='TitleEXP'>Optimisation et debug </h1>
<span className='spanTogl'> Optimiser les performances d'un site web.</span>
<span className='spanTogl'> Déboguer un site web grâce aux Chrome DevTools.</span>
<span className='spanTogl'> Rédiger un cahier de recette pour tester un site.</span>
</div>
<div className='EXP'>
<h1 className='TitleEXP'>Lancer une application par React </h1>
<span className='spanTogl'> Configurer la navigation entre les pages d'une application avec React Router.</span>
<span className='spanTogl'> Initialiser une application avec Create React App.</span>
<span className='spanTogl'> Développer des éléments de l'interface d'un site web grâce à des composants React.</span>
<span className='spanTogl'> Héberger l'application par Nitfly</span>
</div>
<div className='EXP'>
<h1 className='TitleEXP'>Développement back-end </h1>
<span className='spanTogl'> Implémenter un modèle logique de données conformément à la réglementation.</span>
<span className='spanTogl'> Mettre en œuvre des opérations CRUD de manière sécurisée.</span>
<span className='spanTogl'> Stocker des données de manière sécurisée.</span>

</div>

<div className='EXP'>
<h1 className='TitleEXP'>Gestion de projet et outils de développeurs</h1>
<span className='spanTogl'> Suivre le déroulement du projet grâce à un outil de gestion de projet.</span>
<span className='spanTogl'> Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels.</span>
<span className='spanTogl'> Découper une fonctionnalité en tâches pour préparer le développement.</span>
<span className='spanTogl'> Présenter la solution technique.</span>
<span className='spanTogl'> Mettre en place une méthode de veille technologique.</span>
<span className='spanTogl'> Versionner son projet avec Git et Github.</span>
<span className='spanTogl'> Installer un environnement de développement front-end.</span>

</div>

</div>


<h1 className='Tit'>Projets à manipuler</h1>

<div className='RodeMap'>
<div className='ROD'>
<h1 className='TitleROD'>Blog personnel </h1>
<span className='spanToglROD'> Frontend : Utilise React pour construire une interface simple où les utilisateurs peuvent lire, ajouter, modifier et supprimer des articles de blog.
</span>
<span className='spanToglROD'> Backend : Crée une API REST avec Node.js et Express pour gérer les articles de blog, y compris l’authentification des utilisateurs pour ajouter ou modifier des articles.</span>
<span className='spanToglROD'> Base de données : MongoDB pour stocker les articles et les utilisateurs.
</span>
<span className='spanToglROD'> Objectifs d'apprentissage : Comprendre les opérations CRUD (Create, Read, Update, Delete). Gérer les routes de base dans un projet full-stack. Apprendre l'authentification de base (JWT, sessions). </span>
</div>

<div className='ROD'>
<h1 className='TitleROD'>Gestionnaire de tâches</h1>
<span className='spanToglROD'> Frontend : Crée une application où l’utilisateur peut ajouter, organiser et marquer des tâches comme terminées.</span>
<span className='spanToglROD'> Backend : Utilise Express pour une API REST qui permet de gérer les tâches.
</span>
<span className='spanToglROD'> Fonctionnalités supplémentaires : Implémente la gestion d’état avec Redux pour manipuler l'état des tâches dans l'application.</span>
<span className='spanToglROD'> Objectifs d'apprentissage : Introduction à Redux pour la gestion d’état globale. Implémentation de fonctionnalités complexes comme les filtres de tâches (terminées, non terminées). Introduction à la validation côté backend. </span>
</div>

<div className='ROD'>

<h1 className='TitleROD'>Application de chat en temps réel </h1>
<span className='spanToglROD'> Frontend : Une interface de chat en temps réel où les utilisateurs peuvent s'envoyer des messages dans différentes salles de chat.</span>
<span className='spanToglROD'> Backend : Utilise Socket.io pour permettre la communication en temps réel. Implémente un système d'authentification simple. </span>
<span className='spanToglROD'> Base de données : MongoDB pour stocker les messages et les utilisateurs.
</span>
<span className='spanToglROD'> Objectifs d'apprentissage : Apprendre les websockets pour la communication en temps réel. Gérer la gestion des utilisateurs et des messages en temps réel. Optimisation des performances pour des applications à faible latence.</span>
</div>
<div className='ROD'>
<h1 className='TitleROD'>E-commerce basique </h1>
<span className='spanToglROD'> Frontend : Construis une interface e-commerce simple où les utilisateurs peuvent parcourir des produits, les ajouter au panier, et passer une commande.</span>
<span className='spanToglROD'> Backend : Crée une API pour gérer les produits, les utilisateurs, les paniers et les commandes.</span>
<span className='spanToglROD'> Intégration de paiements : Intègre l'API Stripe pour les paiements en ligne. </span>
<span className='spanToglROD'>Objectifs d'apprentissage : Gestion de paniers dynamiques et suivi des commandes. Intégration d'une API externe (Stripe) pour les paiements. Sécurisation des transactions et des données utilisateurs. </span>
</div>


<div className='ROD'>

<h1 className='TitleROD'>Application de gestion des événements </h1>
<span className='spanToglROD'> Frontend : Utilise Next.js pour rendre les pages côté serveur (Server-Side Rendering) afin d’améliorer le SEO. Les utilisateurs peuvent créer, consulter et s’inscrire à des événements.</span>
<span className='spanToglROD'> Backend : Express pour une API REST. Utilisation de PostgreSQL pour la gestion des événements et des utilisateurs.</span>
<span className='spanToglROD'> Fonctionnalités supplémentaires : Mise en place d’un système de notification par email (avec un service comme Nodemailer).</span>
<span className='spanToglROD'> Objectifs d'apprentissage : Comprendre les bases du SSR (Server-Side Rendering) avec Next.js. Gestion de bases de données relationnelles avec PostgreSQL. Travailler avec des fonctionnalités complexes comme les notifications par email.</span>

</div>

<div className='ROD'>

<h1 className='TitleROD'>Réseau social minimaliste </h1>
<span className='spanToglROD'> Frontend : Crée un réseau social basique où les utilisateurs peuvent créer un profil, publier des posts, aimer et commenter les posts des autres.
</span>
<span className='spanToglROD'> Backend : Utilise GraphQL avec Apollo Server pour une API plus flexible. Gère l'authentification et les autorisations.</span>
<span className='spanToglROD'> Fonctionnalités supplémentaires : Implémente des fonctionnalités comme les suggestions d'amis, le fil d'actualité personnalisé et les notifications en temps réel.</span>
<span className='spanToglROD'> Objectifs d'apprentissage : Utilisation de GraphQL pour des requêtes plus efficaces et flexibles. Gestion des relations complexes entre les utilisateurs (amis, abonnements). Sécurisation avancée avec l'authentification et autorisations granulaires.</span>
</div>

</div>

<div className='NP'> <h3 className='NPTitle'>Progression des technologies : </h3>
<p>React & Redux : Les deux premiers projets t’aideront à consolider tes compétences en frontend.
<p>Node.js & Express : La plupart des projets te feront pratiquer la création d’API REST.
</p>
<p>Bases de données (MongoDB, PostgreSQL) : Tu travailleras avec des bases de données non relationnelles et relationnelles.
</p>
<p>Sockets & Websockets : L’application de chat introduira la gestion en temps réel.
</p>
<p>GraphQL & SSR : Les derniers projets te feront explorer des outils avancés comme GraphQL et Next.js pour le rendu côté serveur.</p>
</p>
</div>

</div>
      <Footer/>
    </div>
  )
}
