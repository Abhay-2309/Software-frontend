import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/app" className="text-xl font-bold">
              Hackathon 2026
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/app" className="hover:text-blue-600">Home</Link>
            <Link to="/app/about" className="hover:text-blue-600">About</Link>
            <Link to="/app/schedule" className="hover:text-blue-600">Schedule</Link>
            <Link to="/app/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/app" className="block px-3 py-2 hover:bg-gray-100 rounded-md">Home</Link>
            <Link to="/app/about" className="block px-3 py-2 hover:bg-gray-100 rounded-md">About</Link>
            <Link to="/app/schedule" className="block px-3 py-2 hover:bg-gray-100 rounded-md">Schedule</Link>
            <Link to="/app/register" className="block px-3 py-2 bg-blue-600 text-white rounded-md">Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;