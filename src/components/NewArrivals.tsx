'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { SparkleIcon } from './Icons';

export interface ProductItem {
  id: number;
  name: string;
  category: 'Skincare' | 'Haircare' | 'All';
  tag: string;
  description: string;
  image: string;
}

const products: ProductItem[] = [
  {
    id: 1,
    name: 'Avocado Triple Whitening Cream',
    category: 'Skincare',
    tag: '100% Natural',
    description: 'Nourishing botanical formula for natural skin radiance & hydration.',
    image: '/images/bestseller-2-cream.png',
  },
  {
    id: 2,
    name: 'Natural Face Care',
    category: 'Skincare',
    tag: 'Chemical Free',
    description: 'Gentle daily face ritual crafted with pure plant-based extracts.',
    image: '/images/arrival-1-foam.png',
  },
  {
    id: 3,
    name: 'Skin Treatment Products',
    category: 'Skincare',
    tag: 'Organic Care',
    description: 'Deep conditioning treatment to restore healthy, balanced skin.',
    image: '/images/arrival-4-toner.png',
  },
  {
    id: 4,
    name: 'Natural Hair Care',
    category: 'Haircare',
    tag: '100% Natural',
    description: 'Restorative herbal formula for natural strength, softness, and shine.',
    image: '/images/arrival-3-butter.png',
  },
  {
    id: 5,
    name: 'Hair Treatment Products',
    category: 'Haircare',
    tag: 'Chemical Free',
    description: 'Intensive scalp and root nourishment with cold-pressed botanical oils.',
    image: '/images/arrival-5-oil.png',
  },
  {
    id: 6,
    name: 'Natural Glow Ritual Pack',
    category: 'Skincare',
    tag: 'Complete Care',
    description: 'All-in-one organic care set crafted for everyday chemical-free beauty.',
    image: '/images/arrival-6-eye.png',
  },
];

export default function NewArrivals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState<'All' | 'Skincare' | 'Haircare'>('All');

  const filteredProducts =
    activeTab === 'All'
      ? products
      : products.filter((p) => p.category === activeTab);

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
            start: 'top 75%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      id="shop"
      ref={containerRef}
      className="py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-[15px] font-medium text-[#717f5d] tracking-wide mb-3 uppercase">
            — Our Collections
          </p>
          <h2 className="font-serif text-[36px] sm:text-[46px] md:text-[52px] text-[#4a5b35] uppercase leading-[1.1] tracking-tight mb-4">
            Organic Skincare &amp; Haircare
          </h2>
          <p className="text-[16px] text-[#717f5d] max-w-xl mx-auto">
            100% natural ingredients, handcrafted chemical-free formulas. Order
            directly via DM.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {(['All', 'Skincare', 'Haircare'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[14px] font-medium px-6 py-2 rounded-full transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#4a5b35] text-[#fffff5] shadow-xs'
                    : 'bg-[#e4e7d8] text-[#4a5b35] border border-[#cfd1b4] hover:bg-[#d8dcc8]'
                }`}
              >
                {tab === 'All' ? 'All Products' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group bg-[#e4e7d8] border border-[#cfd1b4] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#4a5b35] hover:shadow-md hover:-translate-y-1"
            >
              {/* Card Header: Category & Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 bg-[#f7f7e4] text-[#4a5b35] text-[12px] font-medium px-3 py-1 rounded-full border border-[#cfd1b4]/50">
                  <SparkleIcon className="w-3 h-3 text-[#4a5b35]" />
                  {product.tag}
                </span>
                <span className="text-[12px] font-medium text-[#717f5d] uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative w-full h-[220px] sm:h-[240px] my-4 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
              </div>

              {/* Card Footer: Title, Description, and CTA */}
              <div className="pt-4 border-t border-[#cfd1b4]/40 flex flex-col gap-3">
                <div>
                  <h3 className="font-serif text-[22px] sm:text-[24px] text-[#4a5b35] uppercase tracking-tight mb-1 group-hover:text-[#3d4b2b] transition-colors truncate">
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
      </div>
    </section>
  );
}
