import React, { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

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

      // Testimonial content animation
      gsap.fromTo(testimonialRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechVision",
      company: "TechVision Solutions",
      content: "Aurixa transformed our digital presence completely. Their AuraLabs team delivered a custom solution that exceeded our expectations, while AuraBoost's marketing strategies increased our online visibility by 300%.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder",
      company: "GrowthCorp",
      content: "The team at AuraStudios created a brand identity that perfectly captures our vision. Their creative expertise combined with strategic insight from AuraBoost has been instrumental in our rapid growth.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Thompson",
      role: "Marketing Director",
      company: "InnovateHub",
      content: "Working with Aurixa has been a game-changer. Their comprehensive approach across technology, growth, and creative services provided us with everything we needed under one roof. Exceptional quality and service.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "FutureScale",
      content: "The AI solutions developed by AuraLabs have revolutionized our operations. Their technical expertise is matched only by their commitment to understanding our unique business needs. Truly remarkable partnership.",
      rating: 5,
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" ref={headerRef}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Client
            <span className="block text-golden-500">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from the leaders who've transformed their businesses with our expertise
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={testimonialRef}>
          {/* Main testimonial */}
          <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-3xl p-12 relative overflow-hidden border border-white/10">
            <div className="absolute top-6 left-6 text-golden-400/30">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-1 mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-golden-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-white leading-relaxed text-center mb-12 font-light">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-golden-500/30"
                />
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-golden-400 font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Golden glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-golden-600/5 to-golden-500/5 opacity-50"></div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-black/70 backdrop-filter backdrop-blur-sm border border-white/10 hover:border-golden-500/30 hover:bg-golden-500/10 text-white transition-all duration-300 hover:scale-110 transform"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-golden-500 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-black/70 backdrop-filter backdrop-blur-sm border border-white/10 hover:border-golden-500/30 hover:bg-golden-500/10 text-white transition-all duration-300 hover:scale-110 transform"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;