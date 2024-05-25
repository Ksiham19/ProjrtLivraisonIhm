import React from 'react';
import styles from './acceuilAdmin.module.css'; // Importez votre fichier CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importez FontAwesomeIcon depuis @fortawesome/react-fontawesome
import { faTachometerAlt, faUser, faTruck, faBuilding, faArrowRight, faSignOutAlt, faArrowUp, faChartSimple, faLaptopFile } from '@fortawesome/free-solid-svg-icons'; // Importez les icônes FontAwesome
import { Link } from 'react-router-dom';

function AccueilAdmin() {
  return (
    <div className={styles.adminWrapper}>
      <div className={styles.adminSidebar}>
        <div className={styles.adminLogo}>
          <ul className={styles.adminMenu}>
            <li className={`${styles.adminMenuItem} ${styles.active}`}>
              <Link to='acceuilAdmin' >
                <FontAwesomeIcon icon={faTachometerAlt} />
                Statistiques
              </Link>
            </li>
            <li className={styles.adminMenuItem}>
              <Link to='profilAdmin' >
                <FontAwesomeIcon icon={faUser} />
                Profil
              </Link>
            </li>
            <li className={styles.adminMenuItem}>
              <Link to='adminLivreur' >
                <FontAwesomeIcon icon={faTruck} />
                Livreurs
              </Link>
            </li>
            <li className={styles.adminMenuItem}>
              <Link to='adminAgence' >
                <FontAwesomeIcon icon={faBuilding} />
                Agences
              </Link>
            </li>
            <li className={styles.adminMenuItem}>
              <Link to='adminAffectation' >
                <FontAwesomeIcon icon={faArrowRight} />
                Affectation
              </Link>
            </li>
            <li className={`${styles.adminMenuItem} ${styles.adminLogout}`}>
              <Link to='/' >
                <FontAwesomeIcon icon={faSignOutAlt} />
                Déconnexion
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.adminMainContent}>
        <div className={styles.adminHeaderWrapper}>
          <div className={styles.adminHeaderTitle}>
            
            <h2>Page Administrateur</h2>
          </div>
        </div>
        <div className={styles.adminCardContainer}>
          <h3 className={styles.adminMainTitle}>Données</h3>
          <div className={styles.adminDataWrapper}>
            <div className={`${styles.adminData} ${styles.adminLightGreen}`}>
              <div className={styles.adminDataHeader}>
                <div className={styles.adminDataContent}>
                  <h6 className={styles.adminDataTitle}>Nombre commandes</h6>
                  <h6 className={styles.adminDataNumber}>35</h6>
                </div>
                <FontAwesomeIcon icon={faArrowUp} className={styles.adminIcon} />
              </div>
            </div>
            <div className={`${styles.adminData} ${styles.adminLightBlue}`}>
              <div className={styles.adminDataHeader}>
                <div className={styles.adminDataContent}>
                  <h6 className={styles.adminDataTitle}>Nombre Agences</h6>
                  <h6 className={styles.adminDataNumber}>12</h6>
                </div>
                <FontAwesomeIcon icon={faChartSimple} className={`${styles.adminIcon} ${styles.adminDarkBlue}`} />
              </div>
            </div>
            <div className={`${styles.adminData} ${styles.adminLightPurple}`}>
              <div className={styles.adminDataHeader}>
                <div className={styles.adminDataContent}>
                  <h6 className={styles.adminDataTitle}>Nombre Clients</h6>
                  <h6 className={styles.adminDataNumber}>17</h6>
                </div>
                <FontAwesomeIcon icon={faLaptopFile} className={`${styles.adminIcon} ${styles.adminDarkPurple}`} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.adminWelcome}>
          <h1>Bienvenue dans l'espace Admin</h1>
          <p>Ici vous gérez les agences, les Livreurs et les affectez des commandes</p>
        </div>
      </div>
    </div>
  );
}

export default AccueilAdmin;