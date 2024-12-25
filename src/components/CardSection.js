import React from 'react';

const CardSection = () => {
  return (
    <div className="flex flex-col  md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0 py-10">
  
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-blue-600 hover:text-white transition-colors duration-300">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">3+ Year Experience</div>
          <p className="text-gray-700 hover:text-white text-base">
            Over 3 years of expertise delivering unparalleled solutions and insights for your success.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-blue-600 hover:text-white transition-colors duration-300">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Dedicated Members</div>
          <p className="text-base">
            Passionate team members dedicated to exceeding expectations and achieving mutual success.
          </p>
          <p className="underline cursor-pointer">Read More</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-blue-600 hover:text-white transition-colors duration-300">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Valuable Supports</div>
          <p className="text-gray-700 hover:text-white text-base">
            Tailored support and guidance ensuring reliability and innovation every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
