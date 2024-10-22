import React from 'react';
import Header from './components/Header/Header';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import './style/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundery from './components/ErrorBoundery';

const App = () => {
  return (
    <BrowserRouter basename="portfolio">
      <Header />
      <Routes>
        <Route ErrorBoundary={<ErrorBoundery />} path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" ErrorBoundary={ErrorBoundery} />
      </Routes>
      <Footer />
    </BrowserRouter>

    // <div className="container">
    //   <Header />
    //   <main className="wrapper">
    //     <Hero />
    //     <About />
    //     <Projects />
    //     <Skills />
    //     <Contact />
    //   </main>
    //   <Footer />
    // </div>
  );
};

export default App;
