import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importer les composants Routes et Route
import './App.css';
import Home from './pages/Home';
import Plan from './pages/Plan';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        
        {/* Route pour la page Plan (Roadmap) */}
        <Route path="/roadmap" element={<Plan />} />
      </Routes>
    </div>
  );
}

export default App;
