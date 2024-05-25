import React from 'react';
import './acceuilClient.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTimeline, faArrowRight, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function AccueilClient() {
  return (
    <div className="client-wrapper">
      <div className="client-sidebar">
        <div className="client-logo">
          <ul className="client-menu">
            <li className="client-menu-item">
              <Link to='profilClient'>
                <FontAwesomeIcon icon={faUser} />
                Profil
              </Link>
            </li>
            <li className="client-menu-item">
              <Link to='Confirm'>
                <FontAwesomeIcon icon={faArrowRight} />
                Confirmation de réception
              </Link>
            </li>
            <li className="client-menu-item">
              <Link to='SuiviCde'>
                <FontAwesomeIcon icon={faTimeline} />
                Suivi du commande
              </Link>
            </li>
            <li className="client-menu-item client-logout">
            <Link to='/'>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Déconnexion
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="client-main-content">
        <div className="client-header-wrapper">
          <div className="client-header-title">
            <h2>Page Client</h2>
          </div>
        </div>
        <div className="client-bk">
          <h1>Bienvenue dans l'espace Client</h1>
          <p>Ici, vous pouvez suivre vos commandes et confirmer leur réception</p>
        </div>
      </div>
    </div>
  );
}

export default AccueilClient;
