import React from 'react';
import './livstyle.css'; 
import { Link } from 'react-router-dom';

function EtatduCde() {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Mes commandes</h1>
        <div className="admin-search-bar">
          <input type="text" className="admin-search-input" placeholder="Rechercher..." />
          
        </div>
      </div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Numero</th>
            <th>Nom</th>
            
            <th>ID du client</th>
            
            <th>Commande livré</th>
            <th>En cours de livraison</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>002</td>
            <td>commande2</td>
           
            <td>5</td>
            
            
            <td><button className="fait-button">Fait</button></td>
            <td><button className="encours-button">En cours</button></td>
          </tr>
          {/* Vous pouvez ajouter d'autres lignes pour plus de livreurs */}
        </tbody>
      </table>
    </div>
  );
}

export default EtatduCde;
