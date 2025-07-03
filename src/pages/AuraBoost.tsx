import React, { useRef, useEffect } from 'react';
import { TrendingUp, Search, Megaphone, Target, ArrowRight, CheckCircle, BarChart3 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const handleBookCall = () => {
    // Open Cal.com booking page
    window.open('https://cal.com/aurixaa', '_blank');}

const AuraBoost = () => {
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
      icon: Search,
      title: 'SEO Optimization',
      description: 'Data-driven strategies to improve search rankings and organic visibility',
      features: ['Keyword research & analysis', 'On-page optimization', 'Technical SEO audits', 'Content strategy'],
      metric: '400% traffic increase'
    },
    {
      icon: Megaphone,
      title: 'Digital Advertising',
      description: 'Targeted campaigns across multiple platforms with precision audience targeting',
      features: ['Google Ads management', 'Social media advertising', 'Display campaigns', 'Retargeting strategies'],
      metric: '250% ROI improvement'
    },
    {
      icon: TrendingUp,
      title: 'Brand Marketing & Strategy',
      description: 'Comprehensive marketing solutions and strategic positioning for market leadership',
      features: ['Brand positioning', 'Market analysis', 'Competitive research', 'Growth strategies'],
      metric: '180% brand awareness'
    }
  ];

  const platforms = [
    'Google Ads', 'Facebook Ads', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok', 'YouTube', 'Pinterest', 'Snapchat', 'Amazon Ads', 'Bing Ads', 'Reddit'
  ];

  const caseStudies = [
    {
      title: 'E-commerce Growth Campaign',
      description: 'Complete digital transformation for online retail brand',
      metrics: ['450% ROI increase', '300% traffic growth', '180% conversion boost'],
      industry: 'E-commerce'
    },
    {
      title: 'SaaS Lead Generation',
      description: 'B2B marketing strategy for software company',
      metrics: ['600% lead increase', '85% cost reduction', '40% faster sales cycle'],
      industry: 'Technology'
    },
    {
      title: 'Local Business Expansion',
      description: 'Multi-location marketing for service business',
      metrics: ['250% local visibility', '190% appointment bookings', '95% customer retention'],
      industry: 'Services'
    }
  ];

  return (
    <div className="pt-16" ref={pageRef}>
      {/* Hero Section */}
      <section className="py-24 bg-">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-golden-600 text-white font-medium text-sm mb-6">
              <TrendingUp size={16} />
              <span>AuraBoost</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Digital
              <span className="block text-golden-500">Growth</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Strategic digital marketing solutions designed to accelerate your business growth and market dominance through data-driven campaigns and innovative strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500%</div>
              <div className="text-gray-400">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-400">Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Growth Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to accelerate your business growth
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

      {/* Platforms Section */}
      <section className="py-24 bg-">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Marketing Platforms</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage the most effective platforms to maximize your reach and ROI
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-black/70 backdrop-filter backdrop-blur-sm rounded-full border border-white/10 hover:border-golden-500/30 hover:bg-golden-500/5 text-gray-300 hover:text-white transition-all duration-300"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from our digital growth campaigns
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300 hover:bg-golden-500/5 group"
              >
                <div className="inline-block px-3 py-1 bg-golden-600 text-white text-sm rounded-full mb-4">
                  {study.industry}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-golden-400 transition-colors duration-300">
                  {study.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="space-y-3">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <BarChart3 size={16} className="text-golden-400 flex-shrink-0" />
                      <span className="text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 mt-6">
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-golden-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <Target className="mx-auto text-golden-400 mb-6" size={48} />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Let AuraBoost create a custom digital marketing strategy that drives real results for your business.
            </p>
            <button className="group bg-golden-600 hover:bg-golden-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto transform hover:scale-105 hover:shadow-xl hover:shadow-golden-500/25"
              onClick={handleBookCall}>
              <span>Start Growing Today</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuraBoost;