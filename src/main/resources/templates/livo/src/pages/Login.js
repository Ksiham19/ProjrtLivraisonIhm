// src/pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (userRole) => {
    if (userRole === 'admin') {
      navigate('/admin');
    } else if (userRole === 'agence') {
        navigate('/agence');
      }
      else if (userRole === 'client') {
        navigate('/client');
      }
      else if (userRole === 'livreur') {
        navigate('/livreur');
      }
  };

  return (
    
        <div class="banner">
            <div class="content">
                <h1>Bienvenue dans livApp</h1>
                <p> Veuillez vous connecter autant que :</p>
                <div>
                    <button type="button"  onClick={() => handleLogin('admin')}><span></span>Admin</button>
                    <button type="button" onClick={() => handleLogin('agence')}><span></span>Agence</button>
                    <button type="button" onClick={() => handleLogin('client')}><span></span>Client</button>
                    <button type="button" onClick={() => handleLogin('livreur')}><span></span>Livreur</button>

                </div>
            </div>
        </div>


  );
};

export default Login;
