import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import RegistrationHome from './pages/Registration/RegistrationHome';
import CodeOfConduct from './pages/Registration/CodeOfConduct';
import Program from './pages/Program';
import TravelHome from './pages/Travel/TravelHome';
import Venue from './pages/Travel/Venue';
import Sponsors from './pages/Sponsors';
import GroupInformation from './pages/GroupInformation';
import OrganisingCommittee from './pages/OrganisingCommittee';
import ErrorPage from './pages/ErrorPage';
import BackgroundCarousel from './components/BackgroundCarousel';
import FloatingButton from './components/FloatingButton';

export default function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const headerRef = useRef(null);
  const navbarContainerRef = useRef(null);

  useEffect(() => {
    const measureNavbar = () => {
      if (navbarContainerRef.current) {
        setNavbarHeight(navbarContainerRef.current.offsetHeight);
      }
    };

    // Initial measure and on resize
    measureNavbar();
    window.addEventListener('resize', measureNavbar);

    // A small delay to ensure everything is rendered for remeasurement, e.g., after route changes
    const timeoutId = setTimeout(measureNavbar, 100);

    return () => {
      window.removeEventListener('resize', measureNavbar);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > headerRef.current.offsetHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router basename="/cws">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div ref={headerRef}>
          <Header/>
        </div>

        {/* Placeholder for the navbar to prevent content jump */}
        <div style={{ height: navbarHeight > 0 ? `${navbarHeight}px` : 'auto' }}>
          <div
            ref={navbarContainerRef}
            className={`z-40 w-full transition-shadow duration-300 ${
              isSticky ? 'fixed top-0' : 'relative'
            }`}
          >
            <Navbar />
          </div>
        </div>

        <BackgroundCarousel />
        <div className="flex-grow relative">
          <Routes>
            <Route path="/" element={
              <div className="overflow-x-hidden">
                <Home />
              </div>
            } />
            <Route path="/registration" element={<RegistrationHome/>} />
            <Route path="/registration/code-of-conduct" element={<CodeOfConduct/>} />
            <Route path="/program" element={<Program/>} />
            <Route path="/travel" element={<TravelHome/>} />
            <Route path="/travel/venue" element={<Venue/>} />
            <Route path="/sponsors" element={<Sponsors/>} />
            <Route path="/group-information" element={<GroupInformation/>} />
            <Route path="/organising-committee" element={<OrganisingCommittee />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
        <FloatingButton />
      </div>
    </Router>
  );
}
