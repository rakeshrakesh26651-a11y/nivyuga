'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const orbitItems = [
  { id: 1, src: '/images/orbit-1.png', alt: 'Natural skincare serum' },
  { id: 2, src: '/images/orbit-2.png', alt: 'Glowing customer result' },
  { id: 3, src: '/images/orbit-3.png', alt: 'Organic face cream' },
  { id: 4, src: '/images/orbit-4.png', alt: 'Natural skincare treatment' },
  { id: 5, src: '/images/orbit-5.png', alt: 'Botanical hair treatment' },
  { id: 6, src: '/images/orbit-6.png', alt: 'Natural glow experience' },
];

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const orbitContainerRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);
  const [mounted, setMounted] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Split text scroll animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0.7, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'top 40%',
              scrub: 0.8,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Continuous 3D Elliptical Orbit Loop
  useEffect(() => {
    let currentAngle = 0;
    const speed = 0.005; // Smooth continuous orbit speed

    const animate = () => {
      currentAngle += speed;
      setAngle(currentAngle);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 px-6 overflow-hidden relative"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Section Tag */}
        <p className="text-[15px] font-medium text-[#717f5d] tracking-wide mb-6 uppercase">
          — Organic Skin &amp; Haircare
        </p>

        {/* Narrative Headline */}
        <h2
          ref={textRef}
          className="font-serif text-[28px] sm:text-[36px] md:text-[42px] text-[#4a5b35] leading-[1.3] max-w-[900px] mx-auto mb-10 font-normal"
        >
          Pure natural ingredients, chemical-free formulas, and daily rituals
          crafted to help your skin &amp; hair glow naturally. Trusted by 1000+
          happy customers.
        </h2>

        {/* Brand Trust Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-20">
          {[
            '100% Natural Ingredients',
            '1000+ Happy Customers',
            'Chemical-Free Skincare & Haircare',
            'NO COD • DM TO ORDER',
          ].map((trust) => (
            <span
              key={trust}
              className="bg-[#e4e7d8] border border-[#cfd1b4] text-[#4a5b35] text-[13px] sm:text-[14px] font-medium px-4 py-1.5 rounded-full shadow-xs"
            >
              {trust}
            </span>
          ))}
        </div>

        {/* 3D Orbit Revolving Gallery */}
        <div
          ref={orbitContainerRef}
          className="relative w-full max-w-[900px] h-[280px] sm:h-[340px] mx-auto flex items-center justify-center select-none"
        >
          {orbitItems.map((item, idx) => {
            const itemAngle = (mounted ? angle : 0) + (idx * 2 * Math.PI) / orbitItems.length;
            // Responsive Elliptical calculations
            const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;
            const rx = isMobile ? 160 : 320;
            const ry = isMobile ? 28 : 42;
            const x = Math.sin(itemAngle) * rx;
            const y = Math.cos(itemAngle) * ry;

            // Depth calculation: cos(itemAngle) ranges from -1 (back) to +1 (front)
            const depth = (Math.cos(itemAngle) + 1) / 2; // 0 to 1
            const scale = 0.45 + depth * 0.55; // 0.45 to 1.0
            const opacity = 0.35 + depth * 0.65; // 0.35 to 1.0
            const zIndex = Math.round(depth * 100);

            return (
              <div
                key={item.id}
                className="absolute top-1/2 left-1/2 will-change-transform transition-opacity duration-150"
                style={{
                  transform: `translate(-50%, -50%) translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0px) scale(${scale.toFixed(2)})`,
                  zIndex,
                  opacity: Number(opacity.toFixed(2)),
                }}
              >
                <div className="w-[140px] sm:w-[190px] h-[190px] sm:h-[250px] bg-[#e4e7d8] border border-[#cfd1b4] rounded-[24px] overflow-hidden p-3 shadow-sm hover:border-[#4a5b35]/60 transition-colors flex items-center justify-center">
                  <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-[#f7f7e4] flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="220px"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
