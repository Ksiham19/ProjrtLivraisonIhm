// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import AccueilClient from './acceuilClient'; 
import ProfilClient from './profilClient'; 
import Suivi from './SuiviCde';
import Contacterlecli from './signature';
import ConfirmCde from './Confirm';

function Clientpartie(){
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AccueilClient />} />
        <Route path="/profilClient" element={<ProfilClient />} />
        <Route path="/SuiviCde" element={<Suivi />} />
        <Route path="/signature" element={<Contacterlecli />} />
        <Route path="/Confirm" element={<ConfirmCde />} />
      </Routes>
    </div>
);
}
export default Clientpartie;
