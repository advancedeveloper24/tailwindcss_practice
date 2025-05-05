"use client";
import { useState } from "react";
import { FaAlignJustify, FaAngellist } from "react-icons/fa";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className=" fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm z-30 ">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-amber-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity -ml-2.5"></div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaAngellist className="size-6" />
          ) : (
            <FaAlignJustify className="size-6" />
          )}
        </button>

        {/* Desktop Navitems */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all
               ${
                 activeLink === link.href
                   ? "text-blue-600 after:w-full"
                   : "text-gray-600 hover:text-gray-900"
               }`}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Sign In Button */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
          <a href="#signin">Sign In</a>
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                className={`block text-sm font-medium py-2`}
                key={index}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
