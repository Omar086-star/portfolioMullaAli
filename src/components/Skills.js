import "./StylesComponents.scss";
import React from 'react';

// Import des logos pour les skills
import jsLogo from '../Images/phjs.png';
import htmlCssLogo from '../Images/phht.png';
import cssLogo from '../Images/phcss.png';
import reactLogo from '../Images/phre.png';
import nodeJsLogo from '../Images/phnode.png';
import scssLogo from '../Images/phscss.png';

// Import des logos pour les outils
import mongoLogo from '../Images/phmongodb.png';  // MongoDB logo
import sqliteLogo from '../Images/phlighthousse.jpg';  // SQLite logo
import waveLogo from '../Images/exwave.jpg';  // Wave logo
import vsLogo from '../Images/phvs.png';  // Visual Studio logo
import chatGptLogo from '../Images/phchat.png';  // ChatGPT logo
import canvaLogo from '../Images/phcanava.jpg';  // Canva logo
import githubLogo from '../Images/phub.png';  // Canva logo
import gitLogo from '../Images/phgit.png';  // Canva logo

const skillsData = [
  { skill: 'JavaScript', level: 80, logo: jsLogo },
  { skill: 'React', level: 70, logo: reactLogo },
  { skill: 'HTML', level: 95, logo: htmlCssLogo }, 
  { skill: 'CSS', level: 95, logo: cssLogo },
  { skill: 'Node.js', level: 80, logo: nodeJsLogo },
  { skill: 'SCSS', level: 70, logo: scssLogo },
];

const toolsData = [
  { tool: 'MongoDB', logo: mongoLogo },
  { tool: 'SQLite', logo: sqliteLogo },
  { tool: 'Wave', logo: waveLogo },
  { tool: 'Visual Studio', logo: vsLogo },
  { tool: 'ChatGPT', logo: chatGptLogo },
  { tool: 'Canva', logo: canvaLogo },
  { tool: 'GitHub', logo: githubLogo },
  { tool: 'GitHub', logo: gitLogo },

];

const Skills = () => {
  return (
    <div className="skills-tools-section" id="skills">
      <div className="skills-left">
        <h2 className="title_skills">Compétences</h2>
        <div className="skills-list">
          {skillsData.map((skillItem, index) => (
            <div key={index} className="skill-item">
              <img src={skillItem.logo} alt={`${skillItem.skill} logo`} className="skill-logo" />
              <h3>{skillItem.skill}</h3>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skillItem.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tools-right">
        <h2 className="title_skills">Outils</h2>
        <div className="tools-list">
          {toolsData.map((toolItem, index) => (
            <div key={index} className="tool-item">
              <img src={toolItem.logo} alt={`${toolItem.tool} logo`} className="tool-logo" />
              <h3>{toolItem.tool}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
