'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { useI18n } from './LanguageProvider';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=2400&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/90 to-brand-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-transparent to-transparent" />
      </div>

      {/* 장식 요소 */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-brand-secondary/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-white text-xs tracking-[0.2em] font-medium italic">
              {t.hero.tag}
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 whitespace-pre-line">
            {t.hero.title}
          </h1>

          <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed whitespace-pre-line">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary font-semibold rounded-md hover:bg-brand-secondary hover:text-white transition-all group"
            >
              {t.hero.cta1}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-md hover:bg-white hover:text-brand-primary transition-all"
            >
              <Phone className="w-4 h-4" />
              {t.hero.cta2}
            </Link>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
