import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start exit animation after a short delay
    const timer = setTimeout(() => {
      handleLoadingComplete();
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    if (!loaderRef.current) return;

    // Create exit animation timeline
    const exitTl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // Animate loader elements out
    exitTl
      .to('.loader-content', {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in"
      })
      .to('.particle', {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.in"
      }, "-=0.4")
      .to(loaderRef.current, {
        clipPath: 'circle(0% at 50% 50%)',
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.2");
  };

  useEffect(() => {
    // Animate the loader elements on mount
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set('.loader-logo', { opacity: 0, scale: 0.5, y: 20 });
    gsap.set('.loader-text', { opacity: 0, y: 20 });
    
    tl.to('.loader-logo', {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    })
    .to('.loader-text', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    // Animate particles continuously
    gsap.to('.particle', {
      y: -100,
      opacity: 0,
      duration: 2,
      repeat: -1,
      stagger: {
        amount: 2,
        from: "random"
      },
      ease: "power2.out",
      onComplete: function() {
        // Reset particle position
        gsap.set(this.targets(), { y: 100, opacity: 0.3 });
      }
    });

  }, []);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      style={{ clipPath: 'circle(100% at 50% 50%)' }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `100%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Gradient background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-50" />

      {/* Main loader content */}
      <div className="loader-content relative z-10 text-center">
        {/* Logo */}
        <div className="loader-logo mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
            Aurixa
          </h1>
        </div>

        {/* Loading text */}
        <div className="loader-text space-y-2">
          <p className="text-xl text-gray-300 font-light">
            Digital Excellence Redefined
          </p>
          <p className="text-sm text-gray-400">
            Preparing your experience...
          </p>
        </div>
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  );
};

export default Loader;