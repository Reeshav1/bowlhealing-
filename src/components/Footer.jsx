import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-2xl font-bold sm:text-3xl">
                Subscribe to Our Newsletter
              </h3>

              <p className="text-base text-gray-400 sm:text-lg">
                Get exclusive offers and updates on new products
              </p>
            </div>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 sm:px-6 sm:py-4"
              />

              <button className="whitespace-nowrap rounded bg-yellow-600 px-6 py-3 font-semibold text-black transition-colors duration-300 hover:bg-yellow-700 sm:px-8 sm:py-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-5">

          {/* Branding */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h2 className="mb-4 text-2xl font-bold text-yellow-500">
              🥁 Pureland
            </h2>

            <p className="mb-6 text-sm text-gray-400">
              Authentic Himalayan instruments and sacred artifacts.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full bg-gray-900 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-yellow-600 hover:text-black"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full bg-gray-900 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-yellow-600 hover:text-black"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="rounded-full bg-gray-900 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-yellow-600 hover:text-black"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                aria-label="Email"
                className="rounded-full bg-gray-900 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-yellow-600 hover:text-black"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Shop</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Singing Bowls
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Statues
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Gongs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Handpans
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Company</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Support</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Legal</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8"></div>

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 gap-6 text-sm text-gray-400 md:grid-cols-2">
          <p>
            © {currentYear} Pureland Handicrafts. All rights reserved.
          </p>

          <div className="text-center md:text-right">
            <span>Made with ❤️ from the Himalayas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}