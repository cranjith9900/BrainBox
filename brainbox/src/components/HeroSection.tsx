import React from 'react';
import l1 from '../img/l1.jpg';
import l2 from '../img/l2.png'; // Make sure the path is correct

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row overflow-hidden bg-[#F5F8FF] mt-16">
      {/* Text Section */}
      <div className="w-full px-6 md:px-16 py-12 flex flex-col justify-center items-start space-y-6">
       

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#071B35] leading-tight z-10">
          Drive <span style={{ color: '#EC8426' }}>Procurement Excellence</span>
          <br /> with SAP Ariba Solutions
        </h1>

        {/* Description */}
        <p className="text-gray-500 z-10 max-w-xl">
          Simplify sourcing, contracts, and payments with agile implementation and unmatched client satisfaction.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 z-10">
          <button className="bg-[#EC8426] hover:bg-[#d46f1f] text-white px-6 py-3 rounded-full text-lg">
            Get Started
          </button>
          <button className="flex items-center space-x-2">
            
            <span className="text-[#EC8426] font-medium">Watch Demo</span>
          </button>
        </div>
      </div>

      {/* Image Section with Oval Shape */}
      <div className="w-full bg-[#F5F8FF] flex justify-center items-center py-12 relative">
        {/* Main background image */}
        <img
          src={l2}
          className="z-10 w-[280px] md:w-[300px] lg:w-[350px]" // Adjust sizes for different screens
          alt="Background Image"
        />

        {/* Overlay image */}
        <img
          src={l1}
          style={{ borderRadius: '11.5rem' }}
          className="ml-[-100px] w-[280px] md:w-[350px] lg:w-[400px]"
          alt="Overlay Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;