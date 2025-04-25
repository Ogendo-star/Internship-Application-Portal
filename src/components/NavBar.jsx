import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const NavBar = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div
            className="text-xl font-bold cursor-pointer text-gray-800"
            onClick={() => scrollToSection('top')}
          >
            Internship Portal
          </div>

          {isDesktop ? (
            <>
              <div className="flex space-x-8">
                <a
                  href="#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('programs');
                  }}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Programs
                </a>
                <a
                  href="#instructions"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('instructions');
                  }}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  How to Apply
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Contact
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Programs"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    aria-label="Search Programs"
                    className="border border-gray-300 rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={16}
                    aria-hidden="true"
                  />
                </div>
                <button
                  onClick={() => scrollToSection('application')}
                  aria-label="Apply Now"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Apply Now
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="text-gray-700 focus:outline-none"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-2 p-4 z-40">
                  <a
                    href="#programs"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('programs');
                    }}
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    Programs
                  </a>
                  <a
                    href="#instructions"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('instructions');
                    }}
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    How to Apply
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    Contact
                  </a>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      placeholder="Search Programs"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      aria-label="Search Programs"
                      className="border border-gray-300 rounded-md py-1 pl-3 pr-8 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={16}
                      aria-hidden="true"
                    />
                  </div>
                  <button
                    onClick={() => scrollToSection('application')}
                    aria-label="Apply Now"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mt-2"
                  >
                    Apply Now
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;