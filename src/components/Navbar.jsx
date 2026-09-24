import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'COLLECTIONS', href: '#' },
    { name: 'BLOG', href: '#' },
    { name: 'ABOUT', href: '#' }
  ];

  return (
    <nav className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-roboto hover:text-yellow-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>



          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <a href="#" className="flex items-center justify-center">
              <img
                src="https://i.ibb.co/C3hhZTQz/logo-1-1.png"
                alt="Pureland Logo"
                className="h-14 w-auto object-contain"
              />
            </a>
          </div>



          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-yellow-500 transition-colors">
              <Search size={20} />
            </button>
            <button className="relative hover:text-yellow-500 transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-yellow-600 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="hover:text-yellow-500 transition-colors">
              <User size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="hover:text-yellow-500 transition-colors">
              <Search size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-yellow-500 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium hover:bg-gray-800 hover:text-yellow-500 rounded transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Menu Icons */}
            <div className="border-t border-gray-700 pt-4 mt-4 flex items-center justify-around">
              <button className="flex flex-col items-center hover:text-yellow-500 transition-colors">
                <ShoppingBag size={20} />
                <span className="text-xs mt-1">Cart</span>
              </button>
              <button className="flex flex-col items-center hover:text-yellow-500 transition-colors">
                <User size={20} />
                <span className="text-xs mt-1">Account</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
