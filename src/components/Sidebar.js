import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Screenshot_13.png';

const Sidebar = () => {
  return (
    <>
      <aside className="flex h-screen flex-col border-r-2 p-4 w-full scrollbar-hide overflow-y-scroll">
        <div className="flex flex-col text-[#404040] items-center justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-[90px] mb-7" />
          <span className="text-xl font-bold mb-5">SELASIH</span>
          <p className="text-[14px] text-center">Sistem Layanan Standar Industri Hijau </p>
        </div>
        <div className="flex flex-col text-[#6C757D] font-medium mb-4">
          <ul>
            <li className="mt-4">
              <Link
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200"
                to="/dashboard"
              >
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
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200"
                to="/dashboard"
              >
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
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                  />
                </svg>
                <span className="ml-3">Proses Sertifikasi</span>
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200"
                to="/dashboard"
              >
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
                    d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
                <span className="ml-3">Rektifikasi</span>
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200"
                to="/dashboard"
              >
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
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                  />
                </svg>
                <span className="ml-3">Lorem Ipsum</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
