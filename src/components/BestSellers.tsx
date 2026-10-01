'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { CrownIcon, ArrowLeftIcon, ArrowRightIcon } from './Icons';

const bestSellers = [
  {
    id: 1,
    name: 'Avocado Triple Whitening Cream',
    category: 'Skincare',
    tag: 'Top Seller',
    description: 'Signature organic formula for luminous, smooth, and naturally radiant skin.',
    image: '/images/bestseller-2-cream.png',
  },
  {
    id: 2,
    name: 'Natural Face Care Cream',
    category: 'Skincare',
    tag: '100% Natural',
    description: 'Gentle chemical-free daily moisturizing care with pure plant extracts.',
    image: '/images/bestseller-1-serum.png',
  },
  {
    id: 3,
    name: 'Herbal Hair Treatment Oil',
    category: 'Haircare',
    tag: 'Pure Botanical',
    description: 'Root nourishment and strand strength for naturally healthy, glossy hair.',
    image: '/images/bestseller-3-scrub.png',
  },
  {
    id: 4,
    name: 'Organic Clay Skin Treatment',
    category: 'Skincare',
    tag: 'Chemical Free',
    description: 'Clarifying natural mineral clay for clear, energized, and glowing skin.',
    image: '/images/bestseller-4-clay.png',
  },
  {
    id: 5,
    name: 'Natural Shield Daily Care',
    category: 'Skincare',
    tag: 'Daily Essential',
    description: 'Lightweight botanical fluid for all-day hydration and environmental care.',
    image: '/images/bestseller-5-spf.png',
  },
];

export default function BestSellers() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = 370;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="haircare" className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-[15px] font-medium text-[#717f5d] tracking-wide mb-3 uppercase">
            — Best Sellers
          </p>
          <h2 className="font-serif text-[36px] sm:text-[46px] md:text-[52px] text-[#4a5b35] uppercase leading-[1.1] tracking-tight">
            Most Loved Niyuga
            <br />
            Cosmetics Rituals
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-none pb-4 pt-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="snap-start shrink-0 w-[300px] sm:w-[350px] bg-[#e4e7d8] border border-[#cfd1b4] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#4a5b35] hover:shadow-md group"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 bg-[#4a5b35] text-[#fffff5] text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full">
                  <CrownIcon className="w-3 h-3 text-[#fffff5]" />
                  {product.tag}
                </span>
                <span className="text-[11px] font-medium text-[#717f5d] uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative w-full h-[220px] sm:h-[240px] my-3 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="350px"
                />
              </div>

              {/* Title & Description */}
              <div className="pt-4 border-t border-[#cfd1b4]/40 flex flex-col gap-3">
                <div>
                  <h3 className="font-serif text-[22px] sm:text-[24px] text-[#4a5b35] uppercase tracking-tight mb-1 truncate">
                    {product.name}
                  </h3>
                  <p className="text-[13px] text-[#717f5d] leading-snug line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] font-medium text-[#717f5d] uppercase tracking-wider">
                    NO COD
                  </span>
                  <a
                    href="https://instagram.com/niyugacosmetics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#4a5b35] text-[#fffff5] text-[13px] font-medium tracking-wide uppercase px-5 py-2 rounded-full hover:bg-[#3d4b2b] transition-all hover:scale-102"
                  >
                    DM to Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={() => scroll('left')}
            className="w-11 h-11 rounded-full border border-[#cfd1b4] bg-[#e4e7d8] flex items-center justify-center text-[#4a5b35] hover:border-[#4a5b35] hover:bg-[#fffff5] transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            aria-label="Previous Products"
          >
            <ArrowLeftIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-11 h-11 rounded-full border border-[#cfd1b4] bg-[#e4e7d8] flex items-center justify-center text-[#4a5b35] hover:border-[#4a5b35] hover:bg-[#fffff5] transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            aria-label="Next Products"
          >
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
