import React from 'react';

const reviews = [
  { client: 'ACME Corp', feedback: 'Amazing project delivery and support!', project: 'Web Development' },
  { client: 'Global Industries', feedback: 'Professional and timely.', project: 'App Development' },
];

const ClientReviews = () => {
  return (
    <div className="w-full p-16 w-full bg-gray-50">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-600">Client Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="font-semibold text-xl text-blue-700">{review.client}</h3>
            <p className="italic text-gray-800 text-lg mt-2">"{review.feedback}"</p>
            <p className="text-gray-600 mt-4">Project: <span className="font-semibold">{review.project}</span></p>
          </div>
        ))}
      </div>
      <section className="bg-gray-200 p-6 w-full rounded-lg mt-10 ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Company and Research</h2>
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
    </div>
  );
};

export default ClientReviews;
