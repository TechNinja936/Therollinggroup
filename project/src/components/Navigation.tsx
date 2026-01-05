import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">The Rolling Group</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/proposal"
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-all duration-200 shadow-sm"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-emerald-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/proposal"
              className="block text-center bg-emerald-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
