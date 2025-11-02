import React from 'react';
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
import Accommodation from './pages/Travel/Accommodation';
import Places from './pages/Travel/Places';
import About from './pages/General/About';
import Contact from './pages/General/Contact';
import FAQ from './pages/General/FAQ';
import Partners from './pages/General/Partners';
import Sponsors from './pages/Sponsors';
import EccentricBackground from './components/EccentricBackground';

export default function App(){ 
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative">
        <div className="sticky top-0 z-50">
          <Header />
          <Navbar />
        </div>
        <EccentricBackground />
        <main className="flex-grow container mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/registration" element={<RegistrationHome/>} />
            <Route path="/registration/code-of-conduct" element={<CodeOfConduct/>} />
            <Route path="/program" element={<Program/>} />
            <Route path="/travel" element={<TravelHome/>} />
            <Route path="/travel/venue" element={<Venue/>} />
            <Route path="/travel/accommodation" element={<Accommodation/>} />
            <Route path="/travel/places" element={<Places/>} />
            <Route path="/general/about" element={<About/>} />
            <Route path="/general/contact" element={<Contact/>} />
            <Route path="/general/faq" element={<FAQ/>} />
            <Route path="/general/partners" element={<Partners/>} />
            <Route path="/sponsors" element={<Sponsors/>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
