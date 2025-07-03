import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Mail, Phone, MapPin, ArrowRight,
  Code, TrendingUp, Palette
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Custom Software Development', href: '/auralabs' },
    { name: 'Website Development', href: '/auralabs' },
    { name: 'Mobile App Development', href: '/auralabs' },
    { name: 'AI Agent Development', href: '/auralabs' },
    { name: 'SEO Optimization', href: '/auraboost' },
    { name: 'Digital Advertising', href: '/auraboost' },
    { name: 'Brand Marketing', href: '/auraboost' },
    { name: 'Video Production', href: '/aurastudios' }
  ];

  const resources = [
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Blog', href: '#' },
    { name: 'Whitepapers', href: '#' },
    { name: 'Industry Reports', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'Podcasts', href: '#' },
    { name: 'Success Stories', href: '/portfolio' },
    { name: 'FAQs', href: '/faq' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-white' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-white' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/the.aurixa', color: 'hover:text-white' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-white' }
  ];

  const divisions = [
    {
      name: 'AuraLabs',
      description: 'Technology Solutions',
      icon: Code,
      color: 'bg-white',
      href: '/auralabs'
    },
    {
      name: 'AuraBoost',
      description: 'Digital Growth',
      icon: TrendingUp,
      color: 'bg-white',
      href: '/auraboost'
    },
    {
      name: 'AuraStudios',
      description: 'Creative Services',
      icon: Palette,
      color: 'bg-white',
      href: '/aurastudios'
    }
  ];

  const handleContactClick = () => {
    if (window.location.pathname === '/') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <footer className="bg-white/10 backdrop-filter backdrop-blur-sm border-t border-white/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <Link to="/" className="text-3xl font-bold text-white mb-4 block">
                Aurixa
              </Link>
              <p className="text-gray-300 leading-relaxed">
                Transforming businesses through cutting-edge technology, strategic growth, and creative excellence.
              </p>
            </div>

            {/* Divisions */}
            <div className="space-y-3">
              {divisions.map((division) => (
                <Link
                  key={division.name}
                  to={division.href}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-filter backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 border border-white/20 hover:border-white/40"
                >
                  <div className={`p-2 rounded-lg ${division.color} text-black`}>
                    <division.icon size={16} />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{division.name}</div>
                    <div className="text-gray-300 text-xs">{division.description}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} />
                <span className="text-sm">info@aurixaa.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} />
                <span className="text-sm">+91 9811331427</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} />
                <span className="text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  {item.href === '/#contact' ? (
                    <button
                      onClick={handleContactClick}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" />
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" />
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="text-white font-medium">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-white hover:bg-gray-100 text-black rounded-r-lg transition-colors duration-300">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Aurixa. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-300 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;