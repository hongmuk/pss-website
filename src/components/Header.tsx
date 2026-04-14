'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { useI18n } from './LanguageProvider';

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/tech-power', label: t.nav.tech },
    { href: '/references', label: t.nav.references },
    { href: '/contact', label: t.nav.contact }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`font-heading font-black text-2xl tracking-tight ${scrolled ? 'text-brand-primary' : 'text-white'}`}>
            PSS
          </div>
          <div className={`text-[10px] leading-none tracking-widest ${scrolled ? 'text-brand-primary' : 'text-white/80'}`}>
            POWER<br />SYSTEM<br />SERVICE
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-secondary ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setLocale(locale === 'ko' ? 'en' : 'ko')}
            className={`flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-full border transition-colors ${
              scrolled
                ? 'border-gray-300 text-gray-800 hover:bg-brand-primary hover:text-white hover:border-brand-primary'
                : 'border-white/40 text-white hover:bg-white hover:text-brand-primary'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            {locale === 'ko' ? 'EN' : 'KO'}
          </button>
        </nav>

        <button
          className={`lg:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="container-custom py-6 flex flex-col gap-4">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-800 font-medium py-2 border-b border-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setLocale(locale === 'ko' ? 'en' : 'ko')}
              className="flex items-center justify-center gap-2 py-3 bg-brand-primary text-white rounded-md mt-2"
            >
              <Globe className="w-4 h-4" />
              {locale === 'ko' ? 'English' : '한국어'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
