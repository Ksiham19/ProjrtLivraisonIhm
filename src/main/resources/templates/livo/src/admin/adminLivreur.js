import React from 'react';
import './adminGestion.css'; // Assurez-vous d'avoir le fichier CSS dans le même répertoire
import { Link } from 'react-router-dom';

function GestionLivreurs() {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Gestion des Livreurs</h1>
        <div className="admin-search-bar">
          <input type="text" className="admin-search-input" placeholder="Rechercher..." />
          <button className="admin-add-button"><Link to="/admin/adminAjoutLivreur">Ajouter Livreur </Link></button>
        </div>
      </div>
      <table className="admin-table">
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
            <td><button className="admin-delete-button"><span>Supprimer</span></button></td>
          </tr>
          {/* Vous pouvez ajouter d'autres lignes pour plus de livreurs */}
        </tbody>
      </table>
    </div>
  );
}

export default GestionLivreurs;
