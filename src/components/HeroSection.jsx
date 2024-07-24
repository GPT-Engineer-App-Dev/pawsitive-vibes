import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[600px]">
      <img
        src="/placeholder.svg"
        alt="Happy dog"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Dog World</h1>
        <p className="text-xl">Discover everything about your favorite furry friends</p>
      </div>
    </section>
  );
};

export default HeroSection;