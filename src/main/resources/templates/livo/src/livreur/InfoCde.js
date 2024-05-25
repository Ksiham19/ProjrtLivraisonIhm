import React from 'react';
import './InfoCde.css'; 

function AffichageCde() {
  return (
    <div className="affectation-container">
      <div className="row">
        <div className="col-12 text-center mt-4">
          <h2 className='affectation-title'>Informations sur les commandes</h2>
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
                    <th>ID-client</th>
                  </tr> 
                </thead>
                <tbody>
                  <tr>
                    <td>002</td>
                    <td>commande2</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>003</td>
                    <td>commande3</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>004</td>
                    <td>commande4</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>005</td>
                    <td>commande5</td>
                    <td>8</td>
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

export default AffichageCde;
