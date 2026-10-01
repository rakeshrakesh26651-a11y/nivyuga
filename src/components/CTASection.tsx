'use client';

import React from 'react';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto bg-[#e4e7d8] border border-[#cfd1b4] rounded-[36px] overflow-hidden p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Order CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-[15px] font-medium text-[#717f5d] tracking-wide mb-3 uppercase">
              — Order Directly via DM
            </p>
            <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[54px] text-[#4a5b35] uppercase leading-[1.08] tracking-tight mb-4">
              Ready To Glow
              <br />
              Naturally?
            </h2>
            <p className="text-[16px] sm:text-[17px] text-[#717f5d] leading-relaxed mb-6 max-w-lg">
              DM <span className="text-[#4a5b35] font-semibold">@niyugacosmetics</span> to place your order.
              100% natural ingredients, organic skincare &amp; haircare made without harsh chemicals.
            </p>

            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-wider text-[#717f5d] font-semibold mb-8">
              <span className="bg-[#f7f7e4] px-3 py-1 rounded-full border border-[#cfd1b4]/60">
                100% Natural Ingredients
              </span>
              <span className="bg-[#f7f7e4] px-3 py-1 rounded-full border border-[#cfd1b4]/60">
                NO COD
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://instagram.com/niyugacosmetics"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4a5b35] text-[#fffff5] text-[15px] font-medium tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-[#3d4b2b] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                DM to Order
              </a>
              <a
                href="https://instagram.com/niyugacosmetics"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-[#4a5b35] text-[#4a5b35] text-[15px] font-medium tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-[#4a5b35]/5 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right Column: Model Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/4.4] rounded-[28px] overflow-hidden bg-[#e4e7d8]">
              <Image
                src="/images/cta-model.png"
                alt="Niyuga Cosmetics Natural Care"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
