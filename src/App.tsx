import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Article from './components/Article';
import ReporterProfile from './components/ReporterProfile';
import LexWatch from './components/LexWatch';
import HeroTracker from './components/HeroTracker';
import Archives from './components/Archives';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ReportersPage from './components/ReportersPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/article" element={<Article />} />
          <Route path="/reporters" element={<ReportersPage />} />
          <Route path="/reporter/:reporterId" element={<ReporterProfile />} />
          <Route path="/lexwatch" element={<LexWatch />} />
          <Route path="/tracker" element={<HeroTracker />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;