import React, { useState } from 'react';
import './clientContact.css'; 

function Contacterlecli() {
    const [formData, setFormData] = useState({
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
            <h1>Contacter votre Client</h1>
            <form onSubmit={handleSubmit} className="custom-form">

                {/* Téléphone ou email */}
                <div className="custom-input-box">
                    <div className="custom-input-field">
                        <input type="text" id="telephone" placeholder="Entrer le télephone ou l'email" value={formData.telephone} onChange={handleChange} />
                        <i className='bx bxs-phone'></i>
                    </div>
                </div>

                <div className="custom-input-box">
                    <div className="custom-input-field">
                        <textarea id="message" placeholder="Votre message" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                </div>

                <button type="submit" className="custom-submit-btn">Envoyer</button>
            </form>
        </div>
    );
}

export default Contacterlecli;
