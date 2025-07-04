import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Play, ArrowRight, Filter } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const handleBookCall = () => {
    // Open Cal.com booking page
    window.open('https://cal.com/aurixaa', '_blank');}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
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
            stagger: 0.15,
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

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'technology', label: 'Technology' },
    { id: 'growth', label: 'Digital Growth' },
    { id: 'creative', label: 'Creative' }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechVision Platform',
      category: 'technology',
      division: 'AuraLabs',
      description: 'Custom enterprise software solution with AI-powered analytics and real-time data visualization.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
      results: '+300% efficiency increase',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'GrowthCorp Campaign',
      category: 'growth',
      division: 'AuraBoost',
      description: 'Comprehensive digital marketing strategy that transformed brand visibility and customer acquisition.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['SEO', 'PPC', 'Analytics', 'Strategy'],
      results: '+450% ROI increase',
      link: '#'
    },
    {
      id: 3,
      title: 'InnovateHub Rebrand',
      category: 'creative',
      division: 'AuraStudios',
      description: 'Complete brand identity redesign with video content strategy and social media transformation.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Branding', 'Video', 'Social Media', 'Design'],
      results: '+200% engagement boost',
      link: '#',
      video: '#'
    },
    {
      id: 4,
      title: 'FutureScale AI Assistant',
      category: 'technology',
      division: 'AuraLabs',
      description: 'Intelligent conversational AI system with natural language processing and automated workflows.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['AI', 'NLP', 'Automation', 'Python'],
      results: '+80% task automation',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'RetailMax E-commerce',
      category: 'growth',
      division: 'AuraBoost',
      description: 'End-to-end e-commerce optimization with conversion rate improvements and customer journey mapping.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['E-commerce', 'CRO', 'UX/UI', 'Analytics'],
      results: '+275% conversion rate',
      link: '#'
    },
    {
      id: 6,
      title: 'CreativeFlow Studios',
      category: 'creative',
      division: 'AuraStudios',
      description: 'Multi-platform content creation with brand storytelling and immersive video experiences.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Video Production', 'Storytelling', 'Motion Graphics'],
      results: '+350% brand awareness',
      link: '#',
      video: '#'
    },
    {
      id: 7,
      title: 'FinTech Mobile App',
      category: 'technology',
      division: 'AuraLabs',
      description: 'Secure financial management application with biometric authentication and real-time transactions.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['React Native', 'Security', 'FinTech', 'API'],
      results: '4.9★ app store rating',
      link: '#',
      github: '#'
    },
    {
      id: 8,
      title: 'Healthcare SEO Campaign',
      category: 'growth',
      division: 'AuraBoost',
      description: 'Local SEO strategy for healthcare provider resulting in increased patient appointments.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Local SEO', 'Healthcare', 'Content Marketing'],
      results: '+600% local visibility',
      link: '#'
    },
    {
      id: 9,
      title: 'Luxury Brand Campaign',
      category: 'creative',
      division: 'AuraStudios',
      description: 'High-end fashion brand campaign with luxury photography and premium video content.',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Fashion Photography', 'Luxury Branding', 'Video'],
      results: '+400% brand prestige',
      link: '#',
      video: '#'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-16" ref={pageRef}>
      {/* Hero Section */}
      <section className="py-24 bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-golden-600 text-white font-medium text-sm mb-6">
              <Filter size={16} />
              <span>Our Work</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Project
              <span className="block text-golden-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Showcasing exceptional results across technology, growth, and creative solutions that drive real business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
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

      {/* Portfolio Section */}
      <section className="py-24 bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-golden-600 text-white shadow-lg shadow-golden-500/25'
                    : 'bg-black/70 backdrop-filter backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-golden-500/10 hover:text-white hover:border-golden-500/30'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-golden-500/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Division Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-golden-600 text-white text-sm font-medium">
                    {project.division}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <a
                        href={project.link}
                        className="p-2 bg-black/70 backdrop-filter backdrop-blur-sm rounded-full text-white hover:bg-golden-600/80 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="p-2 bg-black/70 backdrop-filter backdrop-blur-sm rounded-full text-white hover:bg-golden-600/80 transition-colors duration-300"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        className="p-2 bg-black/70 backdrop-filter backdrop-blur-sm rounded-full text-white hover:bg-golden-600/80 transition-colors duration-300"
                      >
                        <Play size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-black/50 backdrop-filter backdrop-blur-sm border border-white/10 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-golden-400 font-semibold">
                        {project.results}
                      </span>
                      <ArrowRight size={16} className="text-gray-400 group-hover:text-golden-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="group bg-golden-600 hover:bg-golden-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto transform hover:scale-105 hover:shadow-xl hover:shadow-golden-500/25">
              <span>Load More Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join our portfolio of successful projects and transform your business with our comprehensive solutions.
            </p>
            <button className="group bg-golden-600 hover:bg-golden-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto transform hover:scale-105 hover:shadow-xl hover:shadow-golden-500/25"
              onClick={handleBookCall}>
              <span>Start Your Project</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
