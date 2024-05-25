import React from 'react';
import './agenceGestion.css'; // Assurez-vous d'avoir le fichier CSS dans le même répertoire
import { Link } from 'react-router-dom';
function GestionClients() {
  return (
    <div className="container">
      <div className="header">
        <h1>Gestion des clients</h1>
        <div className="search-bar">
          <input type="text" placeholder="Rechercher..." />
          <button><Link to="/agence/agenceAjoutClient">Ajouter client </Link></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Adresse</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Smith</td>
            <td>John</td>
            <td>john@example.com</td>
            <td>1234567890</td>
            <td>123 Street, City</td>
            <td><button><span></span>Supprimer</button></td>
          </tr>
          {/* Vous pouvez ajouter d'autres lignes pour plus de clients */}
        </tbody>
      </table>
    </div>
  );
}

export default GestionClients;
