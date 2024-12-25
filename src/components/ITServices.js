import React from 'react';
import Image from '../assets/about-thumb.png';
import { FaDollarSign, FaHeadset, FaUsers, FaSmile } from 'react-icons/fa'; 

const InfoCard = ({ icon, title }) => (
    <div className="bg-white shadow-lg p-4 rounded-lg flex items-center">
    <div className="mr-4 text-xl">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
</div>
);

const ITServices = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="md:w-1/2">
                    <img
                        src={Image}
                        alt="Zidio"
                        className="w-full rounded-lg"
                    />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Your Reliable Partner for IT Services Dedicated to Your Success
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        At Zidio, we're your trusted IT services partner, ensuring your success with reliable solutions tailored to your business needs. Count on us for robust software development, comprehensive IT support, and cutting-edge technology solutions that empower your business to thrive.
                    </p>
                    <div className="mt-5 text-gray-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                        <InfoCard icon={<FaDollarSign />} title="Cost Effective Solutions" />
                        <InfoCard icon={<FaHeadset />} title="24/7 Free Technical Support" />
                        <InfoCard icon={<FaUsers />} title="Expert & Dedicated Team Members" />
                        <InfoCard icon={<FaSmile />} title="100% Customer Satisfaction" />
                    </div>
                    <div className="mt-8 p-5  text-left">
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
                            About More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITServices;
