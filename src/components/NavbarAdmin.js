import React from 'react';
import { Link } from 'react-router-dom';

import PTabc from '../assets/images/ptABC.jpg';
import Logo from '../assets/images/logo-kementrian-perindustrian.jpg';

const NavbarAdmin = () => {
  return (
    <>
      <header className="flex sticky top-0 left-0 right-[14px] items-center justify-between py-4 pl-4 pr-[20px] bg-white shadow z-10">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Kementerian Perindustrian" className="w-[150px]" />
          </Link>
        </div>
        <div className="flex text-[#ADB5BD] h-full items-end">
          <div className="flex h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
          <span className="mx-5 text-[20px]">|</span>
          <div className="flex items-center">
            <div className="mr-4">
              <img src={PTabc} alt="gambar" className="w-[30px]" />
            </div>
            <div>
              <p className="text-[12px] text-[#404040]">PT ABC Indonesia</p>
              <p className="text-[11px]">Jakarta</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarAdmin;
