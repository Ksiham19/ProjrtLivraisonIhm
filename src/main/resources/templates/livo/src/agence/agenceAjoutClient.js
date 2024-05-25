import React, { useState } from 'react';
import './agenceAjout.css'; // Import your CSS file

function AjouterNouveauClient() {
    const [formData, setFormData] = useState({
        id: '',
        prenom: '',
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
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="wrapper">
            <h1>Ajouter Nouveau Client</h1>
            <form onSubmit={handleSubmit}>
                {/* ID */}
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" id="id" placeholder="ID" value={formData.id} onChange={handleChange} />
                        <i className='bx bx-id-card'></i>
                    </div>
                </div>
                {/* Prénom */}
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" id="prenom" placeholder="Prenom" value={formData.prenom} onChange={handleChange} />
                        <i className='bx bxs-user'></i>
                    </div>
                </div>
                {/* Nom */}
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" id="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} />
                        <i className='bx bxs-user'></i>
                    </div>
                </div>
                {/* Email */}
                <div className="input-box">
                    <div className="input-field">
                        <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                        <i className='bx bxs-envelope'></i>
                    </div>
                </div>
                {/* Adresse */}
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" id="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} />
                        <i className='bx bxs-building-house'></i>
                    </div>
                </div>
                {/* Téléphone */}
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" id="telephone" placeholder="Telephone" value={formData.telephone} onChange={handleChange} />
                        <i className='bx bxs-phone'></i>
                    </div>
                </div>
                <button type="submit" className="btn">Ajouter</button>
            </form>
        </div>
    );
}

export default AjouterNouveauClient;
