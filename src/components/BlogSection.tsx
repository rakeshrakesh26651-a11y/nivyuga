'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const journalPosts = [
  {
    id: 1,
    tag: 'Skincare Secrets',
    title: 'Why Chemical-Free Care Matters For Your Skin',
    excerpt: 'Discover the daily benefits of choosing 100% pure organic botanical ingredients.',
    image: '/images/blog-thumb-1.png',
  },
  {
    id: 2,
    tag: 'Haircare Basics',
    title: 'Nourishing Roots With Botanical Care',
    excerpt: 'Essential natural hair routines for lasting strength, softness, and glossy texture.',
    image: '/images/blog-thumb-2.png',
  },
  {
    id: 3,
    tag: 'Organic Rituals',
    title: 'How Avocado Formulas Support Natural Radiance',
    excerpt: 'Gentle hydration and nutrient-dense botanical care that helps you glow naturally.',
    image: '/images/blog-thumb-3.png',
  },
];

export default function BlogSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLAnchorElement>(null);
  const sideCardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mainCardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        sideCardsRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
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
    <section
      id="blogs"
      ref={containerRef}
      className="py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-[15px] font-medium text-[#717f5d] tracking-wide mb-3 uppercase">
            — Natural Beauty Journal
          </p>
          <h2 className="font-serif text-[36px] sm:text-[46px] md:text-[52px] text-[#4a5b35] uppercase leading-[1.1] tracking-tight">
            Organic Rituals &amp;
            <br />
            Natural Care Stories
          </h2>
        </div>

        {/* Editorial Layout: Featured Left + 3 Stacked Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left: Featured Large Card */}
          <a
            href="https://instagram.com/niyugacosmetics"
            target="_blank"
            rel="noopener noreferrer"
            ref={mainCardRef}
            className="lg:col-span-6 bg-[#e4e7d8] border border-[#cfd1b4] rounded-[28px] p-5 flex flex-col justify-between group hover:border-[#4a5b35] transition-all duration-300"
          >
            <div className="relative w-full aspect-[4/3] rounded-[22px] overflow-hidden bg-[#e4e7d8] mb-5">
              <Image
                src="/images/blog-main.png"
                alt="How To Glow Naturally With Chemical-Free Care"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div className="p-2">
              <p className="text-[13px] font-medium text-[#717f5d] mb-2 tracking-wide uppercase">
                Glow Guide • @niyugacosmetics
              </p>
              <h3 className="font-serif text-[28px] sm:text-[32px] text-[#4a5b35] uppercase tracking-tight leading-snug mb-3 group-hover:text-[#3d4b2b] transition-colors">
                How To Glow Naturally With Chemical-Free Care
              </h3>
              <p className="text-[15px] text-[#717f5d] leading-relaxed">
                Simple botanical daily habits and 100% natural ingredients that
                nurture, protect, and restore your skin and hair.
              </p>
            </div>
          </a>

          {/* Right: 3 Stacked Horizontal Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4 sm:gap-6">
            {journalPosts.map((post, index) => (
              <a
                key={post.id}
                href="https://instagram.com/niyugacosmetics"
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => {
                  sideCardsRef.current[index] = el;
                }}
                className="flex-1 bg-[#e4e7d8] border border-[#cfd1b4] rounded-[24px] p-4 sm:p-5 flex items-center gap-4 sm:gap-5 group hover:border-[#4a5b35] transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative w-24 sm:w-28 h-24 sm:h-28 shrink-0 rounded-[18px] overflow-hidden bg-[#f7f7e4]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="112px"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium text-[#717f5d] mb-1 uppercase tracking-wider">
                    {post.tag}
                  </p>
                  <h4 className="font-serif text-[18px] sm:text-[20px] text-[#4a5b35] uppercase tracking-tight leading-snug mb-1.5 group-hover:text-[#3d4b2b] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-[13px] text-[#717f5d] line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
