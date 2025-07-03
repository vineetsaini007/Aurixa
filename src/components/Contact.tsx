import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

      // Content animation with stagger
      gsap.fromTo(contentRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@aurixaa.com',
      subtext: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 9811331427',
      subtext: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'New Delhi, India',
      subtext: 'Schedule a meeting'
    }
  ];

  return (
    <section id="contact" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" ref={headerRef}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Create
            <span className="block text-white">
              Something Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16" ref={contentRef}>
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-filter backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent/20 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="auralabs">AuraLabs - Technology</option>
                    <option value="auraboost">AuraBoost - Digital Growth</option>
                    <option value="aurastudios">AuraStudios - Creative</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, goals, and how we can help you succeed..."
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-xl"
              >
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group flex items-start space-x-6 p-6 rounded-xl bg-white/10 backdrop-filter backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 border border-white/20 hover:border-white/40"
              >
                <div className="p-4 rounded-lg bg-white text-black group-hover:scale-110 transition-transform duration-300">
                  <info.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg text-white font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-gray-300">
                    {info.subtext}
                  </p>
                </div>
              </div>
            ))}

            {/* Additional Info Cards */}
            <div className="grid gap-6 mt-8">
              <div className="p-6 rounded-xl bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="text-white" size={24} />
                  <h3 className="text-lg font-semibold text-white">Quick Response</h3>
                </div>
                <p className="text-gray-300">
                  We pride ourselves on rapid response times and clear communication throughout your project.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="text-white" size={24} />
                  <h3 className="text-lg font-semibold text-white">Dedicated Team</h3>
                </div>
                <p className="text-gray-300">
                  Your project gets a dedicated team of experts from our three specialized divisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;