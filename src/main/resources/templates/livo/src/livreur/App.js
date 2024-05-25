// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import AccueilLivreur from './acceuilLivreur'; 
import ProfilLivreur from './profilLivreur'; 
import EtatduCde from './EtatCde';
import ContactClient from './contact';
import Contacterlecli from './contacterCli';
import AffichageCde from './InfoCde';

function Livreurpartie(){
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<AccueilLivreur />} />
        <Route path="/profilLivreur" element={<ProfilLivreur />} />
        <Route path="/EtatCde" element={<EtatduCde />} />
        <Route path="/contact" element={<ContactClient />} />
        <Route path="/contacterCli" element={<Contacterlecli />} />
        <Route path="/InfoCde" element={<AffichageCde />} />
      </Routes>
    </div>
);
}
export default Livreurpartie;
