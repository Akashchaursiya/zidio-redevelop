import React from 'react';
import Footer from '../components/Footer';
import TeamProfiles from '../components/TeamProfiles';
import backgroundImage from '../assets/hero-thumb.png';

const AboutPage = () => {
  return (
    <div className=" w-full bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row min-h-screen bg-blue-600">

        <div className="flex flex-col justify-center w-full md:w-1/2 p-10 bg-opacity-50">
          <h1 className="text-4xl font-bold text-white mb-4">Software Development & Consultancy</h1>
          <h2 className="text-2xl font-semibold text-white mb-6">Business Innovation</h2>
          <p className="text-lg text-white mb-6">
            Leading Business Evolution with Tailored and Innovative Software Solutions for Sustainable Growth
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              Learn More
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
              Get Started
            </button>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img src={backgroundImage} alt="Hero" className="object-cover h-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <section className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Software Development & Consultancy</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Who We Are and What We Do?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to Zidio Development Pvt. Ltd. We are a trailblazing software development company where innovation meets expertise. 
            Our team of skilled developers and creative thinkers specializes in turning complex ideas into user-friendly digital solutions. 
            From custom software to cutting-edge mobile apps, we're dedicated to engineering excellence and pushing the boundaries of technology.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            At Zidio, we believe in the power of collaboration, continuous learning, and adapting to the ever-evolving digital landscape. 
            We're not just developers; we're visionaries committed to delivering impactful software solutions that drive success for businesses globally.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Business Growth', description: 'Boost your business with strategies to reach new markets, optimize operations, and increase profits.' },
              { title: 'eCommerce', description: 'Enhance your online presence with user-friendly eCommerce solutions and secure payment gateways.' },
              { title: 'Secure Database', description: 'Safeguard your data with robust security measures and industry-standard compliance.' },
              { title: 'Audience Growth', description: 'Expand your reach by connecting with your target audience to drive visibility and growth.' }
            ].map((service, index) => (
              <div key={index} className="bg-blue-500 text-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Company and Research</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-blue-600">1000 +</h3>
              <p className="text-gray-700">Completed Projects</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600">100 %</h3>
              <p className="text-gray-700">Business Solution Success</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600">1200 +</h3>
              <p className="text-gray-700">Works Completed</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600">99 +</h3>
              <p className="text-gray-700">Expert Members</p>
            </div>
          </div>
        </section>

        <TeamProfiles />

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
