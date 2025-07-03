import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && pageRef.current && overlayRef.current) {
      // Scroll to top immediately
      window.scrollTo(0, 0);
      
      // Create transition timeline
      const tl = gsap.timeline();
      
      // Initial state - page hidden
      gsap.set(pageRef.current, { 
        opacity: 0, 
        y: 30,
        scale: 0.98
      });
      
      // Overlay animation
      gsap.set(overlayRef.current, {
        scaleY: 0,
        transformOrigin: 'top'
      });
      
      tl.to(overlayRef.current, {
        scaleY: 1,
        duration: 0.4,
        ease: "power2.inOut"
      })
      .to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: 'bottom',
        duration: 0.4,
        ease: "power2.inOut"
      }, "+=0.1")
      .to(pageRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.3");
      
    } else {
      // Fallback for reduced motion - just scroll to top
      window.scrollTo(0, 0);
      if (pageRef.current) {
        gsap.set(pageRef.current, { opacity: 1, y: 0, scale: 1 });
      }
    }
  }, [location.pathname]);

  return (
    <>
      {/* Transition overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-black pointer-events-none"
        style={{ transform: 'scaleY(0)' }}
      />
      
      {/* Page content */}
      <div ref={pageRef} className="opacity-0">
        {children}
      </div>
    </>
  );
};

export default PageTransition;