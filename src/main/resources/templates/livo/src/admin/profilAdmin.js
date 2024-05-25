import React, { useState } from 'react';
import './AdminProfil.css'; // Assurez-vous que le chemin d'accès est correct

function ProfilAdmin() {
    const [inputsDisabled, setInputsDisabled] = useState(true);

    const handleInputChange = (event) => {
        // Logique de gestion des changements dans les champs d'entrée
    };

    const handleEditClick = () => {
        setInputsDisabled(false);
    };

    return (
        <div className="wrapper profil-admin"> {/* Ajoutez la classe spécifique ici */}
            <form action="">
                <h1 className='hh'>Gestion de profil</h1>
                <div className="input-box">
                    <div className="input-field">
                        <input type="number" placeholder="Identifiant" disabled={inputsDisabled} onChange={handleInputChange} />
                        <i className='bx bx-id-card'></i>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="Nom" disabled={inputsDisabled} onChange={handleInputChange} />
                        <i className='bx bxs-user'></i>
                    </div>
                    <button type="button" onClick={handleEditClick}><span></span>modifier</button>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="Prenom" disabled={inputsDisabled} onChange={handleInputChange} />
                        <i className='bx bxs-user'></i>
                    </div>
                    <button type="button" onClick={handleEditClick}><span></span>modifier</button>
                </div>
                <button type="submit" className="btn">Confirmer</button>
            </form>
        </div>
    );
}

export default ProfilAdmin;
