import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const DirektoriPage = () => {
  return (
    <>
      <Navbar />

      <main className="container h-screen first-section">
        <div className="w-full flex justify-center items-center text-center">
          <h1 className="text-[#495057] font-bold">Direktori Page</h1>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DirektoriPage;
