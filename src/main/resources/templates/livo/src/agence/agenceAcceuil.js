import React from 'react';
import { Link } from 'react-router-dom';
import './agenceAcceuil.css';
import GestionClients from './agenceClients';
import GestionCommandes from './agenceCommandes';
import AffectationCommande from './agenceAffectation';

function AgenceAcceuil() {
  return (
    <div className="agence-banner">
      <div className="agence-navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><Link to='/agence/agenceClients' onClick={GestionClients}>Clients</Link></li>
          <li className="navbar-item"><Link to='/agence/agenceCommandes' onClick={GestionCommandes}>Commandes</Link></li>
          <li className="navbar-item"><Link to='/agence/agenceAffectation' onClick={AffectationCommande}>Affectation</Link></li>
        </ul>
      </div>
      <div className="agence-content">
        <h1 className="content-title">Bienvenue dans l'espace Agence</h1>
        <p className="content-description">gérer vos commandes et vos clients</p>
        <div className="content-buttons">
          <button className="btn" type="button"><Link to='/agence/agenceProfile'><span></span>Voir profil</Link></button>
          <button className="btn" type="button"><Link to='/' ><span></span>Déconnecter</Link></button>
        </div>
      </div>
    </div>
  );
}

export default AgenceAcceuil;
