import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo-footer.png';
import icon from '../assets/images/icon-sosmed.png';

export default function Footer() {
  return (
    <>
      <footer className="flex w-full items-center bg-[#343A40] text-white px-0 py-7">
        <div className="container">
          <div className="relative mb-5 h-[80px] py-2 flex items-center justify-between">
            <Link to="/">
              <div className="w-[160px]">
                <img src={logo} alt="kementrian" />
              </div>
            </Link>

            <div className="text-[15px]">
              <ul className="flex gap-7 items-center font-semibold">
                <li>
                  <Link to="/">Beranda</Link>
                </li>
                <li>
                  <Link to="/profil">Profil</Link>
                </li>
                <li>
                  <Link to="/direktori">Direktori</Link>
                </li>
                <li>
                  <Link to="/regulasi">Regulasi</Link>
                </li>
                <li>
                  <Link to="/agenda">Agenda</Link>
                </li>
              </ul>
            </div>

            <div className="text-[15px]">
              <Link to="/">
                <div className="w-[160px]">
                  <img src={icon} alt="kementrian" />
                </div>
              </Link>
            </div>
          </div>
          <p className="text-center">Copyright @ 2024. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
