import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onReporterSelect: (reporter: string) => void;
}

const sections = [
  { label: 'Home', page: '' },
  { label: 'LexWatch', page: 'lexwatch', highlight: true },
  { label: 'Hero Tracker', page: 'tracker' },
  { label: 'Archives', page: 'archives' },
];

const reporters = [
  { name: 'Lois Lane', key: 'lois' },
  { name: 'Clark Kent', key: 'clark' },
  { name: 'Cat Grant', key: 'cat' },
];

const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onReporterSelect,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleReporterClick = (reporter: string) => {
    onReporterSelect(reporter);
    onNavigate('reporter');
    setIsMenuOpen(false);
  };

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
              fontFamily: 'Georgia, Times, \"Times New Roman\", serif',
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
          <img
            src={logo}
            alt="The Daily Planet"
            className="w-44 md:w-[300px] object-contain"
          />

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
              <button
                key={section.page}
                onClick={() => onNavigate(section.page)}
                className={`text-sm font-serif uppercase tracking-wide px-2 py-3 hover:underline transition-colors ${
                  currentPage === section.page
                    ? 'text-black underline underline-offset-4'
                    : section.highlight
                    ? 'text-red-700'
                    : 'text-gray-700'
                }`}
              >
                {section.label}
              </button>
            ))}

            {/* Reporters dropdown */}
            <div className="relative group">
              <button className="text-sm font-serif uppercase tracking-wide px-2 py-3 hover:underline text-gray-700">
                Reporters
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white border border-gray-200 shadow-lg rounded min-w-40 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity z-20">
                {reporters.map((r) => (
                  <button
                    key={r.key}
                    onClick={() => handleReporterClick(r.key)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 sticky top-[100px] z-30">
          <nav className="flex flex-col px-4 py-2 space-y-1">
            {sections.map((section) => (
              <button
                key={section.page}
                onClick={() => {
                  onNavigate(section.page);
                  setIsMenuOpen(false);
                }}
                className={`text-base font-serif text-left py-2 px-2 rounded hover:bg-gray-100 ${
                  section.highlight ? 'text-red-700' : 'text-gray-800'
                }`}
              >
                {section.label}
              </button>
            ))}
            <div className="border-t border-gray-200 my-2" />
            <span className="text-xs text-gray-500 font-serif px-2 py-1">Reporters</span>
            {reporters.map((r) => (
              <button
                key={r.key}
                onClick={() => handleReporterClick(r.key)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                {r.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
