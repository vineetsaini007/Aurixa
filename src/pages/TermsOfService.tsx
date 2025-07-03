import React, { useRef, useEffect } from 'react';
import { FileText, Scale, AlertTriangle, Shield, Users, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TermsOfService = () => {
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
      icon: Users,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using our services, you accept and agree to be bound by these terms',
        'If you do not agree to these terms, you may not use our services',
        'We reserve the right to modify these terms at any time with notice',
        'Continued use of our services constitutes acceptance of modified terms'
      ]
    },
    {
      icon: FileText,
      title: 'Services Description',
      content: [
        'We provide technology solutions, digital marketing, and creative services',
        'Services are provided "as is" and subject to availability',
        'We reserve the right to modify or discontinue services with notice',
        'Service specifications and deliverables are defined in individual agreements'
      ]
    },
    {
      icon: Scale,
      title: 'User Responsibilities',
      content: [
        'You must provide accurate and complete information when using our services',
        'You are responsible for maintaining the confidentiality of your account',
        'You agree not to use our services for any unlawful or prohibited purposes',
        'You must comply with all applicable laws and regulations'
      ]
    },
    {
      icon: Shield,
      title: 'Intellectual Property',
      content: [
        'All content and materials on our website are protected by intellectual property laws',
        'You may not reproduce, distribute, or create derivative works without permission',
        'Client work products are owned by the client upon full payment',
        'We retain rights to general methodologies and know-how developed'
      ]
    }
  ];

  return (
    <div className="pt-16" ref={pageRef}>
      {/* Hero Section */}
      <section className="py-24 bg-">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-golden-600 text-white font-medium text-sm mb-6">
              <Scale size={16} />
              <span>Terms of Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of
              <span className="block text-golden-500">Service</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              These terms govern your use of our services and establish the legal framework for our business relationship. Please read them carefully.
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
              <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Payment terms are specified in individual service agreements. Generally, we require:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• 50% deposit before project commencement</li>
                  <li>• Remaining balance upon project completion</li>
                  <li>• Net 30 payment terms for ongoing services</li>
                  <li>• Late payment fees may apply after 30 days</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Limitation of Liability</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  To the maximum extent permitted by law, Aurixa shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                </p>
                <p>
                  Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim.
                </p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Confidentiality</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We maintain strict confidentiality regarding all client information and project details. We will not disclose confidential information to third parties without your express written consent.
                </p>
                <p>
                  Both parties agree to protect confidential information and use it solely for the purpose of providing or receiving services under our agreement.
                </p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Either party may terminate services with written notice as specified in the service agreement. Upon termination:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• All outstanding payments become immediately due</li>
                  <li>• Work completed to date will be delivered upon payment</li>
                  <li>• Confidentiality obligations continue indefinitely</li>
                  <li>• Each party returns or destroys confidential information</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Dispute Resolution</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
                <p>
                  The arbitration shall take place in San Francisco, California, and shall be conducted in English.
                </p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden-500/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="text-golden-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Important Notice</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      These terms constitute the entire agreement between you and Aurixa regarding the use of our services. They supersede all prior agreements and understandings.
                    </p>
                    <p>
                      If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16">
            <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <Mail className="mx-auto text-golden-400 mb-6" size={48} />
              <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these terms of service, please contact our legal team.
              </p>
              <div className="space-y-2 text-gray-400">
                <p>Email: legal@aurixa.com</p>
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

export default TermsOfService;