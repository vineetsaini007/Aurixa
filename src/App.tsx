import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { useState, useEffect , useRef } from 'react';
import PageTransition from './components/PageTransition';
//import Balatro from './components/Balatro';
import Home from './pages/Home';
import AuraLabs from './pages/AuraLabs';
import AuraBoost from './pages/AuraBoost';
import AuraStudios from './pages/AuraStudios';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import FAQ from './pages/FAQ';
import HeroSplineBackground from './components/HeroSplineBackground';
import { gsap } from 'gsap';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    // Small delay to ensure loader exit animation starts
    setTimeout(() => {
      setShowMainContent(true);
      
      // Animate main content entrance
      if (mainContentRef.current) {
        gsap.fromTo(mainContentRef.current,
          {
            opacity: 0,
            scale: 1.05,
            clipPath: 'circle(0% at 50% 50%)'
          },
          {
            opacity: 1,
            scale: 1,
            clipPath: 'circle(100% at 50% 50%)',
            duration: 1,
            ease: "power2.out"
          }
        );
      }
    }, 100);
  };

  // Show loader for at least 2 seconds
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      // This ensures minimum load time, but actual completion is handled by Loader component
    }, 2000);

    return () => clearTimeout(minLoadTime);
  }, []);

  if (isLoading) {
    return <Loader onComplete={handleLoadingComplete} />;
  }

  return (
    
    <Router>
      <div className="min-h-screen relative overflow-hidden">
    
        <div className="fixed top-0 left-0 w-screen h-screen z-0 ">
       <HeroSplineBackground />

        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Navigation />
          <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auralabs" element={<AuraLabs />} />
            <Route path="/auraboost" element={<AuraBoost />} />
            <Route path="/aurastudios" element={<AuraStudios />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          </PageTransition>
          <Footer />
        </div>
      </div>
    </Router>
  
  );
}

export default App;