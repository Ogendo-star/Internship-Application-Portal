import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const baseLinkStyle = "text-white hover:text-cyan-400 transition duration-200";
  const activeLinkStyle = "text-cyan-400 font-semibold";

  return (
    <nav className="bg-[#0A192F] text-white shadow-md w-full z-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18 items-center">
        
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-white">
              Sixth Nexus
            </NavLink>
            <p className="hidden md:block ml-4 text-sm text-gray-400">
              Bridging the gap between talent and opportunity
            </p>
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : baseLinkStyle
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apply"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : baseLinkStyle
              }
            >
              Apply
            </NavLink>
            <NavLink
              to="/apply-with-filter"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : baseLinkStyle
              }
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
              {menuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
            </button>
          </div>
        </div>
      </div>

  
      {menuOpen && (
        <div className="md:hidden bg-[#0A192F] border-t border-cyan-600">
          <div className="px-4 pt-4 pb-2 space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/apply", label: "Apply" },
              { to: "/apply-with-filter", label: "Application Status" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-300"
                }
                
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
          <div className="px-4 py-3 text-sm text-gray-400 border-t border-cyan-600">
            Bridging the gap between talent and opportunity
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
