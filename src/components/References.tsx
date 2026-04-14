'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useI18n } from './LanguageProvider';
import { references } from '@/lib/data';

export default function References() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <p className="text-brand-secondary text-sm tracking-[0.3em] italic mb-3">
              OUR WORK
            </p>
            <h2 className="section-title">{t.references.title}</h2>
            <p className="text-gray-600 mt-2">{t.references.subtitle}</p>
          </div>
          <Link
            href="/references"
            className="btn-outline whitespace-nowrap"
          >
            {t.references.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((ref, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-xl bg-gradient-to-br from-brand-light to-white border border-gray-100 hover:border-brand-primary hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-widest text-brand-secondary uppercase">
                  {ref.category}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {ref.year}
                </span>
              </div>
              <h3 className="text-lg font-bold text-brand-primary leading-snug mb-4">
                {ref.title}
              </h3>
              <div className="h-0.5 w-10 bg-brand-secondary group-hover:w-20 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
