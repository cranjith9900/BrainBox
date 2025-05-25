import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F5F8FF] fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-8 lg:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Logo" />
        </a>

        {/* Hamburger Toggle Button (Visible only on small screens) */}
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:flex md:w-auto rounded-xl`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#F5F8FF]">
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded-l-md text-gray-900 md:hover:bg-[#ec8426] md:hover:text-white md:p-2 hover:underline hover:decoration-[#ec8426] hover:underline-offset-4 hover:decoration-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 md:hover:bg-[#ec8426] md:hover:text-white md:p-2 hover:underline hover:decoration-[#ec8426] hover:underline-offset-4 hover:decoration-2"
              >
                About
              </a>
            </li>
            <li className="relative group">
              <span
                className="block py-2 px-3 text-gray-900 md:hover:bg-[#ec8426] md:hover:text-white md:p-2 cursor-pointer"
              >
                Services
              </span>
              <div className="md:absolute md:left-0 mt-2 w-max bg-white border border-gray-200 rounded-md shadow-md z-10 hidden md:group-hover:block">
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                >
                  SAP Ariba Application Managed Support
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                >
                  SAP S/4HANA Migration Solutions
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-b-md"
                >
                  Innovation Garage
                </a>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded-r-md text-gray-900 md:hover:bg-[#ec8426] md:hover:text-white md:p-2 hover:underline hover:decoration-[#ec8426] hover:underline-offset-4 hover:decoration-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            type="button"
            className="text-white bg-[#ec8426] focus:ring-4 focus:outline-none font-medium rounded-4xl text-sm px-4 py-2 text-center"
          >
            Get started
          </button>
          <button className="text-[#ec8426] hover:text-gray-700">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
