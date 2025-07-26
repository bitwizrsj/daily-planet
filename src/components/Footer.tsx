import React from 'react';
import { Globe, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold font-serif">The Daily Planet</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Metropolis's most trusted news source, providing fearless journalism in the age of superheroes.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sections</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Breaking News
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('lexwatch')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LexWatch
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tracker')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Hero Tracker
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('archives')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Archives
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Opinion
                </a>
              </li>
            </ul>
          </div>

          {/* Reporters */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Team</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-300">Perry White - Editor-in-Chief</span>
              </li>
              <li>
                <span className="text-gray-300">Lois Lane - Senior Reporter</span>
              </li>
              <li>
                <span className="text-gray-300">Clark Kent - Staff Reporter</span>
              </li>
              <li>
                <span className="text-gray-300">Cat Grant - Entertainment</span>
              </li>
              <li>
                <span className="text-gray-300">Jimmy Olsen - Photographer</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">1938 Sullivan Lane, Metropolis, NY</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">(555) PLANET-1</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">news@dailyplanet.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Tip Line</h5>
              <p className="text-xs text-gray-400 mb-2">
                "If you see something, say something (before it flies off)."
              </p>
              <button className="bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors">
                Submit Anonymous Tip
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              <span>© 2025 The Daily Planet. All rights reserved.</span>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors">Fortress of Terms</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors">Subscriptions</a>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                Apply to Intern
              </button>
              <p className="text-xs text-gray-500">
                (Warning: May involve dodging explosions)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;