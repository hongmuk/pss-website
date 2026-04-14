'use client';

import { useI18n } from './LanguageProvider';
import { partners } from '@/lib/data';

export default function Partners() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-brand-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-brand-secondary text-sm tracking-[0.3em] italic mb-3">
            TRUSTED BY
          </p>
          <h2 className="section-title">{t.partners.title}</h2>
          <p className="text-gray-600">{t.partners.subtitle}</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {partners.map((name, i) => (
            <div
              key={i}
              className="aspect-[5/2] flex items-center justify-center bg-white rounded-lg border border-gray-100 hover:border-brand-primary hover:shadow-md transition-all group px-4"
            >
              <span className="text-xs sm:text-sm font-semibold text-gray-400 group-hover:text-brand-primary transition-colors text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
