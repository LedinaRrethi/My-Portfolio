import React from 'react';
import Header from './pages/Header/Header';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import './style/style.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <main className="wrapper">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
