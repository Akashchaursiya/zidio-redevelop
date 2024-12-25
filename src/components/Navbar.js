import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { FiMenu, FiX } from 'react-icons/fi'; 
import logo from '../assets/zidio.png'; 

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white flex justify-between items-center p-4 z-50">
      <div className="flex items-center">
        <img src={logo} alt="Zidio Logo" className="h-8 mr-2" />
        <Link to="/" className="text-xl font-bold"></Link>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        
        <div className="relative">
          <input 
            type="text" 
            className="p-2 rounded-lg bg-gray-200 text-black" 
            placeholder="Search..." 
          />
          <FiSearch className="absolute right-2 top-2 text-gray-600" />
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-600 text-white flex flex-col items-center md:hidden">
          <Link to="/" className="p-2 hover:text-gray-300">Home</Link>
          <Link to="/about" className="p-2 hover:text-gray-300">About</Link>
          <Link to="/services" className="p-2 hover:text-gray-300">Services</Link>
          <Link to="/contact" className="p-2 hover:text-gray-300">Contact</Link>
          
          <div className="relative mb-4">
            <input 
              type="text" 
              className="p-2 rounded-lg bg-gray-200 text-black" 
              placeholder="Search..." 
            />
            <FiSearch className="absolute right-2 top-2 text-gray-600" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
