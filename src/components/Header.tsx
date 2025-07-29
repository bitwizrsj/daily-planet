import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const sections = [
  { label: 'Home', path: '/' },
  { label: 'LexWatch', path: '/lexwatch', highlight: true },
  { label: 'Hero Tracker', path: '/tracker' },
  { label: 'Reporters', path: '/reporters' },
  { label: 'Archives', path: '/archives' },
  { label: 'Contact Me', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Info Bar */}
      <div className="w-full bg-gray-100 border-b border-gray-200 text-center py-1 text-xs text-gray-600 font-serif tracking-wide">
        Hi, I'm Rohit, a web developer and die-hard DC fan, building these sites to one day get hired by James Gunn for their DCU.
      </div>

      {/* Top Bar */}
      <div className="bg-white w-full border-b border-gray-200 md:static sticky top-0 z-50">
        <div className="relative max-w-4xl mx-auto flex items-center justify-center px-4 py-2">

          {/* Quote - only on md+ */}
          <span
            className="hidden md:inline-block absolute left-0 text-xs font-serif italic text-gray-800"
            style={{
              border: '1.5px solid #888',
              borderRadius: '3px',
              padding: '4px 8px',
              fontWeight: 500,
              boxShadow: '1px 1px 0 #888, -1px -1px 0 #888',
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
              lineHeight: 1.1,
            }}
          >
            "The Voice of<br />Metropolis"
            {/* Decorative corners */}
            <span style={{
              position: 'absolute', left: 2, top: 2,
              width: 12, height: 2, background: '#888',
              borderRadius: 1, transform: 'rotate(-20deg)'
            }} />
            <span style={{
              position: 'absolute', right: 2, top: 2,
              width: 12, height: 2, background: '#888',
              borderRadius: 1, transform: 'rotate(20deg)'
            }} />
            <span style={{
              position: 'absolute', left: 2, bottom: 2,
              width: 12, height: 2, background: '#888',
              borderRadius: 1, transform: 'rotate(20deg)'
            }} />
            <span style={{
              position: 'absolute', right: 2, bottom: 2,
              width: 12, height: 2, background: '#888',
              borderRadius: 1, transform: 'rotate(-20deg)'
            }} />
          </span>

          {/* Mobile Menu Icon (left side on mobile only) */}
          <button
            className="block md:hidden absolute left-0 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="The Daily Planet"
              className="w-44 md:w-[300px] object-contain"
            />
          </Link>

          {/* Search Icon (right side, always shown) */}
          <button
            className="absolute right-0 p-2"
            aria-label="Search"
          >
            <Search className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Sticky Navbar only on large screens */}
      <header className="hidden md:block bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center py-0 px-4">
          <nav className="flex flex-1 justify-center space-x-6 w-full">
            {sections.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                className={`text-sm font-serif uppercase tracking-wide px-2 py-3 hover:underline transition-colors ${
                  location.pathname === section.path
                    ? 'text-black underline underline-offset-4'
                    : section.highlight
                    ? 'text-red-700'
                    : 'text-gray-700'
                }`}
              >
                {section.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 sticky top-[100px] z-30">
          <nav className="flex flex-col px-4 py-2 space-y-1">
            {sections.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-serif text-left py-2 px-2 rounded hover:bg-gray-100 ${
                  section.highlight ? 'text-red-700' : 'text-gray-800'
                }`}
              >
                {section.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;