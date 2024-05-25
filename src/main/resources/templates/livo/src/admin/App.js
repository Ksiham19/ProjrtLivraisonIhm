// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccueilAdmin from './acceuilAdmin'; // Assurez-vous que le chemin vers votre composant est correct
import ProfilAdmin from './profilAdmin'; // Assurez-vous que le chemin vers votre composant est correct
import GestionLivreurs from './adminLivreur';
import AjouterNouveauLivreur from './adminAjoutLivreur';
import GestionAgences from './adminAgence';
import AjouterNouvelAgence from './adminAjoutAgence';
import AffectationLivreur from './adminAffectation';

function AdminApp() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<AccueilAdmin />} />
        <Route path="/profilAdmin" element={<ProfilAdmin />} />
        <Route path="/adminLivreur" element={<GestionLivreurs />} />
        <Route path="/adminAjoutLivreur" element={<AjouterNouveauLivreur />} />
        <Route path="/adminAgence" element={<GestionAgences />} />
        <Route path="/adminAjoutAgence" element={<AjouterNouvelAgence />} />
        <Route path="/adminAffectation" element={<AffectationLivreur />} />
      </Routes>
    </div>
  );
}

export default AdminApp;
