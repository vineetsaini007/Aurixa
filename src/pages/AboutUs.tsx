import React, { useRef, useEffect } from 'react';
import { Users, Target, Award, Globe, ArrowRight, Heart, Lightbulb, Shield } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const handleBookCall = () => {
    // Open Cal.com booking page
    window.open('https://cal.com/aurixaa', '_blank');}

const AboutUs = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && pageRef.current) {
      // Page entrance animation
      gsap.fromTo(pageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Animate sections on scroll
      const sections = pageRef.current.querySelectorAll('section');
      sections.forEach((section, index) => {
        gsap.fromTo(section.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships based on trust and mutual growth.'
    },
    {
      icon: Shield,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in everything we do, ensuring premium results every time.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions help businesses worldwide achieve their digital transformation goals.'
    }
  ];

  
  

  return (
    <div className="pt-16" ref={pageRef}>
      {/* Hero Section */}
      <section className="py-24 bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-golden-600 text-white font-medium text-sm mb-6">
              <Users size={16} />
              <span>About Aurixa</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transforming
              <span className="block text-golden-500">Digital Futures</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a comprehensive digital solutions company dedicated to elevating businesses through cutting-edge technology, strategic growth, and creative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300">
              <Target className="text-golden-400 mb-6" size={48} />
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To empower businesses worldwide by delivering innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections between brands and their audiences. We believe in the transformative power of technology when combined with strategic thinking and creative excellence.
              </p>
            </div>
            
            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300">
              <Award className="text-golden-400 mb-6" size={48} />
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To be the global leader in comprehensive digital transformation, setting new standards for innovation, quality, and client success. We envision a future where every business, regardless of size, has access to world-class digital solutions that propel them toward unprecedented growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300 hover:bg-golden-500/5 text-center"
              >
                <div className="p-4 rounded-lg bg-golden-600 text-white w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-golden-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     



      {/* Stats */}
      <section className="py-24 bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
           
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-400">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Let's work together to transform your business and achieve extraordinary results.
            </p>
            <button className="group bg-golden-600 hover:bg-golden-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto transform hover:scale-105 hover:shadow-xl hover:shadow-golden-500/25"
              onClick={handleBookCall}>
              <span>Get Started Today</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;