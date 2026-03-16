import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Mascot from './components/Mascot';

function App() {
  return (
    <div className="relative min-h-screen bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSJyZ2JhKDAsMCwwLDAuMDUpIi8+Cjwvc3ZnPg==')] overflow-x-hidden">
      <CustomCursor />
      <Mascot />
      <Navbar />
      
      <main className="max-w-[1920px] mx-auto w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="py-8 border-t-4 border-black text-center font-fredoka bg-white relative z-10">
        <p className="text-lg">Made with 💙 and 🍕 by Vansh Raturi &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
