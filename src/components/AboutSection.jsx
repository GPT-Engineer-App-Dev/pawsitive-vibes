import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Welcome to Dog World, your ultimate destination for all things canine! We're passionate about dogs and dedicated to providing a comprehensive resource for dog lovers, owners, and enthusiasts alike.
          </p>
          <p>
            Our mission is to educate, inform, and inspire. Whether you're looking for information on different breeds, tips on dog care, or just want to enjoy beautiful images of our furry friends, you'll find it all here at Dog World.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/placeholder.svg"
            alt="Group of dogs"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;