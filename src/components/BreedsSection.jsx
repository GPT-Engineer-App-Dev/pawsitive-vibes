import React from 'react';

const breeds = [
  { name: 'Labrador Retriever', description: 'Friendly and outgoing' },
  { name: 'German Shepherd', description: 'Intelligent and versatile' },
  { name: 'Golden Retriever', description: 'Devoted and obedient' },
  { name: 'French Bulldog', description: 'Adaptable and playful' },
  { name: 'Bulldog', description: 'Calm and courageous' },
  { name: 'Poodle', description: 'Active and intelligent' },
  { name: 'Beagle', description: 'Merry and friendly' },
  { name: 'Rottweiler', description: 'Loyal and confident' },
  { name: 'Dachshund', description: 'Clever and courageous' },
];

const BreedsSection = () => {
  return (
    <section id="breeds" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {breeds.map((breed, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt={breed.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{breed.name}</h3>
                <p className="text-gray-600">{breed.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreedsSection;