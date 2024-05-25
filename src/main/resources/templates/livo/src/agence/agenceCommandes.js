import React from 'react';
import './agenceGestion.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function GestionCommandes() {
  return (
    <div className="container">
      <div className="header">
        <h1>Gestion des Commandes</h1>
        <div className="search-bar">
          <input type="text" placeholder="Rechercher..." />
          <button><Link to="/agence/agenceAjoutCommande">Ajouter commande </Link></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Nom</th>
            <th>ID livreur</th>
            <th>ID Client</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Data for clients will be added dynamically here */}
          <tr>
            <td>1</td>
            <td>cosmetics</td>
            <td>12</td>
            <td>14</td>
            <td>
              <button className="delete-button"><span></span>Supprimer</button>
              <button className="modify-button"><Link to="/agenceModifCommande"><span></span>Modifier</Link></button>
            </td>
          </tr>
          {/* You can add more rows for additional clients */}
        </tbody>
      </table>
    </div>
  );
}

export default GestionCommandes;
