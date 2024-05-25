import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgenceAcceuil from './agenceAcceuil';
import GestionClients from './agenceClients';
import GestionCommandes from './agenceCommandes';
import AffectationCommande from './agenceAffectation';
import AjouterNouveauClient from './agenceAjoutClient';
import AjouterNouvelleCommande from './agenceAjoutCommande.js';
import ModifierCommande from './agenceModifCommande.js';
import GestionProfil from './agenceProfile.js';

function AgenceApp(){
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AgenceAcceuil />} />
        <Route path="/agenceClients" element={<GestionClients />} />
        <Route path="/agenceCommandes" element={<GestionCommandes />} />
        <Route path="/agenceAffectation" element={<AffectationCommande />} />
        <Route path="/agenceAjoutClient" element={<AjouterNouveauClient />} />
        <Route path="/agenceAjoutCommande" element={<AjouterNouvelleCommande />} /> {/* Importez AjouterNouvelleCommande ici */}
        <Route path="/agenceModifCommande" element={<ModifierCommande />}/>
        <Route path="/agenceProfile" element={<GestionProfil />}/>
      </Routes>
    </div>
);
}
export default AgenceApp;