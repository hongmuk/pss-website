'use client';

import { Zap, Cpu, Shield, Leaf, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from './LanguageProvider';

const icons = [Zap, Cpu, Shield, Leaf];

export default function Services() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-brand-light">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-brand-secondary text-sm tracking-[0.3em] italic mb-3">
            WHAT WE DO
          </p>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="text-gray-600">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Link
                key={i}
                href="/services"
                className="group relative bg-white p-8 rounded-xl border border-gray-100 hover:border-brand-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-5 group-hover:bg-brand-primary transition-colors">
                  <Icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
