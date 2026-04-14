'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useI18n } from './LanguageProvider';

export default function ContactCTA() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-dark to-brand-primary relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-secondary/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

      <div className="container-custom relative z-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          {t.cta.title}
        </h2>
        <p className="text-white/80 text-lg mb-10">{t.cta.subtitle}</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-10 py-4 bg-white text-brand-primary font-semibold rounded-md hover:bg-brand-secondary hover:text-white transition-all group"
        >
          {t.cta.button}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
