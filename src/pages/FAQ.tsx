import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
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

  const categories = [
    { id: 'general', label: 'General' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'process', label: 'Process' },
    { id: 'support', label: 'Support' }
  ];

  const faqs = {
    general: [
      {
        question: 'What is Aurixa and what do you do?',
        answer: 'Aurixa is a comprehensive digital solutions company with three specialized divisions: AuraLabs (technology solutions), AuraBoost (digital growth), and AuraStudios (creative services). We help businesses transform their digital presence through cutting-edge technology, strategic marketing, and creative excellence.'
      },
      {
        question: 'How long has Aurixa been in business?',
        answer: 'Aurixa was founded in 2018 and has been serving clients worldwide for over 6 years. We have successfully delivered 500+ projects and maintain a 98% client satisfaction rate.'
      },
      {
        question: 'What industries do you work with?',
        answer: 'We work with businesses across all industries including technology, healthcare, finance, e-commerce, manufacturing, education, and more. Our solutions are tailored to meet the specific needs of each industry and business size.'
      },
      {
        question: 'Do you work with small businesses or only large enterprises?',
        answer: 'We work with businesses of all sizes, from startups and small businesses to large enterprises. Our scalable solutions and flexible engagement models allow us to serve clients regardless of their size or budget.'
      }
    ],
    services: [
      {
        question: 'What services does AuraLabs provide?',
        answer: 'AuraLabs specializes in custom software development, website and mobile app development, and AI agent development. We build scalable, modern solutions using cutting-edge technologies and frameworks.'
      },
      {
        question: 'What does AuraBoost offer for digital marketing?',
        answer: 'AuraBoost provides comprehensive digital marketing services including SEO optimization, digital advertising (Google Ads, social media ads), brand marketing strategy, content marketing, and conversion rate optimization.'
      },
      {
        question: 'What creative services does AuraStudios provide?',
        answer: 'AuraStudios offers video production and editing, brand identity design, logo creation, social media content strategy, photography, motion graphics, and comprehensive creative campaigns.'
      },
      {
        question: 'Can I work with multiple divisions for a comprehensive solution?',
        answer: 'Absolutely! Many of our clients work with multiple divisions for integrated solutions. For example, we might develop a website (AuraLabs), create a marketing strategy (AuraBoost), and produce video content (AuraStudios) for a complete digital transformation.'
      }
    ],
    pricing: [
      {
        question: 'How do you structure your pricing?',
        answer: 'Our pricing varies based on project scope, complexity, and timeline. We offer both project-based pricing and retainer models. After understanding your requirements, we provide detailed proposals with transparent pricing and no hidden fees.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans. Typically, we require a 50% deposit to begin work and the remaining balance upon completion. For larger projects, we can arrange milestone-based payments.'
      },
      {
        question: 'What is included in your pricing?',
        answer: 'Our pricing includes all development/creative work, project management, quality assurance, initial revisions, and basic training. Ongoing maintenance and support can be arranged separately or as part of a retainer agreement.'
      },
      {
        question: 'Do you provide free consultations?',
        answer: 'Yes, we offer free initial consultations to understand your needs and discuss how we can help. This includes a project assessment and strategic recommendations with no obligation.'
      }
    ],
    process: [
      {
        question: 'What is your typical project timeline?',
        answer: 'Project timelines vary based on scope and complexity. Simple websites may take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the proposal phase and keep you updated throughout the project.'
      },
      {
        question: 'How do you ensure project quality?',
        answer: 'We follow rigorous quality assurance processes including code reviews, testing phases, client feedback loops, and final quality checks. Each project is assigned a dedicated project manager to ensure standards are met.'
      },
      {
        question: 'How involved will I be in the project process?',
        answer: 'We believe in collaborative partnerships. You\'ll be involved in key decision points, regular progress updates, and feedback sessions. We use project management tools to keep you informed and engaged throughout the process.'
      },
      {
        question: 'What happens after project completion?',
        answer: 'After completion, we provide training, documentation, and a warranty period. We also offer ongoing maintenance, support, and enhancement services to ensure your solution continues to perform optimally.'
      }
    ],
    support: [
      {
        question: 'What kind of support do you provide after launch?',
        answer: 'We offer comprehensive post-launch support including technical support, maintenance, updates, performance monitoring, and enhancement services. Support packages can be customized based on your needs.'
      },
      {
        question: 'How quickly do you respond to support requests?',
        answer: 'We pride ourselves on rapid response times. Critical issues are addressed within 2-4 hours, while general support requests are handled within 24 hours during business days.'
      },
      {
        question: 'Do you provide training for our team?',
        answer: 'Yes, we provide comprehensive training for your team on how to use and manage your new systems. This includes documentation, video tutorials, and hands-on training sessions as needed.'
      },
      {
        question: 'Can you help with ongoing digital strategy?',
        answer: 'Absolutely! Many clients work with us on an ongoing basis for digital strategy, marketing campaigns, content creation, and system enhancements. We become an extension of your team.'
      }
    ]
  };

  const filteredFAQs = faqs[activeCategory as keyof typeof faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="pt-16" ref={pageRef}>
      {/* Hero Section */}
      <section className="py-24 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-golden-600 text-white font-medium text-sm mb-6">
              <HelpCircle size={16} />
              <span>FAQ</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked
              <span className="block text-golden-500">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Find answers to common questions about our services, process, and how we can help transform your business.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-black/70 backdrop-filter backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenQuestion(null);
                  setSearchTerm('');
                }}
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

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-2xl border border-white/10 hover:border-golden-500/30 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-golden-500/5 rounded-2xl transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    {openQuestion === index ? (
                      <ChevronUp className="text-golden-400 flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                    )}
                  </button>
                  
                  {openQuestion === index && (
                    
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400">
                  Try adjusting your search terms or browse different categories.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/70 backdrop-filter backdrop-blur-sm rounded-3xl p-12 border border-white/10 text-center">
            <MessageCircle className="mx-auto text-golden-400 mb-6" size={48} />
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Can't find the answer you're looking for? Our team is here to help you with any questions about our services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/50 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Mail className="mx-auto text-golden-400 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-400 mb-4">Get detailed answers via email</p>
                <a
                  href="mailto:hello@aurixa.com"
                  className="text-golden-400 hover:text-golden-300 transition-colors duration-300"
                >
                  hello@aurixa.com
                </a>
              </div>
              
              <div className="bg-black/50 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <MessageCircle className="mx-auto text-golden-400 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-400 mb-4">Chat with our team in real-time</p>
                <button className="bg-golden-600 hover:bg-golden-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;