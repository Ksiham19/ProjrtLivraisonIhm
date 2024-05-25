import React from 'react';
import './livstyle.css'; 
import { Link } from 'react-router-dom';

function ContactClient() {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Contacter vos client</h1>
        <div className="admin-search-bar">
          <input type="text" className="admin-search-input" placeholder="Rechercher..." />
          
        </div>
      </div>
      <table className="client-table">
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
            <td>Benwadih</td>
            <td>Afrae</td>
            <td>afrae@example.com</td>
            <td>1234567890</td>
            <td>A Street, City</td>
            <button className="contact-button"><Link to="/livreur/contacterCli">Contacter </Link></button>
          </tr>
          {/* Vous pouvez ajouter d'autres lignes pour plus des agences */}
        </tbody>
      </table>
    </div>
  );
}

export default ContactClient;
