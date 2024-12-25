import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../assets/zidio.png'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      
        <div className="flex p-3 flex-col items-start">
          <img src={logo} alt="ZIDIO DEVELOPMENT" className="mb-4 h-12" /> 
          <p className="mb-4">
            At Zidio Development, we specialize in innovative software solutions. 
            Our team is dedicated to delivering high-quality projects, fostering professional growth, 
            and driving technological advancement.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Discover More</button>
        </div>

        <div>
          <h3 className="text-2xl pt-4 font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
          <li><Link to="/it-solutions" className="hover:underline">IT Solutions</Link></li>
            <li><Link to="/cyber-security" className="hover:underline">Cyber Security</Link></li>
            <li><Link to="/digital-marketing" className="hover:underline">Digital Marketing</Link></li>
            <li><Link to="/machine-learning" className="hover:underline">Machine Learning</Link></li>
            <li><Link to="/cloud-services" className="hover:underline">Cloud Services</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl pt-4 font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
          <li><Link to="/it-solutions" className="hover:underline">IT Solutions</Link></li>
            <li><Link to="/cyber-security" className="hover:underline">Cyber Security</Link></li>
            <li><Link to="/digital-marketing" className="hover:underline">Digital Marketing</Link></li>
            <li><Link to="/machine-learning" className="hover:underline">Machine Learning</Link></li>
            <li><Link to="/cloud-services" className="hover:underline">Cloud Services</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl pt-4 font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe to Latest Newsletter</p>
          <div className="flex p-2">
            <input
              type="email"
              placeholder="Enter Your E-Mail"
              className="w-full px-4 py-2 rounded-l bg-gray-200 text-black"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-5 p-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="mb-2 md:mb-0">© 2024 @ Zidio Development. Designed by Team ZIDIO.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com" className="hover:underline"><FaFacebook size={20} /></a>
          <a href="https://www.twitter.com" className="hover:underline"><FaTwitter size={20} /></a>
          <a href="https://www.linkedin.com" className="hover:underline"><FaLinkedin size={20} /></a>
          <a href="https://www.youtube.com" className="hover:underline"><FaYoutube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
