import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, Instagram, Mail, ChevronUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CountUp } from '@/utils/CountUp';
import RotatingText from '@/utils/RotatingText';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && contentRef.current) {
      // GSAP entrance animations
      const tl = gsap.timeline();
      
      tl.fromTo(contentRef.current.children, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        }
      );

      // Scroll-triggered animations
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setIsVisible(true),
        onLeave: () => setIsVisible(false),
        onEnterBack: () => setIsVisible(true),
        onLeaveBack: () => setIsVisible(false)
      });
    } else {
      // Fallback for reduced motion
      setIsVisible(true);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowContactDropdown(false);
      }
    };

    if (showContactDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showContactDropdown]);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: () => window.open('https://wa.me/9811331427', '_blank'),
      color: 'hover:bg-green-600/20 hover:text-green-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      action: () => window.open('https://www.instagram.com/the.aurixa', '_blank'),
      color: 'hover:bg-pink-600/20 hover:text-pink-400'
    },
    {
      name: 'Gmail',
      icon: Mail,
      action: () => window.open('mailto:info@aurixaa.com', '_blank'),
      color: 'hover:bg-red-600/20 hover:text-red-400'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-screen py-20">
          
          <div className="space-y-8 text-center max-w-4xl" ref={contentRef}>
            
            <h1 className="font-apple text-5xl md:text-7xl font-bold text-white leading-tight">
              When We Build
              <span className="font-apple block text-transparent bg-clip-text bg-white">
                Others <RotatingText
  texts={['Redesign', 'Panic', 'Copy']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-transparent-300 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
  auto ={true}
  loop={true} 
/>
              </span>
            </h1>
            
            <p className="font-apple text-xl md:text-2xl text-white leading-relaxed">
              Transforming businesses through cutting-edge technology, strategic growth, and creative excellence. 
              We craft digital experiences that captivate and convert.
            </p>
            
            <div className="grid grid-cols-3 gap-8 py-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  <CountUp
                    from={0}
                    to={50}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </div>
                <div className="font-apple text-sm text-white uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white"><CountUp
                    from={0}
                    to={98}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />%</div>
                <div className="font-apple text-sm text-white uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white"><CountUp
                    from={0}
                    to={24}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />/7</div>
                <div className="font-apple text-sm text-white uppercase tracking-wider">Support Available</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button
  onClick={scrollToServices}
  className="group relative inline-flex items-center justify-center
             px-8 py-4 rounded-lg font-medium overflow-hidden
             text-gray-300 transition-all duration-300
             bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40"
>
  {/* Gradient Layer */}
  <span
    className="absolute inset-0 bg-gradient-to-r from-[#3A29FF] via-[#FF94B4] to-[#FF3232]
               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  />

  {/* Content on top of gradient */}
  <span className="font-apple relative z-10 flex items-center space-x-2 text-white">
    <span>Explore Our Services</span>
    <ArrowRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </span>
</button>

              
              <div className="relative" ref={dropdownRef}>
                <button
  onClick={() => setShowContactDropdown(!showContactDropdown)}
  className="font-apple group relative inline-flex items-center justify-center
             px-8 py-4 rounded-lg font-medium overflow-hidden
             text-gray-300 transition-all duration-300
             bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40"
>
  {/* gradient layer */}
  <span
    className="absolute inset-0
               bg-gradient-to-r from-[#3A29FF] via-[#FF94B4] to-[#FF3232]
               opacity-0 group-hover:opacity-100
               transition-opacity duration-300"
  />

  {/* content */}
  <span className="font-apple relative z-10 flex items-center space-x-2 text-white">
    <MessageCircle size={20} />
    <span>Contact&nbsp;Us</span>
    <ChevronUp
      size={16}
      className={`transition-transform duration-300 ${
        showContactDropdown ? 'rotate-180' : ''
      }`}
    />
  </span>
</button>


                {/* Contact Drop-up Menu */}
                {showContactDropdown && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-white/10 backdrop-filter backdrop-blur-sm rounded-lg border border-white/20 shadow-xl z-50">
                    <div className="p-2">
                      {contactOptions.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            option.action();
                            setShowContactDropdown(false);
                          }}
                          className={`w-full flex items-center space-x-3 p-3 rounded-lg text-gray-300 transition-all duration-300 ${option.color}`}
                        >
                          <option.icon size={20} />
                          <span className="font-medium">{option.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;