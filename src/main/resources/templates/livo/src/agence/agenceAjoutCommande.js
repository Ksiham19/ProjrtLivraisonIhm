import React, { useState } from 'react';
import './agenceAjout.css'; // Importer votre fichier CSS

function AjouterNouvelleCommande() {
    const [formData, setFormData] = useState({
        numero: '',
        nom: ''
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
        // Gérer la soumission du formulaire ici
        console.log(formData);
    };

    return (
        <div className="wrapper">
            <h1>Ajouter Nouvelle Commande</h1>
            <form onSubmit={handleSubmit}>
                {/* Numero */}
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" id="numero" placeholder="Numéro" value={formData.numero} onChange={handleChange} />
                        <i className='bx bx-id-card'></i>
                    </div>
                </div>
                {/* Nom */}
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" id="nom" placeholder="Nom de commande" value={formData.nom} onChange={handleChange} />
                        <i className='bx bxs-user'></i>
                    </div>
                </div>
                <button type="submit" className="btn">Ajouter</button>
            </form>
        </div>
    );
}

export default AjouterNouvelleCommande;
