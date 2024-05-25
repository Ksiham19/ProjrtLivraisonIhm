import React, { useState } from 'react';
import './acceuilLivreur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCheck, faAddressBook, faArrowRight, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function AccueilLivreur() {
  return (
    <div className="livreur-wrapper">
      <div className="livreur-sidebar">
        <div className="livreur-logo">
          <ul className="livreur-menu">
            <li className="livreur-menu-item">
              <Link to='profilLivreur'>
                <FontAwesomeIcon icon={faUser} />
                Profil
              </Link>
            </li>
            <li className="livreur-menu-item">
              <Link to='EtatCde'>
                <FontAwesomeIcon icon={faCheck} />
                Etat de la commande
              </Link>
            </li>
            <li className="livreur-menu-item">
              <Link to='contact'>
                <FontAwesomeIcon icon={faAddressBook} />
                Contact Client
              </Link>
            </li>
            <li className="livreur-menu-item">
              <Link to='InfoCde'>
                <FontAwesomeIcon icon={faArrowRight} />
                Demandes
              </Link>
            </li>
            <li className="livreur-menu-item livreur-logout">
            <Link to='/'>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Déconnexion
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="livreur-main-content">
        <div className="livreur-header-wrapper">
          <div className="livreur-header-title">
            <h2>Page Livreur</h2>
          </div>
        </div>
        <div className="livreur-bk">
          <h1>Bienvenue dans l'espace Livreur</h1>
          <p>Ici vous pouvez visionner les demandes, les traiter et aussi contacter vos clients</p>
        </div>
      </div>
    </div>
  );
}

export default AccueilLivreur;
