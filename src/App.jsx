import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useTheme from './hooks/useTheme';

// Layout sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';

// UI components
import ParticleBackground from './components/UI/ParticleBackground';
import LoadingScreen from './components/UI/LoadingScreen';

function PortfolioMain() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Testimonials />
      <Statistics />
      <Contact />
    </>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate startup assets load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden selection:bg-accent/30">
        <ParticleBackground />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        {/* Main Content Area */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<PortfolioMain />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}
