import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import AboutSection from './sections/AboutSection'; // ✅ zmienione tutaj
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <AboutSection /> {/* ✅ zmienione tutaj */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
