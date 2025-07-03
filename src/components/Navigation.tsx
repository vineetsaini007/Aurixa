import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      // Animate navigation on mount
      gsap.fromTo('.nav-item', 
        { opacity: 0, y: -20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2
        }
      );
    }
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { 
      label: 'Services',
      dropdown: [
        { path: '/auralabs', label: 'AuraLabs - Technology' },
        { path: '/auraboost', label: 'AuraBoost - Growth' },
        { path: '/aurastudios', label: 'AuraStudios - Creative' }
      ]
    },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' }
  ];

  const handleBookCall = () => {
    // Open Cal.com booking page
    window.open('https://cal.com/aurixaa', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'top-4' 
        : ''
    }`}>
      <div className={`transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'max-w-4xl mx-auto px-4' 
          : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
      }`}>
        <div className={`transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-white/10 backdrop-filter backdrop-blur-md border border-white/20 rounded-full shadow-xl'
            : 'bg-transparent'
        } ${isScrolled ? 'h-14' : 'h-16'} flex justify-between items-center ${isScrolled ? 'px-6' : ''}`}>
          
          <div className="flex-shrink-0">
            <Link to="/" className={`nav-item flex items-center space-x-3 font-bold text-white transition-all duration-300 ${
              isScrolled ? 'text-xl' : 'text-2xl'
            }`}>
              <img 
                src="/public/final logo.png" 
                alt="Aurixa Logo" 
                className={`transition-all duration-300 object-contain ${
                  isScrolled ? 'h-8 w-auto' : 'h-10 w-auto'
                }`}
                style={{ aspectRatio: '681/324' }}
              />
              <span>Aurixa</span>
              </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`flex items-baseline transition-all duration-300 ${
              isScrolled ? 'space-x-6' : 'ml-10 space-x-8'
            }`}>
              {navItems.map((item, index) => (
                <div key={index} className="nav-item relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className={`flex items-center space-x-1 px-3 py-2 font-medium text-gray-300 hover:text-white transition-colors duration-1000 ${
                        isScrolled ? 'text-sm' : 'text-sm'
                      }`}>
                        <span>{item.label}</span>
                        <ChevronDown size={16} className={`transition-transform duration-1000 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white/10 backdrop-filter backdrop-blur-sm rounded-lg border border-white/20 shadow-xl">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.path}
                              className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-1000 first:rounded-t-lg last:rounded-b-lg"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-3 py-2 font-medium transition-colors duration-200 ${
                        isScrolled ? 'text-sm' : 'text-sm'
                      } ${
                        location.pathname === item.path
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Book a Call Button */}
              <div className="nav-item">
                <button
                  onClick={handleBookCall}
                  className={`flex items-center space-x-2 bg-white hover:bg-gray-100 text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled ? 'px-3 py-2 text-sm' : 'px-4 py-2'
                  }`}
                >
                  <Calendar size={isScrolled ? 14 : 16} />
                  <span>Book a Call</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden transition-all duration-300 ${
          isScrolled 
            ? 'mt-2 mx-4 bg-white/10 backdrop-filter backdrop-blur-md rounded-2xl border border-white/20' 
            : 'bg-white/10 backdrop-filter backdrop-blur-sm'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.path}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                            onClick={() => {
                              setIsOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Book a Call Button */}
            <button
              onClick={() => {
                handleBookCall();
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 w-full mt-4 bg-white hover:bg-gray-100 text-black px-3 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              <Calendar size={16} />
              <span>Book a Call</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
