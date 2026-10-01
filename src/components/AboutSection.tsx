'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { PurityIcon, HonestyIcon, GentlenessIcon, ResultsIcon } from './Icons';

const features = [
  {
    title: '100% Natural',
    description: 'Natural botanical ingredients carefully chosen for everyday skin & hair wellness.',
    icon: PurityIcon,
  },
  {
    title: 'Chemical-Free',
    description: 'Organic skin and haircare made without harsh chemicals or heavy synthetics.',
    icon: HonestyIcon,
  },
  {
    title: 'Glow Naturally',
    description: 'Gentle, nourishing care designed to reveal your genuine, healthy radiance.',
    icon: GentlenessIcon,
  },
  {
    title: 'DM to Order',
    description: 'Direct and personal ordering via @niyugacosmetics on Instagram. NO COD policy.',
    icon: ResultsIcon,
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        featuresRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current[0],
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Top 2-Column Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left: Narrative & Stats */}
          <div ref={leftColRef} className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-[15px] font-medium text-[#717f5d] tracking-wide mb-4 uppercase">
              — About Niyuga Cosmetics
            </p>
            <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[54px] text-[#4a5b35] uppercase leading-[1.08] tracking-tight mb-6">
              Organic Care To
              <br />
              Help You Glow Naturally
            </h2>
            <p className="text-[16px] sm:text-[17px] text-[#717f5d] leading-relaxed mb-10 max-w-lg">
              NIYUGA COSMETICS focuses on natural skincare and haircare products
              with an emphasis on natural ingredients and chemical-free care.
              Our organic formulations are created to nourish and protect, helping
              you achieve a healthy and natural glow every single day.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-12 pt-6 border-t border-[#e7e9d4]">
              <div>
                <span className="font-serif text-[42px] sm:text-[48px] text-[#4a5b35] leading-none block mb-1">
                  1000+
                </span>
                <span className="text-[15px] text-[#717f5d] font-medium">
                  Happy Customers
                </span>
              </div>
              <div>
                <span className="font-serif text-[42px] sm:text-[48px] text-[#4a5b35] leading-none block mb-1">
                  100%
                </span>
                <span className="text-[15px] text-[#717f5d] font-medium">
                  Natural Ingredients
                </span>
              </div>
            </div>
          </div>

          {/* Right: Dewy Model Portrait */}
          <div ref={rightColRef} className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-[4/4.5] rounded-[36px] overflow-hidden bg-[#e4e7d8]/40 shadow-sm">
              <Image
                src="/images/about-model.png"
                alt="Niyuga Cosmetics Dewy Skin"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>
          </div>
        </div>

        {/* Bottom 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#e7e9d4]">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                ref={(el) => {
                  featuresRef.current[index] = el;
                }}
                className="flex flex-col gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#e4e7d8] flex items-center justify-center text-[#4a5b35] mb-2 group-hover:bg-[#4a5b35] group-hover:text-[#fffff5] transition-colors duration-300">
                  <Icon className="w-5 h-5" color="currentColor" />
                </div>
                <h3 className="font-serif text-[24px] text-[#4a5b35] uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-[#717f5d] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
