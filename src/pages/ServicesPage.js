import React from 'react';
import '../App.css';
import Footer from '../components/Footer'


const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Provide Interactive IT Solutions & Business Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
          <div className="service-card">
            <h3 className="service-title">Cloud Services</h3>
            <p className="service-description">
              Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.
            </p>
            <a href="/services/cloud" className="service-link">Learn More</a>
          </div>
          
          <div className="service-card">
            <h3 className="service-title">IT Management</h3>
            <p className="service-description">
              Provide comprehensive IT infrastructure management to ensure smooth and uninterrupted business operations.
            </p>
            <a href="/services/it-management" className="service-link">Learn More</a>
          </div>
          <div className="service-card">
            <h3 className="service-title">Software Renewal</h3>
            <p className="service-description">
              Manage and streamline software renewals, ensuring your systems are always up-to-date and secure.
            </p>
            <a href="/services/software-renewal" className="service-link">Learn More</a>
          </div>
          <div className="service-card">
            <h3 className="service-title">Machine Learning</h3>
            <p className="service-description">
              Develop and implement machine learning models to automate processes and drive intelligent decision-making.
            </p>
            <a href="/services/machine-learning" className="service-link">Learn More</a>
          </div>

          <div className="service-card">
            <h3 className="service-title">Digital Marketing</h3>
            <p className="service-description">
              Boost your online presence with tailored digital marketing strategies that drive engagement and growth.
            </p>
            <a href="/services/digital-marketing" className="service-link">Learn More</a>
          </div>

          <div className="service-card">
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">
              Design and build responsive, high-performance websites using the latest web technologies.
            </p>
            <a href="/services/web-development" className="service-link">Learn More</a>
          </div>

          <div className="service-card">
            <h3 className="service-title">Cyber Security</h3>
            <p className="service-description">
              Safeguard your digital assets with robust cybersecurity solutions tailored to protect against emerging threats.
            </p>
            <a href="/services/cyber-security" className="service-link">Learn More</a>
          </div>
          <div className="service-card">
            <h3 className="service-title">Data Analytics</h3>
            <p className="service-description">
              Transform raw data into valuable insights, enabling informed and strategic business decisions.
            </p>
            <a href="/services/data-analytics" className="service-link">Learn More</a>
          </div>
        </div>
      
       
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
