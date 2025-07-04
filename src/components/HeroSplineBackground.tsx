
"use client";

import { useLocation } from 'react-router-dom';

import { Suspense, lazy } from 'react'
// @ts-ignore
const Spline = lazy(() => import('@splinetool/react-spline'))

const HeroSplineBackground = () => {

  const location = useLocation();
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      pointerEvents: 'auto',
      overflow: 'hidden',
    }}>
      <Suspense fallback={<div>Loading Spline...</div>}>
        <Spline
          style={{
            width: '100%',
            height: '100vh',
            pointerEvents: 'auto',
          }}
          key ={location.pathname} // Ensure the Spline component re-renders on route change
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
          pointerEvents: 'auto',
        }}
      />
    </div>
  );
}

export default HeroSplineBackground;