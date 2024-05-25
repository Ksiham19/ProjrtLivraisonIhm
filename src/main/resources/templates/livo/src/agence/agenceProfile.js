import React, { useState } from 'react';
import './agenceProfile.css'; // Importer votre fichier CSS

function GestionProfil() {
    const [inputsDisabled, setInputsDisabled] = useState(true);

    const handleInputChange = (e) => {
        // Vous pouvez ajouter ici la logique de mise à jour de l'état avec les nouvelles valeurs des champs si nécessaire
    };

    const handleEditClick = (index) => {
        setInputsDisabled(false);
        const inputField = document.getElementById(`input-${index}`);
        inputField.focus();
    };

    return (
        <div className="wrapper">
            <form action="">
                <h1>Gestion de profil</h1>
                <div className="input-box">
                    <div className="input-field">
                        <input type="number" placeholder="Identifiant" disabled />
                        <i className='bx bx-id-card'></i>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input id="input-1" type="text" placeholder="Nom" disabled={inputsDisabled} onChange={handleInputChange} />
                        <i className='bx bxs-user'></i>
                    </div>
                    <button type="button" onClick={() => handleEditClick(1)}><span></span>modifier</button>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input id="input-2" type="text" placeholder="Adresse" disabled={inputsDisabled} onChange={handleInputChange} />
                        <i className='bx bxs-building-house'></i>
                    </div>
                    <button type="button" onClick={() => handleEditClick(2)}><span></span>modifier</button>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input id="input-3" type="email" placeholder="Email" disabled={inputsDisabled} onChange={handleInputChange} />
                        <i className='bx bxs-envelope'></i>
                    </div>
                    <button type="button" onClick={() => handleEditClick(3)}><span></span>modifier</button>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input id="input-4" type="text" placeholder="Telephone" disabled={inputsDisabled} onChange={handleInputChange} />
                        <i className='bx bxs-phone'></i>
                    </div>
                    <button type="button" onClick={() => handleEditClick(4)}><span></span>modifier</button>
                </div>
                <button type="submit" className="btn">Confirmer</button>
            </form>
        </div>
    );
}

export default GestionProfil;
