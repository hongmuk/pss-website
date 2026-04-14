'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useI18n } from './LanguageProvider';

export default function Footer() {
  const { t } = useI18n();

  const nav = [
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/tech-power', label: t.nav.tech },
    { href: '/references', label: t.nav.references },
    { href: '/contact', label: t.nav.contact }
  ];

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading font-black text-3xl">PSS</span>
              <span className="text-[10px] leading-none tracking-widest text-white/60">
                POWER<br />SYSTEM<br />SERVICE
              </span>
            </div>
            <p className="text-white/70 italic text-sm mb-6 max-w-md">
              Engineering the Next Standard — 전력 엔지니어링의 새로운 기준
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-secondary" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-secondary" />
                <span>{t.footer.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-secondary" />
                <a
                  href={`mailto:${t.footer.email}`}
                  className="hover:text-white transition-colors"
                >
                  {t.footer.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-widest">NAVIGATION</h4>
            <ul className="space-y-2.5 text-sm">
              {nav.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-widest">CERTIFICATIONS</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>ISO 9001 · 14001 · 45001</li>
              <li>ESCO 사업등록</li>
              <li>엔지니어링사업자</li>
              <li>전문설계업 1종</li>
              <li>에너지진단전문기관</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/50">{t.footer.copy}</p>
          <p className="text-xs text-white/50 italic">Confidential &amp; Proprietary</p>
        </div>
      </div>
    </footer>
  );
}
