import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'HOME', to: '/' },
    { name: 'COLLECTIONS', to: '/collections' },
    { name: 'BLOG', to: '/blog' },
    { name: 'ABOUT', to: '/about' },
  ];

  return (
    <nav className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm font-roboto hover:text-yellow-500 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/" className="flex items-center justify-center">
              <img
                src="https://i.ibb.co/C3hhZTQz/logo-1-1.png"
                alt="Pureland Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              type="button"
              aria-label="Search"
              className="hover:text-yellow-500 transition-colors"
            >
              <Search size={20} />
            </button>

            <button
              type="button"
              aria-label="Shopping cart"
              className="relative hover:text-yellow-500 transition-colors"
            >
              <ShoppingBag size={20} />

              <span className="absolute -top-2 -right-2 bg-yellow-600 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            <button
              type="button"
              aria-label="Account"
              className="hover:text-yellow-500 transition-colors"
            >
              <User size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              type="button"
              aria-label="Search"
              className="hover:text-yellow-500 transition-colors"
            >
              <Search size={20} />
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
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
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 hover:text-yellow-500 rounded transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Menu Icons */}
            <div className="border-t border-gray-700 pt-4 mt-4 flex items-center justify-around text-white">
              <button
                type="button"
                className="flex flex-col items-center hover:text-yellow-500 transition-colors"
              >
                <ShoppingBag size={20} />
                <span className="text-xs mt-1">Cart</span>
              </button>

              <button
                type="button"
                className="flex flex-col items-center hover:text-yellow-500 transition-colors"
              >
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