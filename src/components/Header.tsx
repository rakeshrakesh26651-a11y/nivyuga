'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CloverIcon, SearchIcon } from './Icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fffff5]/90 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo: NIYUGA COSMETICS */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <CloverIcon className="w-6 h-6 text-[#4a5b35] transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-serif text-[24px] sm:text-[28px] tracking-[0.06em] uppercase text-[#4a5b35] leading-none select-none font-medium">
            Niyuga Cosmetics
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Shop', href: '#shop' },
            { label: 'Skincare', href: '#skincare' },
            { label: 'Haircare', href: '#haircare' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#717f5d] hover:text-[#4a5b35] text-[15px] font-medium transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA & Search */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-[#4a5b35] p-2 hover:bg-[#4a5b35]/5 rounded-full transition-colors"
            aria-label="Search"
          >
            <SearchIcon className="w-5 h-5 text-[#4a5b35]" />
          </button>

          <a
            href="https://instagram.com/niyugacosmetics"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center bg-[#4a5b35] text-[#fffff5] text-[14px] font-medium tracking-wide uppercase px-6 py-2.5 rounded-full hover:bg-[#3d4b2b] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            DM to Order
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#4a5b35] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Search Input Bar (Expandable) */}
      {searchOpen && (
        <div className="max-w-[1200px] mx-auto px-6 pt-3 pb-2 animate-fadeIn">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Avocado cream, natural haircare, skincare rituals..."
              className="w-full bg-[#e4e7d8]/60 border border-[#cfd1b4] rounded-full px-5 py-2.5 text-sm text-[#4a5b35] placeholder-[#717f5d] focus:outline-none focus:border-[#4a5b35]"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#717f5d] hover:text-[#4a5b35]"
            >
              ESC
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fffff5] border-b border-[#e7e9d4] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4">
            {[
              { label: 'Shop', href: '#shop' },
              { label: 'Skincare', href: '#skincare' },
              { label: 'Haircare', href: '#haircare' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#717f5d] hover:text-[#4a5b35] text-[18px] font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="https://instagram.com/niyugacosmetics"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center bg-[#4a5b35] text-[#fffff5] text-[15px] font-medium uppercase tracking-wide px-6 py-3 rounded-full hover:bg-[#3d4b2b]"
            >
              DM to Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
