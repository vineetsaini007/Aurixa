import React, { useRef, useEffect } from 'react';
import { Code, Smartphone, Users, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const handleBookCall = () => {
    // Open Cal.com booking page
    window.open('https://cal.com/aurixaa', '_blank');}

gsap.registerPlugin(ScrollTrigger);

const AuraLabs = () => {
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
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored enterprise solutions built with modern frameworks and scalable architecture',
      features: ['Full-stack development', 'Cloud-native architecture', 'API integration', 'Database design'],
      metric: '300% faster deployment'
    },
    {
      icon: Smartphone,
      title: 'Website & Mobile Development',
      description: 'Responsive, user-centric applications with cutting-edge features and seamless UX',
      features: ['React/React Native', 'Progressive Web Apps', 'Cross-platform compatibility', 'Performance optimization'],
      metric: '95% user satisfaction'
    },
    {
      icon: Users,
      title: 'AI Agent Development',
      description: 'Intelligent automation and conversational AI solutions that enhance productivity',
      features: ['Natural language processing', 'Machine learning models', 'Automated workflows', 'Smart integrations'],
      metric: '80% task automation'
    }
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow', 'OpenAI', 'GraphQL'
  ];

  const projects = [
    {
      title: 'Enterprise Analytics Platform',
      description: 'Real-time data visualization and business intelligence solution',
      tech: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
      result: '300% faster insights'
    },
    {
      title: 'AI-Powered Customer Service',
      description: 'Intelligent chatbot with natural language understanding',
      tech: ['Python', 'TensorFlow', 'OpenAI', 'FastAPI'],
      result: '85% query resolution'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure, user-friendly financial management application',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      result: '4.9★ app store rating'
    }
  ];

  return (
    <div className="pt-16" ref={pageRef}>
      {/* Hero Section */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-golden-600 text-white font-medium text-sm mb-6">
              <Code size={16} />
              <span>AuraLabs</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Technology
              <span className="block text-golden-500">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge technology solutions that drive innovation and transform your business operations with AI-powered systems and scalable architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
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
                  <span className="text-white font-semibold">{service.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks for modern development
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-black/70 backdrop-filter backdrop-blur-sm rounded-full border border-white/10 hover:border-golden-500/30 hover:bg-golden-500/5 text-gray-300 hover:text-white transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing our latest technology innovations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300 hover:bg-golden-500/5 group"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-black/50 backdrop-filter backdrop-blur-sm border border-white/10 text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white font-semibold">{project.result}</span>
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-golden-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <Zap className="mx-auto text-golden-400 mb-6" size={48} />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Let's discuss how AuraLabs can accelerate your digital transformation with cutting-edge solutions.
            </p>
            <button className="group bg-golden-600 hover:bg-golden-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto transform hover:scale-105 hover:shadow-xl hover:shadow-golden-500/25" 
                    onClick={handleBookCall}  >
              <span>Start Your Project</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuraLabs;