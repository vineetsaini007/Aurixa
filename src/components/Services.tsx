import React, { useState, useRef, useEffect } from 'react';
import { Code, TrendingUp, Palette, Smartphone, Search, Megaphone, Video, Users, ArrowRight, Sparkles, Zap, Target, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && sectionRef.current) {
      // Header animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Services content animation
      gsap.fromTo(servicesRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.3 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    } else {
      setIsVisible(true);
    }
  }, []);

  const services = [
    {
      id: 0,
      title: 'AuraLabs',
      subtitle: 'Technology Solutions',
      description: 'Cutting-edge technology solutions that drive innovation and transform your business operations with AI-powered systems.',
      color: 'white',
      icon: Code,
      decorativeIcon: Zap,
      link: '/AuraLabs',
      offerings: [
        { 
          icon: Code, 
          title: 'Custom Software Development', 
          description: 'Tailored enterprise solutions built with modern frameworks and scalable architecture',
          metric: '300% faster deployment'
        },
        { 
          icon: Smartphone, 
          title: 'Website & Mobile Development', 
          description: 'Responsive, user-centric applications with cutting-edge features and seamless UX',
          metric: '95% user satisfaction'
        },
        { 
          icon: Users, 
          title: 'AI Agent Development', 
          description: 'Intelligent automation and conversational AI solutions that enhance productivity',
          metric: '80% task automation'
        }
      ]
    },
    {
      id: 1,
      title: 'AuraBoost',
      subtitle: 'Digital Growth',
      description: 'Strategic digital marketing solutions designed to accelerate your business growth and market dominance.',
      color: 'white',
      icon: TrendingUp,
      decorativeIcon: Target,
      link: '/AuraBoost',
      offerings: [
        { 
          icon: Search, 
          title: 'SEO Optimization', 
          description: 'Data-driven strategies to improve search rankings and organic visibility',
          metric: '400% traffic increase'
        },
        { 
          icon: Megaphone, 
          title: 'Digital Advertising', 
          description: 'Targeted campaigns across multiple platforms with precision audience targeting',
          metric: '250% ROI improvement'
        },
        { 
          icon: TrendingUp, 
          title: 'Brand Marketing & Strategy', 
          description: 'Comprehensive marketing solutions and strategic positioning for market leadership',
          metric: '180% brand awareness'
        }
      ]
    },
    {
      id: 2,
      title: 'AuraStudios',
      subtitle: 'Creative Services',
      description: 'Professional creative services that bring your brand vision to life with stunning visual storytelling and immersive experiences.',
      color: 'white',
      icon: Palette,
      decorativeIcon: Sparkles,
      link: '/AuraStudios',
      offerings: [
        { 
          icon: Video, 
          title: 'Video Production & Editing', 
          description: 'Professional video content for all your marketing needs with cinematic quality',
          metric: '350% engagement boost'
        },
        { 
          icon: Palette, 
          title: 'Brand Identity Design', 
          description: 'Logos, visual guidelines, and comprehensive brand assets that resonate',
          metric: '200% brand recognition'
        },
        { 
          icon: Users, 
          title: 'Social Media & Content Strategy', 
          description: 'Engaging multimedia content and community management that drives results',
          metric: '500% follower growth'
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-5" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20" ref={headerRef}>
          <div className="inline-flex items-center space-x-2 text-white mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm font-medium tracking-wider uppercase">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Three Divisions,
            <span className="block text-white">
              Infinite Possibilities
            </span>
          </h2>
          
        </div>

        <div ref={servicesRef}>
          {/* Service Navigation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="flex bg-white/10 backdrop-filter backdrop-blur-sm rounded-xl p-1 border border-white/20">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`relative flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeService === index
                        ? 'text-black shadow-lg bg-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <service.icon size={18} />
                    <span className="hidden sm:block">{service.title}</span>
                  </button>
                ))}
              </div>
              
              {/* Floating Text */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="bg-white/20 backdrop-filter backdrop-blur-sm rounded-lg px-3 py-2 border border-white/30">
                  <span className="text-white text-sm font-medium whitespace-nowrap">
                    Click to check other services
                  </span>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Service Content */}
          <div className="relative">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`transition-all duration-700 ${
                  activeService === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  {/* Service Information */}
                  <div className="space-y-8">
                    {/* Service Header */}
                    <div className="space-y-6">
                      <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white text-black font-medium text-sm">
                        <service.icon size={16} />
                        <span>{service.title}</span>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-bold text-white">
                        {service.subtitle}
                      </h3>
                      
                     
                    </div>

                    {/* Service Offerings */}
                    <div className="space-y-4">
                      {service.offerings.map((offering, idx) => (
                        <div
                          key={idx}
                          className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/20"
                        >
                          <div className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="p-3 rounded-lg bg-white text-black flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <offering.icon size={20} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between mb-3">
                                  <h4 className="text-lg font-semibold text-white group-hover:text-white transition-colors duration-300">
                                    {offering.title}
                                  </h4>
                                  
                                </div>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                  {offering.description}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                      <button className="group flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-3 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg" 
                      onClick={() => navigate(service.link)}
                      >
                        <span>Explore {service.title}</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Display */}
                  <div className="relative hidden lg:block">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20">
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
                          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative p-12 rounded-2xl bg-white shadow-2xl transform hover:scale-105 transition-all duration-500">
                          <service.icon size={64} className="text-black" />
                          
                          <div className="absolute -top-3 -right-3">
                            <div className="p-2 rounded-full bg-gray-200 text-black animate-bounce" style={{ animationDelay: '0.5s' }}>
                              <service.decorativeIcon size={16} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 pointer-events-none">
                        {service.offerings.map((_, idx) => (
                          <div
                            key={idx}
                            className="absolute w-1.5 h-1.5 bg-white rounded-full animate-ping"
                            style={{
                              top: `${20 + idx * 25}%`,
                              left: `${15 + idx * 20}%`,
                              animationDelay: `${idx * 0.8}s`,
                              animationDuration: '2s'
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute -bottom-6 left-0 right-0 flex justify-between space-x-4">
                      {service.offerings.slice(0, 2).map((offering, idx) => (
                        <div
                          key={idx}
                          className="bg-white/10 backdrop-filter backdrop-blur-sm rounded-lg p-4 border border-white/20 flex-1"
                        >
                          <div className="text-white font-bold text-lg">
                            {offering.metric}
                          </div>
                          <div className="text-gray-300 text-sm">
                            {offering.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;