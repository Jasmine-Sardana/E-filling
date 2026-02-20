import React, { useState } from 'react';
import logo from '../assets/ysa.jpeg';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-red-500/80 text-white px-4 py-4 sm:px-6 lg:px-4 z-50 shadow-lg">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div>
            <img src={logo} 
            alt="logo" 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex py-4">
            <ul className="flex gap-6 font-large">
              <li className="hover:text-black font-bold cursor-pointer px-3 py-2 rounded-md transition">HOME</li>
              <li className="hover:text-black font-bold cursor-pointer px-3 py-2 rounded-md transition">ABOUT</li>
              <li className="hover:text-black font-bold cursor-pointer px-3 py-2 rounded-md transition">SERVICES</li>
              <li className="hover:text-black font-bold cursor-pointer px-3 py-2 rounded-md transition">CONTACT</li>
            </ul>
          </div>

          {/* Hamburger button only - toggles open/close */} 
          <div className="md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-2xl font-black cursor-pointer hover:text-black transition duration-300"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? '≡' : '≡'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray/30 backdrop-blur-sm z-40 md:hidden">
          <div
            className="fixed top-24 sm:top-24 right-0 w-50 h-150 bg-white-500/80 text-red-400 flex flex-col justify-start items-center gap-6 p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <a href="#" className="text-xl font-bold uppercase hover:text-black transition duration-300">
              HOME
            </a>
            <a href="#" className="text-xl font-bold uppercase hover:text-black transition duration-300">
              ABOUT
            </a>
            <a href="#" className="text-xl font-bold uppercase hover:text-black transition duration-300">
              Services
            </a>
            <a href="#" className="text-xl font-bold uppercase hover:text-black transition duration-300">
              CONTACT
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
