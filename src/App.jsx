import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurrentlyStrip from './components/CurrentlyStrip';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollParticles from './components/ScrollParticles';
import ScrollProgress from './components/ScrollProgress';
import { BackgroundBeams } from './components/ui/background-beams';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <ScrollProgress />
      <AnimatedBackground />
      <ScrollParticles />
      <BackgroundBeams className="fixed inset-0 z-0 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <CurrentlyStrip />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

