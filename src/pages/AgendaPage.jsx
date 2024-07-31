import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AgendaPage = () => {
  return (
    <>
      <Navbar />

      <main className="container h-screen first-section">
        <div className="w-full flex justify-center items-center text-center">
          <h1 className="text-[#495057] font-bold">Agenda Page</h1>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AgendaPage;
