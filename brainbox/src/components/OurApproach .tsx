import React from 'react';
import three from "../img/three.jpg";

const OurApproach = () => {
  return (
    <section className="w-full bg-[#111827] text-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 px-6 md:px-12">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-6">
            Our Approach
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            At <span className="font-semibold text-white">Brainbox Consulting Digital</span>, we take pride in our
            tailored approach to supply chain solutions. Instead of offering
            one-size-fits-all methodologies, we treat each opportunity as a
            unique partnership, committed to delivering results with complete
            client satisfaction.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            We value having the <span className="text-white font-semibold">right team</span> over the largest team,
            which allows us to scale our projects to fit the specific needs,
            timelines, and budgets of every client—from small businesses and
            mid-market companies to Fortune 500 corporations.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative px-6">
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <img
              src={three}
              alt="ERP Our Approach"
              className="w-full h-full object-cover"
            />
            {/* Optional overlay effect */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-20" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;

