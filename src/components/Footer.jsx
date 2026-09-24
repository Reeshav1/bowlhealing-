import React from "react";

export default function Footer() {
  const navLinks = [
    { name: "Shop", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Journals", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Shipping and Refund", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms and Conditions", href: "#" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Logo */}
          <img
            src="https://i.ibb.co/C3hhZTQz/logo-1-1.png"
            alt="PureLand Handicrafts"
            className="h-16 w-auto object-contain sm:h-20"
          />

          {/* Brand Name */}
          <p className="mt-3 text-2xl font-medium sm:text-3xl md:text-4xl">
            PureLand Handicrafts
          </p>

          {/* Navigation */}
          <div className="mt-6 flex max-w-3xl flex-wrap justify-center gap-x-5 gap-y-3 text-sm sm:gap-x-7 sm:text-base">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="mt-7 text-sm text-gray-400 sm:text-base">
            © 2026 - Pureland Handicrafts
          </p>
        </div>
      </div>
    </footer>
  );
}