import React, { useRef, useEffect } from 'react';
import { Shield, Eye, Lock, Users, FileText, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
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
            stagger: 0.1,
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

  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when contacting us or using our services',
        'Technical information about your device and how you interact with our website',
        'Cookies and similar tracking technologies to improve your experience',
        'Communication records when you contact our support team'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our services and customer support',
        'To communicate with you about our services and updates',
        'To analyze website usage and optimize user experience',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share information with trusted service providers who assist our operations',
        'We may disclose information when required by law or to protect our rights',
        'Business transfers may include customer information as part of the assets'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your data',
        'All sensitive information is encrypted during transmission and storage',
        'Regular security audits and updates to maintain protection standards',
        'Limited access to personal information on a need-to-know basis'
      ]
    }
  ];

  return (
    <div className="pt-16" ref={pageRef}>
      {/* Hero Section */}
      <section className="py-24 bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-golden-600 text-white font-medium text-sm mb-6">
              <Shield size={16} />
              <span>Privacy Policy</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Privacy
              <span className="block text-golden-500">Matters to Us</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Last updated: January 2024
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-golden-600 text-white">
                    <section.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-golden-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="mt-16 space-y-12">
            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
              <div className="text-gray-300 space-y-4">
                <p>You have the right to:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Access the personal information we hold about you</li>
                  <li>• Request correction of inaccurate or incomplete information</li>
                  <li>• Request deletion of your personal information</li>
                  <li>• Object to or restrict certain processing of your information</li>
                  <li>• Withdraw consent where processing is based on consent</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
                </p>
                <p>
                  Types of cookies we use include essential cookies for site functionality, analytics cookies to understand usage patterns, and preference cookies to remember your settings.
                </p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Data Retention</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
                </p>
                <p>
                  When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies.
                </p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">International Transfers</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers are conducted in accordance with applicable data protection laws and with appropriate safeguards in place.
                </p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Changes to This Policy</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16">
            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <Mail className="mx-auto text-golden-400 mb-6" size={48} />
              <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this privacy policy or our data practices, please don't hesitate to contact us.
              </p>
              <div className="space-y-2 text-gray-400">
                <p>Email: privacy@aurixa.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;