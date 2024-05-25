import React from 'react';
import './adminGestion.css'; // Assurez-vous d'avoir le fichier CSS dans le même répertoire
import { Link } from 'react-router-dom';

function GestionAgences() {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Gestion des Agences</h1>
        <div className="admin-search-bar">
          <input type="text" className="admin-search-input" placeholder="Rechercher..." />
          <button className="admin-add-button"><Link to="/admin/adminAjoutAgence">Ajouter Agence </Link></button>
        </div>
      </div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Adresse</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Digital</td>
            <td>agency@example.com</td>
            <td>1234567890</td>
            <td>123 Street, City</td>
            <td><button className="admin-delete-button"><span>Supprimer</span></button></td>
          </tr>
          {/* Vous pouvez ajouter d'autres lignes pour plus des agences */}
        </tbody>
      </table>
    </div>
  );
}

export default GestionAgences;
