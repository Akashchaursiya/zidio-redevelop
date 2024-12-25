import React from 'react';
import frontendIcon from '../assets/service-1.png';
import uiuxIcon from '../assets/service-2.png';
import graphicIcon from '../assets/service-3.png';
import webIcon from '../assets/service-4.png';
import digitalIcon from '../assets/service-5.png';
import productIcon from '../assets/service-6.png';


const jobListings = [
  { title: 'Frontend Developer', description: 'Looking for a React.js expert', location: 'Remote', icon: frontendIcon },
  { title: 'UI/UX Designer', description: 'Experienced with Figma and Sketch', location: 'Onsite - NY', icon: uiuxIcon },
  { title: 'Graphic Designer', description: 'Create stunning visuals for various projects', location: 'Remote', icon: graphicIcon },
  { title: 'Web Developer', description: 'Build and maintain websites', location: 'Remote', icon: webIcon },
  { title: 'Digital Marketing Specialist', description: 'Expert in SEO and content marketing', location: 'Onsite - CA', icon: digitalIcon },
  { title: 'Product Designer', description: 'Design user-friendly products', location: 'Hybrid - TX', icon: productIcon },
];

const JobListings = () => {
  return (
    <div className="p-8 m-0 bg-blue-900 w-full">
      <p className="text-blue-1200 text-center">IT Support For Business</p>
      <h2 className="text-3xl font-bold mb-8 text-center text-white">What We Are Offering</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobListings.map((job, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white text-gray-800 p-4 shadow-md h-64 flex flex-col justify-between transition-transform transform hover:-translate-y-1 hover:shadow-lg rounded-l-lg"
          >
          
            <div className="absolute inset-0 bg-blue-600 transition-transform duration-300 transform translate-y-full hover:translate-y-0 hover:bg-blue-400"></div>

            <div className="relative z-10 flex flex-col justify-between h-full">
    
              <div className="absolute top-1 right-0 bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                {index + 1}
              </div>
              <div className="flex justify-left mt-4 p-4">
              <img src={job.icon} alt={job.title} className="w-10 h-10" />
            </div>
              <h3 className="font-semibold text-xl">{job.title}</h3>
              <p className="text-gray-600">{job.description}</p>
              <p className="text-gray-500 mt-2">Location: {job.location}</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Apply Now
              </button>
            </div>
           
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
