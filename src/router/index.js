import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Beranda from '../pages/BerandaPage';
import Profil from '../pages/ProfilPage';
import Direktori from '../pages/DirektoriPage';
import Regulasi from '../pages/RegulasiPage';
import Agenda from '../pages/AgendaPage';
import NotFoundPage from '../pages/NotFoundPage';
import Dashboard from '../pages/Dashboard';
import ContohPage from '../pages/ContohPage';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Beranda />} />
        <Route path="/profil" index element={<Profil />} />
        <Route path="/direktori" index element={<Direktori />} />
        <Route path="/regulasi" index element={<Regulasi />} />
        <Route path="/agenda" index element={<Agenda />} />
        <Route path="/contoh" index element={<ContohPage />} />
        <Route path="/dashboard" index element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default router;
