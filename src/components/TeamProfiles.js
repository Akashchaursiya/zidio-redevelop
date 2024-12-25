import React from 'react';
import animeshImg from '../assets/animesh.jpg';
import chandanImg from '../assets/chandan.png';
import salamaImg from '../assets/salama.jpg';
import harsaImg from '../assets/harash.jpg';

const memberImages = {
  Animesh: animeshImg, 
  Salma: salamaImg, 
  Chandan: chandanImg,
  Harsa: harsaImg,
};

const TeamMember = ({ name, role, image }) => (
  <div className="relative bg-white shadow-lg rounded-lg mb-2 w-full md:w-1/5 mx-2 flex flex-col items-center overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110">
    <img 
      src={image} 
      alt={name} 
      className="w-full h-64 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end items-center p-4 text-center transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-lg text-gray-300">{role}</p>
    </div>
  </div>
);

const MeetOurTeam = () => {
  const teamMembers = [
    { name: 'Animesh Singh', role: 'Full Stack Web Developer', image: memberImages.Animesh },
    { name: 'Salma Husna Salsabila', role: 'UI/UX Designer', image: memberImages.Salma },
    { name: 'Chandan Mishra', role: 'Data Scientist', image: memberImages.Chandan },
    { name: 'Harsa Dash', role: 'Software Engineer', image: memberImages.Harsa },
  ];

  return (
    <div className="flex flex-col pt-14  bg-gray-100 w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Meet Our Dedicated Members</h1>
        <button className='text-xl bg-blue-500 text-white px-6 py-2 m-2  rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
          Team Members
        </button>
      </div>

      <h2 className="text-xl text-gray-600 mb-8 text-left">For Any Inquiry</h2>
      
      <div className="flex gap-10 pt-14 flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} role={member.role} image={member.image} />
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
