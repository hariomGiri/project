import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">TEJANTA 2025</h3>
            <p className="mb-6">
              The premier technical and cultural festival of LNCT, Bhopal. Join us for an unforgettable experience of innovation, creativity, and entertainment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#tech-spardha" className="hover:text-yellow-400 transition-colors">Events</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-yellow-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#register" className="hover:text-yellow-400 transition-colors">Register</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Events</h3>
            <ul className="space-y-3">
              <li>
                <a href="#tech-spardha" className="hover:text-yellow-400 transition-colors">Tech Spardha</a>
              </li>
              <li>
                <a href="#kala-utsav" className="hover:text-yellow-400 transition-colors">Kala Utsav</a>
              </li>
              <li>
                <a href="#rang-riwaaz" className="hover:text-yellow-400 transition-colors">Rang Riwaaz</a>
              </li>
              <li>
                <a href="#fashion-mela" className="hover:text-yellow-400 transition-colors">Fashion Mela</a>
              </li>
              <li>
                <a href="#thrill-arena" className="hover:text-yellow-400 transition-colors">Thrill Arena</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-yellow-400" />
                <a href="mailto:info@tejanta2025.com" className="hover:text-yellow-400 transition-colors">
                  info@tejanta2025.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-yellow-400" />
                <a href="tel:+919876543210" className="hover:text-yellow-400 transition-colors">
                  +91 9876543210
                </a>
              </li>
              <li>
                <p>LNCT Campus, Indore,</p>
                <p>Madhya Pradesh, India</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2025 LNCT Tejanta. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-500">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-yellow-400 transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;