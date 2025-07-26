import React, { useState } from 'react';
import { Globe, Search, Menu, X, Zap } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onReporterSelect: (reporter: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onReporterSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBreaking, setShowBreaking] = useState(true);

  const handleReporterClick = (reporter: string) => {
    onReporterSelect(reporter);
    onNavigate('reporter');
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Breaking News Bar */}
      {showBreaking && (
        <div className="bg-red-600 text-white px-4 py-2 text-sm">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 animate-bounce" />
              <span className="font-semibold">BREAKING:</span>
              <span>Hi, I'm Rohit, a web developer and die-hard DC fan, building these sites to one day get hired by James Gunn for their DCU.
</span>
            </div>
            <button 
              onClick={() => setShowBreaking(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="relative">
                <Globe className="w-8 h-8 text-yellow-400 animate-spin-slow group-hover:animate-spin" />
                <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold font-serif">The Daily Planet</h1>
                <p className="text-sm text-gray-300">Metropolis • Est. 1938</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => onNavigate('home')}
                className={`hover:text-yellow-400 transition-colors ${
                  currentPage === 'home' ? 'text-yellow-400' : ''
                }`}
              >
                Home
              </button>
              <div className="relative group">
                <button className="hover:text-yellow-400 transition-colors">
                  Reporters
                </button>
                <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                  <button
                    onClick={() => handleReporterClick('lois')}
                    className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                  >
                    Lois Lane
                  </button>
                  <button
                    onClick={() => handleReporterClick('clark')}
                    className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                  >
                    Clark Kent
                  </button>
                  <button
                    onClick={() => handleReporterClick('cat')}
                    className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                  >
                    Cat Grant
                  </button>
                </div>
              </div>
              <button
                onClick={() => onNavigate('lexwatch')}
                className={`hover:text-yellow-400 transition-colors ${
                  currentPage === 'lexwatch' ? 'text-yellow-400' : ''
                }`}
              >
                LexWatch
              </button>
              <button
                onClick={() => onNavigate('tracker')}
                className={`hover:text-yellow-400 transition-colors ${
                  currentPage === 'tracker' ? 'text-yellow-400' : ''
                }`}
              >
                Hero Tracker
              </button>
              <button
                onClick={() => onNavigate('archives')}
                className={`hover:text-yellow-400 transition-colors ${
                  currentPage === 'archives' ? 'text-yellow-400' : ''
                }`}
              >
                Archives
              </button>
              <Search className="w-5 h-5 cursor-pointer hover:text-yellow-400 transition-colors" />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-700 text-white">
          <div className="px-4 py-2 space-y-2">
            <button
              onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 hover:text-yellow-400"
            >
              Home
            </button>
            <div className="border-l-2 border-yellow-400 pl-4">
              <button
                onClick={() => handleReporterClick('lois')}
                className="block w-full text-left py-1 hover:text-yellow-400"
              >
                Lois Lane
              </button>
              <button
                onClick={() => handleReporterClick('clark')}
                className="block w-full text-left py-1 hover:text-yellow-400"
              >
                Clark Kent
              </button>
              <button
                onClick={() => handleReporterClick('cat')}
                className="block w-full text-left py-1 hover:text-yellow-400"
              >
                Cat Grant
              </button>
            </div>
            <button
              onClick={() => { onNavigate('lexwatch'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 hover:text-yellow-400"
            >
              LexWatch
            </button>
            <button
              onClick={() => { onNavigate('tracker'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 hover:text-yellow-400"
            >
              Hero Tracker
            </button>
            <button
              onClick={() => { onNavigate('archives'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 hover:text-yellow-400"
            >
              Archives
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;