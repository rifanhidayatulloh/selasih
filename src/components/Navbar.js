import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../assets/images/logo-kementrian-perindustrian.jpg';
import logo2 from '../assets/images/Screenshot_13.png';

export default function Navbar() {
  const navigate = useNavigate();

  const [scrollDirection, setScrollDirection] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [shadow, setShadow] = useState(true);
  const location = useLocation();

  const handleButtonClick = () => {
    navigate('/dashboard');
  };

  const isActive = path => {
    return location.pathname === path ? 'text-[#17A39D]' : 'text-[#495057]';
  };

  const changeShadow = useCallback(() => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos <= 99) {
      setScrollDirection(true);
      setShadow(true);
    } else if (prevScrollPos > currentScrollPos) {
      setScrollDirection(true);
      setShadow(false);
    } else {
      setScrollDirection(false);
      setShadow(false);
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', changeShadow);

    return () => window.removeEventListener('scroll', changeShadow);
  }, [changeShadow, prevScrollPos, scrollDirection]);

  useEffect(() => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos === 0) {
      setScrollDirection(true);
    } else {
      setScrollDirection(true);
    }
    setPrevScrollPos(currentScrollPos);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-10 flex w-full items-center bg-white px-0 py-2 duration-500 ease-in-out ${
          scrollDirection ? 'translate-y-0' : '-translate-y-24'
        } ${shadow ? 'border-b-2' : 'shadow-lg'}`}
      >
        <div className="container">
          <div className="relative h-[80px] py-2 flex items-center justify-between">
            <Link className="flex gap-5" to="/">
              <div className="w-[160px]">
                <img src={logo} alt="kementrian" />
              </div>
              <div>
                <img className="w-[42px]" src={logo2} alt="kementrian" />
              </div>
            </Link>

            <div className="text-[15px]">
              <ul className="flex gap-7 items-center font-semibold">
                <li>
                  <Link to="/" className={`${isActive('/')}`}>
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link to="/profil" className={`${isActive('/profil')}`}>
                    Profil
                  </Link>
                </li>
                <li>
                  <Link to="/direktori" className={`${isActive('/direktori')}`}>
                    Direktori
                  </Link>
                </li>
                <li>
                  <Link to="/regulasi" className={`${isActive('/regulasi')}`}>
                    Regulasi
                  </Link>
                </li>
                <li>
                  <Link to="/agenda" className={`${isActive('/agenda')}`}>
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link to="/contoh" className={`${isActive('/contoh')}`}>
                    Contoh
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-[15px]">
              <div className="flex items-center">
                <ul className="flex font-semibold gap-5">
                  <li className="text-[#17A39D]">
                    <button onClick={handleButtonClick} className="ring-2 py-3 px-7 rounded-md ring-[#17A39D]">
                      Masuk
                    </button>
                  </li>
                  <li className="">
                    <button className="ring-2 text-white py-3 px-7 bg-[#17A39D] rounded-md ring-[#17A39D]">
                      Ambil Sertifikasi
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
