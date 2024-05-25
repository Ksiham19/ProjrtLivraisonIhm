import React from 'react';
import './adminAffectation.css'; // Importez votre fichier CSS

function AffectationLivreur() {
  return (
    <div className="affectation-container">
      <div className="row">
        <div className="col-12 text-center mt-4">
          <h2 className='affectation-title'>Affecter une commande à un livreur</h2>
        </div>
      </div>
      <form>
        <div className="container">
          <div className="row">
            <div className="col-md-6 table-container">
              <h2 className='livreur-info'>Informations sur les livreurs</h2>
              <table className="livreur-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Adresse</th>
                    <th>Sélectionner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Smith</td>
                    <td>John</td>
                    <td>john@gmail.com</td>
                    <td>123456</td>
                    <td>123 Street, City</td>
                    <td>
                      <input type="radio" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6 table-container">
              <h2 className='commande-info'>Informations sur les Commandes</h2>
              <table className="commande-table">
                <thead>
                  <tr>
                    <th>Numero</th>
                    <th>Nom</th>
                    <th>Sélectionner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>001</td>
                    <td>commande1</td>
                    <td>
                      <input type="radio" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <button className="affectation-button" type="submit">OK</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AffectationLivreur;
