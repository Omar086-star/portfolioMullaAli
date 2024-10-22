
import React, { useState, useEffect } from 'react';
import './StylesComponents.scss';

 


export default function TypingEffect() {
  const [displayedText, setDisplayedText] = useState(''); // État pour le texte affiché
  const [canPlaySound, setCanPlaySound] = useState(false); // État pour autoriser la lecture du son
  const fullText = " Bonjour mes amis ! Bienvenue sur mon nouveau portfolio. Je suis Omar, développeur web. N'hésitez pas à me contacter si vous le souhaitez. À bientôt !";
  const typingSpeed = 200; // Vitesse d'affichage des caractères (ralenti à 200ms par caractère)
  const delayBeforeRestart = 2000; // Attente de 2 secondes avant de recommencer

  useEffect(() => {
    let currentIndex = 0; // Utilisation d'une variable locale pour éviter les bugs
    let typingTimeout; // Pour stocker le timeout de frappe
    const keyPressSound = new Audio('../Images/CMPTKey_Clavier d ordinateur (ID 0229)_LS.wav'); // Charge le fichier audio

    // Fonction de frappe
    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        // Ajoute le prochain caractère au texte affiché
        setDisplayedText((prev) => prev + fullText.charAt(currentIndex));
        
        // Si l'utilisateur a cliqué pour autoriser le son
        if (canPlaySound) {
          keyPressSound.play().catch(error => {
            console.error("Impossible de lire le son :", error);
          });
        }

        currentIndex++;
        // Définit un timeout pour l'appel suivant
        typingTimeout = setTimeout(typeWriter, typingSpeed);
      } else {
        // Une fois que tout le texte est affiché, attendre un peu puis recommencer
        setTimeout(() => {
          setDisplayedText(''); // Réinitialise le texte
          currentIndex = 0; // Réinitialise l'index
          typeWriter(); // Relance l'animation
        }, delayBeforeRestart);
      }
    };

    // Lancer l'animation de frappe
    typeWriter();

    // Nettoyer le timeout lorsqu'on quitte le composant
    return () => {
      clearTimeout(typingTimeout);
    };
  }, [fullText, canPlaySound]); // On inclut 'canPlaySound' comme dépendance

  // Gestion du clic pour activer le son
  const handleUserInteraction = () => {
    setCanPlaySound(true); // Autorise la lecture du son après une interaction utilisateur
  };

  return (
    <div className='TypingEffect' onClick={handleUserInteraction}> {/* Autorise la lecture du son après un clic */}
      <h1>{displayedText}</h1> {/* Le texte affiché est le contenu généré */}
     </div>
  );
}


