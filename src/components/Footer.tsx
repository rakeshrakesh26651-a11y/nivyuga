'use client';

import React from 'react';
import Link from 'next/link';
import { CloverIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="pt-20 pb-12 px-6 overflow-hidden border-t border-[#e7e9d4]">
      <div className="max-w-[1200px] mx-auto">
        {/* Top 4-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-2.5 mb-3 group">
              <CloverIcon className="w-6 h-6 text-[#4a5b35] transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-serif text-[26px] sm:text-[28px] tracking-[0.06em] uppercase text-[#4a5b35] leading-none font-medium">
                Niyuga Cosmetics
              </span>
            </Link>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-[#4a5b35] mb-2">
              Skincare | Haircare • Glow Naturally
            </p>
            <p className="text-[15px] text-[#717f5d] leading-relaxed mb-4 max-w-sm">
              100% Natural Ingredients. Organic skin and haircare crafted without
              harsh chemicals. Trusted by 1000+ happy customers.
            </p>
            <div className="text-[12px] font-semibold text-[#717f5d] uppercase tracking-wider mb-6 flex items-center gap-3">
              <span className="bg-[#e4e7d8] px-3 py-1 rounded-full border border-[#cfd1b4]">
                NO COD
              </span>
              <span className="bg-[#e4e7d8] px-3 py-1 rounded-full border border-[#cfd1b4]">
                DM TO ORDER
              </span>
            </div>
            <a
              href="https://instagram.com/niyugacosmetics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#4a5b35] text-[#fffff5] text-[14px] font-medium tracking-wide uppercase px-7 py-2.5 rounded-full hover:bg-[#3d4b2b] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              DM to Order
            </a>
          </div>

          {/* Col 2: Collections */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-medium text-[15px] text-[#4a5b35] mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#717f5d]">
              {[
                { label: 'All Products', href: '#shop' },
                { label: 'Skincare', href: '#shop' },
                { label: 'Haircare', href: '#haircare' },
                { label: 'Avocado Cream', href: '#shop' },
                { label: 'Face Care', href: '#shop' },
                { label: 'Hair Treatment', href: '#haircare' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#4a5b35] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Brand Values */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-medium text-[15px] text-[#4a5b35] mb-4">
              Brand Values
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#717f5d]">
              <li>100% Natural</li>
              <li>Chemical-Free</li>
              <li>1000+ Customers</li>
              <li>Glow Naturally</li>
              <li>NO COD Policy</li>
              <li>DM to Order</li>
            </ul>
          </div>

          {/* Col 4: Social / Order */}
          <div className="lg:col-span-3">
            <h4 className="font-medium text-[15px] text-[#4a5b35] mb-4">
              Order on Instagram
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#717f5d] mb-4">
              <li>
                <span className="block text-xs uppercase tracking-wider text-[#717f5d]/80">
                  Instagram Handle:
                </span>
                <a
                  href="https://instagram.com/niyugacosmetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a5b35] font-semibold hover:underline text-[16px]"
                >
                  @niyugacosmetics
                </a>
              </li>
              <li>Organic Skin &amp; Haircare</li>
              <li>DM for orders and inquiries</li>
            </ul>
            <a
              href="https://instagram.com/niyugacosmetics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4a5b35] hover:text-[#3d4b2b] uppercase tracking-wider"
            >
              Visit Instagram Profile →
            </a>
          </div>
        </div>

        {/* Giant Watermark Typography */}
        <div className="py-8 border-t border-[#e7e9d4] flex items-center justify-center select-none overflow-hidden opacity-25">
          <div className="flex items-center gap-4 sm:gap-8">
            <CloverIcon className="w-14 sm:w-24 md:w-32 h-14 sm:h-24 md:h-32 text-[#4a5b35]" />
            <span className="font-serif text-[42px] sm:text-[80px] md:text-[120px] lg:text-[140px] uppercase tracking-[0.06em] text-[#4a5b35] leading-none whitespace-nowrap">
              Niyuga Cosmetics
            </span>
          </div>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-6 border-t border-[#e7e9d4] flex flex-col sm:flex-row items-center justify-between text-xs text-[#717f5d] gap-3">
          <p>© 2024 Niyuga Cosmetics. All rights reserved.</p>
          <p>
            Instagram:{' '}
            <a
              href="https://instagram.com/niyugacosmetics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a5b35] font-medium hover:underline"
            >
              @niyugacosmetics
            </a>{' '}
            • 100% Natural Skincare &amp; Haircare
          </p>
        </div>
      </div>
    </footer>
  );
}
