import React from 'react';
import './livstyle.css'; 
import { Link } from 'react-router-dom';

function ConfirmCde() {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Confirmation de réception</h1>
      </div>
      <table className="client-table">
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Nom</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>002</td>
            <td>commande2</td>
            <button className="confirm-button"><Link to="/signature">confirmer </Link></button>
          </tr>
          {/* Vous pouvez ajouter d'autres lignes pour plus des agences */}
        </tbody>
      </table>
    </div>
  );
}

export default ConfirmCde;
