import React from 'react';
import { RippleProvider } from './context/RippleContext';
import { InteractiveBg } from './components/InteractiveBg';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Expertise } from './sections/Expertise';
import { Certifications } from './sections/Certifications';
import { Projects } from './sections/Projects';
import { CurrentFocus } from './sections/CurrentFocus';
import { Timeline } from './sections/Timeline';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <RippleProvider>
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-awsOrange selection:text-black antialiased">
        {/* Immersive Canvas & Particle Background */}
        <InteractiveBg />

        {/* Navigation Header */}
        <Navbar />

        {/* Main Experience Layout */}
        <main className="relative z-10 w-full overflow-hidden">
          <Hero />
          <About />
          <Expertise />
          <Certifications />
          <Projects />
          <CurrentFocus />
          <Timeline />
          <Contact />
        </main>

        {/* Premium Footer */}
        <Footer />
      </div>
    </RippleProvider>
  );
}

export default App;
