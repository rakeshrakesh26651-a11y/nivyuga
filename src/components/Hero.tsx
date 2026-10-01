'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { SparkleIcon } from './Icons';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.6'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.7'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          cardRef.current,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          '-=0.5'
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
          '-=1.2'
        );

      // Scroll parallax effect on the hero model image
      gsap.to(imageRef.current, {
        y: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-6 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Text & Hero Product Card */}
        <div className="lg:col-span-6 z-10 flex flex-col justify-center">
          <p
            ref={tagRef}
            className="text-[15px] font-medium text-[#717f5d] tracking-wide mb-4 uppercase"
          >
            — 100% Natural Ingredients
          </p>

          <h1
            ref={titleRef}
            className="font-serif text-[44px] sm:text-[56px] lg:text-[62px] text-[#4a5b35] uppercase leading-[1.05] tracking-tight mb-5"
          >
            Glow Naturally
            <br />
            With Niyuga
          </h1>

          <p
            ref={descRef}
            className="text-[17px] sm:text-[18px] text-[#717f5d] leading-relaxed max-w-lg mb-8"
          >
            Organic skincare &amp; haircare made with natural ingredients. Handcrafted
            chemical-free formulas designed to nourish, protect, and illuminate.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="#shop"
              className="inline-flex items-center justify-center bg-[#4a5b35] text-[#fffff5] text-[15px] font-medium uppercase tracking-wide px-8 py-3 rounded-full hover:bg-[#3d4b2b] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              Shop Products
            </Link>
            <a
              href="https://instagram.com/niyugacosmetics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent border border-[#4a5b35] text-[#4a5b35] text-[15px] font-medium uppercase tracking-wide px-8 py-3 rounded-full hover:bg-[#4a5b35]/5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              DM to Order
            </a>
          </div>

          {/* Floating Hero Product Card: Avocado Triple Whitening Cream */}
          <div
            ref={cardRef}
            className="bg-[#e4e7d8] border border-[#cfd1b4] rounded-[24px] p-4 sm:p-5 max-w-[370px] shadow-sm flex items-center gap-4 group cursor-pointer hover:border-[#4a5b35] transition-all hover:shadow-md"
          >
            <div className="relative w-16 h-20 shrink-0 flex items-center justify-center bg-[#f7f7e4] rounded-xl p-1.5 border border-[#cfd1b4]/60 overflow-hidden">
              <span className="absolute top-1 left-1 z-10 bg-[#4a5b35] text-[#fffff5] text-[8px] font-medium tracking-wider px-1.5 py-0.5 rounded-full flex items-center gap-0.5 uppercase">
                <SparkleIcon className="w-2 h-2 text-[#fffff5]" />
                Organic
              </span>
              <Image
                src="/images/bestseller-2-cream.png"
                alt="Avocado Triple Whitening Cream"
                width={70}
                height={80}
                className="object-contain max-h-full mt-3 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-serif text-[19px] text-[#4a5b35] leading-tight mb-1 truncate">
                Avocado Triple Whitening Cream
              </h2>
              <p className="text-[13px] text-[#717f5d] leading-snug line-clamp-1 mb-2">
                100% natural formula for pure radiance &amp; deep care
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-semibold text-[#4a5b35] uppercase tracking-wider bg-[#f7f7e4] px-2.5 py-0.5 rounded-full border border-[#cfd1b4]/50">
                  DM to Order
                </span>
                <span className="text-[11px] font-medium text-[#717f5d] uppercase tracking-wider">
                  No COD
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Model Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div
            ref={imageRef}
            className="relative w-full max-w-[560px] aspect-[4/4.2] sm:aspect-[4/3.8] lg:aspect-[4/4] rounded-[36px] overflow-hidden"
          >
            <Image
              src="/images/hero-model.png"
              alt="Niyuga Cosmetics Natural Skin Glow"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
