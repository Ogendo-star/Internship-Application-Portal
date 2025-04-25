import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: '#7B3F00', color: '#F5F5DC' }} className="shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold" style={{ color: '#F5F5DC' }}>
              Sixth Nexus
            </NavLink>
            <p className="hidden md:block ml-4 text-sm" style={{ color: '#D2B48C' }}>
              Bridging the gap between talent and opportunity
            </p>
          </div>

          
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "font-medium" 
                  : "hover:opacity-80 transition"
              }
              style={{ color: '#F5F5DC' }}
            >
              Home
            </NavLink>
            <NavLink 
              to="/apply" 
              className={({ isActive }) => 
                isActive 
                  ? "font-medium" 
                  : "hover:opacity-80 transition"
              }
              style={{ color: '#F5F5DC' }}
            >
              Apply
            </NavLink>
            <NavLink 
              to="/apply-with-filter" 
              className={({ isActive }) => 
                isActive 
                  ? "font-medium" 
                  : "hover:opacity-80 transition"
              }
              style={{ color: '#F5F5DC' }}
            >
            
              Application Status
            </NavLink>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={24} color="#F5F5DC" /> : <Menu size={24} color="#F5F5DC" />}
            </button>
          </div>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#7B3F00' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:opacity-80"
              style={{ color: '#F5F5DC' }}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/apply" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:opacity-80"
              style={{ color: '#F5F5DC' }}
              onClick={() => setMenuOpen(false)}
            >
              Apply
            </NavLink>
            <NavLink 
              to="/apply-with-filter" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:opacity-80"
              style={{ color: '#F5F5DC' }}
              onClick={() => setMenuOpen(false)}
            >
    
              Application Status
            </NavLink>
          </div>
          <div className="px-4 py-3">
            <p className="text-sm" style={{ color: '#D2B48C' }}>
              Bridging the gap between talent and opportunity
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;