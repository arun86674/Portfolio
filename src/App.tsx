import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import CodingJourney from './components/sections/CodingJourney';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import AnimatedBackground from './components/ui/AnimatedBackground';
import MouseGlow from './components/ui/MouseGlow';
import InitialLoader from './components/ui/InitialLoader';
import BackToTop from './components/ui/BackToTop';

export default function App() {
  return (
    <div className="relative min-h-screen bg-midnight-950 text-slate-100 selection:bg-accent-indigo/40 selection:text-white">
      {/* 1. Initial Cinematic Splash Screen */}
      <InitialLoader />

      {/* 2. Ambient Animated Background (Canvas Particles + Gradient Orbs + Grid) */}
      <AnimatedBackground />

      {/* 3. Desktop Interactive Cursor Glow */}
      <MouseGlow />

      {/* 4. Sticky Header Navigation */}
      <Navbar />

      {/* 5. Main Section Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <CodingJourney />
        <Education />
        <Contact />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* 7. Scroll Progress / Back to Top Button */}
      <BackToTop />
    </div>
  );
}
