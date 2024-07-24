import React from 'react';
import { Dog } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Dog className="h-8 w-8 text-blue-500 mr-2" />
          <span className="text-xl font-bold text-blue-500">Dog World</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {['Home', 'About', 'Breeds', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;