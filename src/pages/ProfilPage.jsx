import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ProfilPage = () => {
  return (
    <>
      <Navbar />

      <main className="container h-screen first-section">
        <div className="w-full flex justify-center items-center text-center">
          <h1 className="text-[#495057] font-bold">Profil Page</h1>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProfilPage;
