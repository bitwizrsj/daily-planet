import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 font-serif">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-start mb-4">
              <img
                src={logo}
                alt="The Daily Planet"
                className="h-14 md:h-20 object-contain mb-2"
                style={{ maxWidth: '180px' }}
              />
              <span className="text-xs text-gray-500 tracking-widest font-serif mb-2">
                Metropolis • Est. 1938
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 font-sans">
              Metropolis's most trusted news source, providing fearless journalism in the age of superheroes.
            </p>
            <div className="flex space-x-4 mt-2">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-700 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-red-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-900">Sections</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-700 transition-colors"
                >
                  Breaking News
                </Link>
              </li>
              <li>
                <Link
                  to="/lexwatch"
                  className="text-gray-700 hover:text-red-700 transition-colors"
                >
                  LexWatch
                </Link>
              </li>
              <li>
                <Link
                  to="/tracker"
                  className="text-gray-700 hover:text-blue-700 transition-colors"
                >
                  Hero Tracker
                </Link>
              </li>
              <li>
                <Link
                  to="/archives"
                  className="text-gray-700 hover:text-blue-700 transition-colors"
                >
                  Archives
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-700 transition-colors">
                  Opinion
                </a>
              </li>
            </ul>
          </div>

          {/* Reporters */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-900">Our Team</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-700">Perry White - Editor-in-Chief</span>
              </li>
              <li>
                <span className="text-gray-700">Lois Lane - Senior Reporter</span>
              </li>
              <li>
                <span className="text-gray-700">Clark Kent - Staff Reporter</span>
              </li>
              <li>
                <span className="text-gray-700">Cat Grant - Entertainment</span>
              </li>
              <li>
                <span className="text-gray-700">Jimmy Olsen - Photographer</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-900">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-700">1938 Sullivan Lane, Metropolis, NY</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-700">(555) PLANET-1</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-700">news@dailyplanet.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-slate-900">Tip Line</h5>
              <p className="text-xs text-gray-500 mb-2 font-sans">
                "If you see something, say something (before it flies off)."
              </p>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-sm text-sm font-semibold hover:bg-yellow-400 transition-colors">
                Submit Anonymous Tip
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 font-sans">
              <span>© 2025 The Daily Planet. All rights reserved.</span>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-blue-700 transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-blue-700 transition-colors">Fortress of Terms</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-blue-700 transition-colors">Subscriptions</a>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <button className="bg-blue-700 text-white px-4 py-2 rounded-sm text-sm font-semibold hover:bg-blue-800 transition-colors">
                Apply to Intern
              </button>
              <p className="text-xs text-gray-400 font-sans">
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