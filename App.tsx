import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmailSidebar from './components/EmailSidebar';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      
      {/* UI Layer - Z-index 10 to sit above background */}
      <div className="relative z-10 min-h-screen flex flex-col font-sans text-charcoal selection:bg-verdanza selection:text-charcoal">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <EmailSidebar />
      </div>
    </Router>
  );
};

export default App;