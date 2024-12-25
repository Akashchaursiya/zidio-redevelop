import React from 'react';

const achievements = [
  { title: 'Innovation Award 2022', image: '/path/to/image1.jpg' },
  { title: 'Best Start-up 2021', image: '/path/to/image2.jpg' },
];

const AchievementsGallery = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {achievements.map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-md">
            <img src={item.image} alt={item.title} className="w-full h-32 object-cover mb-4 rounded-md" />
            <h3 className="font-semibold text-xl">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsGallery;
