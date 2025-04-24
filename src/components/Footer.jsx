const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-6">
        <div className="max-w-6xl mx-auto">
          
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <p className="mb-1">Email: hello@sixthnexus.com</p>
              <p className="mb-1">Phone: +254 712 345678</p>
              <p>Location: Moringa School, Nairobi</p>
            </div>
            
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 transition">Internship Programs</a></li>
              </ul>
            </div>
            
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300 transition">Facebook</a>
                <a href="#" className="hover:text-blue-300 transition">Twitter</a>
                <a href="#" className="hover:text-blue-300 transition">LinkedIn</a>
              </div>
            </div>
          </div>
          
          
          <div className="pt-4 border-t border-gray-700 text-center">
          <p>© 2025 Sixth Nexus. Made with ❤️ at Moringa</p>
          </div>
          
        </div>
      </footer>
    );
  };
  
  export default Footer;