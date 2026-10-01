'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { StarIcon } from './Icons';

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Customer Result Visual */}
          <div ref={imageRef} className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-[4/4.2] rounded-[32px] overflow-hidden bg-[#e4e7d8] shadow-sm">
              <Image
                src="/images/testimonial-1.png"
                alt="Niyuga Cosmetics Real Customer Result"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Right: Stars, Quote, and Generic Credential */}
          <div ref={contentRef} className="lg:col-span-6 flex flex-col justify-center">
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1.5 mb-6 text-[#4a5b35]">
              <StarIcon className="w-5 h-5" filled={true} color="#4a5b35" />
              <StarIcon className="w-5 h-5" filled={true} color="#4a5b35" />
              <StarIcon className="w-5 h-5" filled={true} color="#4a5b35" />
              <StarIcon className="w-5 h-5" filled={true} color="#4a5b35" />
              <StarIcon className="w-5 h-5" filled={true} color="#4a5b35" />
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif text-[28px] sm:text-[34px] md:text-[38px] text-[#4a5b35] leading-[1.3] mb-8 font-normal">
              &ldquo;Switching to 100% natural, chemical-free care made a noticeable
              difference. My skin and hair feel nourished, balanced, and genuinely
              healthy.&rdquo;
            </blockquote>

            {/* Generic Customer Result Label */}
            <div>
              <p className="font-serif text-[20px] uppercase text-[#4a5b35] tracking-wide mb-1 font-medium">
                Customer Review
              </p>
              <p className="text-[14px] text-[#717f5d]">
                Real Customer Experience • Verified via @niyugacosmetics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
