'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { PlayPauseIcon, SparkleIcon } from './Icons';

const instagramFeed = [
  {
    id: 1,
    title: 'Customer Result',
    subtitle: 'Glowing skin achieved with 100% natural ingredients',
    image: '/images/service-1-glow.jpeg',
    tag: 'Real Result',
  },
  {
    id: 2,
    title: 'Avocado Cream Packaging',
    subtitle: 'Our bestselling triple whitening formula ready to dispatch',
    image: '/images/bestseller-2-cream.png',
    tag: 'Product',
  },
  {
    id: 3,
    title: 'Skincare Demonstration',
    subtitle: 'Gentle chemical-free daily routine for radiant skin',
    image: '/images/service-3-hydra.jpeg',
    tag: 'Demonstration',
  },
  {
    id: 4,
    title: 'Customer Review',
    subtitle: '1000+ satisfied customers experiencing natural care',
    image: '/images/service-2-analysis.png',
    tag: 'Review',
  },
  {
    id: 5,
    title: 'Haircare Ritual',
    subtitle: 'Nourishing herbal formula for root-to-tip strength',
    image: '/images/service-4-peel.jpeg',
    tag: 'Haircare',
  },
  {
    id: 6,
    title: 'Natural Botanical Care',
    subtitle: 'Chemical-free skin and haircare crafted with organic love',
    image: '/images/service-5-barrier.jpeg',
    tag: 'Organic',
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skincare"
      ref={containerRef}
      className="py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[15px] font-medium text-[#717f5d] tracking-wide mb-3 uppercase">
            — Instagram @niyugacosmetics
          </p>
          <h2 className="font-serif text-[36px] sm:text-[46px] md:text-[52px] text-[#4a5b35] uppercase leading-[1.1] tracking-tight mb-4">
            1000+ Happy Customers
            <br />
            Glow Naturally
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[#717f5d] mb-8">
            Follow our Instagram journey for authentic customer results, skincare
            routines, and chemical-free beauty tips.
          </p>
          <a
            href="https://instagram.com/niyugacosmetics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#4a5b35] text-[#fffff5] text-[14px] font-medium uppercase tracking-wide px-8 py-3 rounded-full hover:bg-[#3d4b2b] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Follow @niyugacosmetics
          </a>
        </div>

        {/* 3-Column Instagram Visual Feed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24">
          {instagramFeed.map((item, index) => (
            <a
              key={item.id}
              href="https://instagram.com/niyugacosmetics"
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="bg-[#e4e7d8] border border-[#cfd1b4] rounded-[28px] overflow-hidden p-3.5 transition-all duration-300 hover:border-[#4a5b35] group flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square rounded-[22px] overflow-hidden bg-[#f7f7e4] mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
                <span className="absolute top-3 left-3 bg-[#4a5b35]/85 backdrop-blur-xs text-[#fffff5] text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <SparkleIcon className="w-2.5 h-2.5 text-[#fffff5]" />
                  {item.tag}
                </span>
              </div>

              {/* Feed Text */}
              <div className="px-3 pb-2">
                <h3 className="font-serif text-[22px] sm:text-[24px] text-[#4a5b35] uppercase tracking-tight mb-1 group-hover:text-[#3d4b2b] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#717f5d] leading-relaxed mb-3">
                  {item.subtitle}
                </p>
                <div className="flex items-center justify-between text-[11px] font-semibold text-[#4a5b35] uppercase tracking-wider pt-2 border-t border-[#cfd1b4]/40">
                  <span>@niyugacosmetics</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    View on Instagram →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Full-Width Video Showcase Banner */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[32px] overflow-hidden bg-[#4a5b35] shadow-lg group">
          <video
            ref={videoRef}
            src="/videos/showcase.mp4"
            poster="/images/video-poster.png"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Interactive Play/Pause Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              onClick={togglePlay}
              className="pointer-events-auto w-16 h-16 rounded-full border-2 border-white/80 bg-white/15 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform duration-200 shadow-lg cursor-pointer"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              <PlayPauseIcon
                isPlaying={isPlaying}
                className="w-6 h-6 text-white"
                color="#ffffff"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
