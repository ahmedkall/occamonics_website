import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import HomePage from './pages/HomePage';
import ClientExperiencePage from './pages/ClientExperiencePage';
import TrustAccountingPage from './pages/TrustAccountingPage';
import CompanyPage from './pages/CompanyPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <div className={`min-h-screen bg-[#001F2B] transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/client-experience" element={<ClientExperiencePage />} />
        <Route path="/trust-accounting" element={<TrustAccountingPage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
