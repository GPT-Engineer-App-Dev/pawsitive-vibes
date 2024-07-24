import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Facebook />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Twitter />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Instagram />
          </a>
        </div>
        <p className="text-center">
          © 2023 Dog World. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;