// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminApp from './admin/App';
import AgenceApp from './agence/App';
import Clientpartie from './client/App';
import Livreurpartie from './livreur/App';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/admin/*" element={<AdminApp />} />
    <Route path="/agence/*" element={<AgenceApp />} />
    <Route path="/client/*" element={<Clientpartie />} />
    <Route path="/livreur/*" element={<Livreurpartie />} />
  </Routes>
);

export default App;
