import React from 'react';
import './SuiviCde.css'; 

function Suivi() {
  return (
    <div className="affectation-container">
      <div className="row">
        <div className="col-12 text-center mt-4">
          <h2 className='affectation-title'>Informations sur mes commandes</h2>
          <br></br>
        </div>
      </div>
      <form>
        <div className="container">
          <div className="row">
            <div className="col-md-6 table-container">
              <table className="livreur-table">
                <thead>
                  <tr>
                    <th>Numero</th>
                    <th>Nom</th>
                    <th>Etat</th>
                  </tr> 
                </thead>
                <tbody>
                  <tr>
                    <td>002</td>
                    <td>commande2</td>
                    <td>fait</td>
                  </tr>
                  <tr>
                    <td>003</td>
                    <td>commande3</td>
                    <td>en cours</td>
                  </tr>
                  <tr>
                    <td>004</td>
                    <td>commande4</td>
                    <td>en cours</td>
                  </tr>
                  <tr>
                    <td>005</td>
                    <td>commande5</td>
                    <td>fait</td>
                  </tr>
                </tbody>
              </table>
            </div>
           
          </div>
         
        </div>
      </form>
    </div>
  );
}

export default Suivi;
