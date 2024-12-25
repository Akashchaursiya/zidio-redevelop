import React from 'react';
import ClientReviews from '../components/ClientReviews';
import JobListings from '../components/JobListings';
import TeamProfiles from '../components/TeamProfiles';
import Footer from '../components/Footer';
import backgroundImage from '../assets/hero-thumb.png';
import ITServices from '../components/ITServices';
import CardSection from '../components/CardSection'; 

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex min-h-screen bg-blue-600">
        <div className="flex flex-col justify-center w-1/2 p-10 bg-opacity-50">
          <h1 className="text-4xl font-bold text-white mb-4">Software Development & Consultancy</h1>
          <h2 className="text-2xl font-semibold text-white mb-6">Business Innovation</h2>
          <p className="text-lg text-white mb-6">
            Leading Business Evolution with Tailored and Innovative Software Solutions for Sustainable Growth
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Let's Tlak
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
             Read More
            </button>
          </div>
        </div>

        <div style={{ marginLeft: '49px' }} className="w-1/1 hidden md:block">
          <img src={backgroundImage} alt="Hero" className="object-cover h-full" />
        </div>
      </div>

      
      <div 
        className="flex items-center justify-center p-10 w-full relative bg-cover bg-bottom bg-no-repeat"
       
      >
        <div className="absolute bg-white inset-0 opacity-50"></div>

        <div className="relative z-10 w-full max-w-7xl -mt-[100px]">
          <CardSection />
        </div>
      </div>

      <div className="flex flex-col items-center p-10">
        <ITServices />
        <ClientReviews />
        <JobListings />
        <TeamProfiles />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
