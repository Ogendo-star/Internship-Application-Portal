import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Sixth Nexus</h3>
            <p className="text-sm text-gray-400">
              Connecting talented individuals with leading companies to bridge the skills gap and create mutual growth opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-cyan-400 transition duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/apply" className="text-sm hover:text-cyan-400 transition duration-200">
                  Apply
                </a>
              </li>
              <li>
                <a href="/apply-with-filter" className="text-sm hover:text-cyan-400 transition duration-200">
                  Application Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">
              Email: info@sixthnexus.com<br />
              Phone: +2547 00 777 937<br />
              Address: Nairobi, Tech City
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Sixth Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
