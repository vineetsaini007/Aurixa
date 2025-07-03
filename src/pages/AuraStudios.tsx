import React, { useRef, useEffect } from 'react';
import { Palette, Video, Users, Sparkles, ArrowRight, CheckCircle, Camera, Brush } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const handleBookCall = () => {
    // Open Cal.com booking page
    window.open('https://cal.com/aurixaa', '_blank');}

const AuraStudios = () => {
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
      sections.forEach((section) => {
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

  const services = [
    {
      icon: Video,
      title: 'Video Production & Editing',
      description: 'Professional video content for all your marketing needs with cinematic quality',
      features: ['Corporate videos', 'Product demonstrations', 'Social media content', 'Motion graphics'],
      metric: '350% engagement boost'
    },
    {
      icon: Palette,
      title: 'Brand Identity Design',
      description: 'Logos, visual guidelines, and comprehensive brand assets that resonate',
      features: ['Logo design', 'Brand guidelines', 'Visual identity systems', 'Print materials'],
      metric: '200% brand recognition'
    },
    {
      icon: Users,
      title: 'Social Media & Content Strategy',
      description: 'Engaging multimedia content and community management that drives results',
      features: ['Content planning', 'Social media management', 'Influencer partnerships', 'Community building'],
      metric: '500% follower growth'
    }
  ];

  const creativeServices = [
    'Logo Design', 'Brand Identity', 'Video Production', 'Motion Graphics', 'Photography', 'Illustration', 'Web Design', 'Print Design', 'Packaging', 'Social Media Graphics', 'Infographics', 'Presentations'
  ];

  const portfolio = [
    {
      title: 'Tech Startup Rebrand',
      description: 'Complete visual identity transformation for emerging technology company',
      deliverables: ['Logo design', 'Brand guidelines', 'Website design', 'Marketing materials'],
      result: '300% brand recognition increase'
    },
    {
      title: 'Product Launch Campaign',
      description: 'Multi-platform video campaign for consumer product launch',
      deliverables: ['Commercial video', 'Social media content', 'Product photography', 'Digital ads'],
      result: '2M+ video views'
    },
    {
      title: 'Corporate Documentary',
      description: 'Professional documentary showcasing company culture and values',
      deliverables: ['Documentary film', 'Behind-the-scenes content', 'Employee interviews', 'B-roll footage'],
      result: '95% employee engagement'
    }
  ];

  return (
    <div className="pt-16" ref={pageRef}>
      {/* Hero Section */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-golden-600 text-white font-medium text-sm mb-6">
              <Palette size={16} />
              <span>AuraStudios</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Creative
              <span className="block text-golden-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional creative services that bring your brand vision to life with stunning visual storytelling and immersive experiences that captivate your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-golden-400 mb-2">1000+</div>
              <div className="text-gray-400">Creative Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-golden-400 mb-2">50M+</div>
              <div className="text-gray-400">Content Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-golden-400 mb-2">15+</div>
              <div className="text-gray-400">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Creative Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive creative solutions to elevate your brand and engage your audience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300 hover:bg-golden-500/5"
              >
                <div className="p-4 rounded-lg bg-golden-600 text-white w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-golden-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle size={16} className="text-golden-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-golden-400 font-semibold">{service.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Services Grid */}
      <section className="py-24 bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Create</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to completion, we handle all aspects of creative production
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {creativeServices.map((service, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-black/70 backdrop-filter backdrop-blur-sm rounded-full border border-white/10 hover:border-golden-500/30 hover:bg-golden-500/5 text-gray-300 hover:text-white transition-all duration-300"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24 bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Portfolio Highlights</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing our most impactful creative projects
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300 hover:bg-golden-500/5 group"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-golden-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Deliverables:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-black/50 backdrop-filter backdrop-blur-sm border border-white/10 text-gray-300 text-sm rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-golden-400 font-semibold">{project.result}</span>
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-golden-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Creative Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From initial concept to final delivery, we ensure every project exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Brush, title: 'Concept', description: 'Brainstorming and ideation phase' },
              { icon: Palette, title: 'Design', description: 'Visual development and refinement' },
              { icon: Camera, title: 'Production', description: 'Content creation and execution' },
              { icon: Sparkles, title: 'Delivery', description: 'Final polish and client handoff' }
            ].map((step, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="p-6 rounded-full bg-golden-600 text-white w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <Sparkles className="mx-auto text-golden-400 mb-6" size={48} />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Let AuraStudios create compelling visual content that tells your story and captivates your audience.
            </p>
            <button className="group bg-golden-600 hover:bg-golden-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto transform hover:scale-105 hover:shadow-xl hover:shadow-golden-500/25"
              onClick={handleBookCall}>
              <span>Start Your Creative Project</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuraStudios;