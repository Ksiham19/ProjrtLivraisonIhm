import React, { useState } from 'react';
import './adminAjout.css'; // Importez votre fichier CSS

function AjouterNouvelAgence() {
    const [formData, setFormData] = useState({
        id: '',
        nom: '',
        email: '',
        adresse: '',
        telephone: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gérez la soumission du formulaire ici
        console.log(formData);
    };

    return (
        <div className="custom-form-wrapper">
            <h1>Ajouter Nouvelle Agence</h1>
            <form onSubmit={handleSubmit} className="custom-form">
                {/* ID */}
                <div className="custom-input-box">
                    <div className="custom-input-field">
                        <input type="text" id="id" placeholder="ID" value={formData.id} onChange={handleChange} />
                        <i className='bx bx-id-card'></i>
                    </div>
                </div>
                {/* Nom */}
                <div className="custom-input-box">
                    <div className="custom-input-field">
                        <input type="text" id="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} />
                        <i className='bx bxs-user'></i>
                    </div>
                </div>
                {/* Email */}
                <div className="custom-input-box">
                    <div className="custom-input-field">
                        <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                        <i className='bx bxs-envelope'></i>
                    </div>
                </div>
                {/* Adresse */}
                <div className="custom-input-box">
                    <div className="custom-input-field">
                        <input type="text" id="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} />
                        <i className='bx bxs-building-house'></i>
                    </div>
                </div>
                {/* Téléphone */}
                <div className="custom-input-box">
                    <div className="custom-input-field">
                        <input type="text" id="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />
                        <i className='bx bxs-phone'></i>
                    </div>
                </div>
                <button type="submit" className="custom-submit-btn">Ajouter</button>
            </form>
        </div>
    );
}

export default AjouterNouvelAgence;
