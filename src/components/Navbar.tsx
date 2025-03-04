import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, isMenuOpen, toggleMenu }) => {
  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'countdown', label: 'Countdown' },
    { id: 'tech-spardha', label: 'Tech Spardha' },
    { id: 'kala-utsav', label: 'Kala Utsav' },
    { id: 'rang-riwaaz', label: 'Rang Riwaaz' },
    { id: 'fashion-mela', label: 'Fashion Mela' },
    { id: 'thrill-arena', label: 'Thrill Arena' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleMenu();
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-yellow-400">
            TEJANTA <span className="text-white">2025</span>
          </a>
          
          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.id ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="#register"
              onClick={() => scrollToSection('register')}
              className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition-colors"
            >
              Register Now
            </a>
            
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-yellow-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.id ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#register"
                onClick={() => scrollToSection('register')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition-colors text-center"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;