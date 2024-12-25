import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="flex flex-col p-10 bg-gray-100 justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold align-center text-gray-800 mb-6">Write to Us Anytime</h1>
      <div className="flex  w-full max-w-4xl">
      
        <form className="bg-white p-8  shadow-lg rounded-lg mb-10 w-full md:w-1/2">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Enter E-Mail
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="subject"
              type="text"
              placeholder="Subject"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Write Message
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              rows="5"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>

        <div className="bg-blue-500 shadow-lg rounded-lg p-6  justify-center items-center mb-10 w-full md:w-1/2 ml-4 flex flex-col items-center">
          <h2 className="text-4xl text-white font-bold -800 mb-4 text-center">Don’t Forget to Contact Us</h2>
          <p className="text-lg text-gray-700 mb-2 text-center flex items-center">
            <FaPhoneAlt className="text-3xl mr-2 text-white" /> 
            <strong>Call Us:</strong> +91 8455807965
          </p>
          <p className="text-lg text-gray-700 mb-2 rounded-2 flex ">
            <FaEnvelope className="text-3xl mr-2 text-white" />
            <strong>Send E-Mail:</strong> support@zidio.in
          </p>
          <p className="text-lg text-gray-700 mb-4 text-center flex items-center">
            <FaClock className="text-3xl mr-2 text-white" /> 
            <strong>Office Hours:</strong> 9.00 AM to 5.00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
