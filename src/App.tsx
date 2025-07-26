import React, { useState } from 'react';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Article from './components/Article';
import ReporterProfile from './components/ReporterProfile';
import LexWatch from './components/LexWatch';
import HeroTracker from './components/HeroTracker';
import Archives from './components/Archives';
import Footer from './components/Footer';

type Page = 'home' | 'article' | 'reporter' | 'lexwatch' | 'tracker' | 'archives';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedReporter, setSelectedReporter] = useState<string>('lois');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={setCurrentPage} />;
      case 'article':
        return <Article onNavigate={setCurrentPage} />;
      case 'reporter':
        return <ReporterProfile reporter={selectedReporter} onNavigate={setCurrentPage} />;
      case 'lexwatch':
        return <LexWatch onNavigate={setCurrentPage} />;
      case 'tracker':
        return <HeroTracker onNavigate={setCurrentPage} />;
      case 'archives':
        return <Archives onNavigate={setCurrentPage} />;
      default:
        return <Homepage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        onReporterSelect={setSelectedReporter}
      />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;