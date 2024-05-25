// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => (
  <div>
    <html>
    <head>
        <title>Acceuil Agence</title>
    </head>
    <body>
        <div class="banner">
            <div class="content">
                <h1>Bienvenue dans livApp</h1>
                <p>Votre application de livraison , Veuillez vous connecter :</p>
                <div>
                    <button type="button"><Link to="/login">Connection</Link></button>
                </div>
            </div>
        </div>

    </body>
</html>
  </div>
);

export default Home;
