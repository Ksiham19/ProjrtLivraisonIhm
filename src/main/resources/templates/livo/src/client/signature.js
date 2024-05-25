import React, { useState } from 'react';
import './signature.css'; 

function Contacterlecli() {
    const [formData, setFormData] = useState({
        telephone: '',
        nom: '',
        signature: null // Ajout du champ pour la signature
    });

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        // Vérifie si l'élément est un champ de fichier
        if (files) {
            setFormData(prevState => ({
                ...prevState,
                [id]: files[0] // Stocke le fichier dans l'état
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [id]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gérez la soumission du formulaire ici
        console.log(formData);
    };

    return (
        <div className="custom-form-wrapper">
            <h1>Confirmer la réception de votre commande</h1>
            <form onSubmit={handleSubmit} className="custom-form">

                {/* Numero de commande */}
                <div className="custom-input-box">
                    <div className="custom-input-field">
                        <input type="text" id="telephone" placeholder="Entrer le numero: " value={formData.telephone} onChange={handleChange} />
                    </div>
                </div>

                {/* Nom de commande */}
                <div className="custom-input-box">
                    <div className="custom-input-field">
                        <input type="text" id="nom" placeholder="Entrer le Nom: " value={formData.nom} onChange={handleChange} />
                    </div>
                </div>

                {/* Zone de téléchargement de la signature */}
                <div className="custom-input-box">
                    <div className="custom-input-field">
                        <input type="file" id="signature" accept=".pdf" onChange={handleChange} />
                    </div>
                </div>

                <button type="submit" className="custom-submit-btn">Envoyer</button>
            </form>
        </div>
    );
}

export default Contacterlecli;
