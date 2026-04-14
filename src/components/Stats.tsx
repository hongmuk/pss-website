'use client';

import { useI18n } from './LanguageProvider';

export default function Stats() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-brand-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=2000&q=80)'
          }}
        />
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <p className="text-brand-secondary text-sm tracking-[0.3em] italic mb-2">
            {t.stats.title}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            {t.stats.subtitle}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.items.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="text-5xl lg:text-6xl font-black text-white mb-3 transition-transform group-hover:scale-110">
                {item.value}
              </div>
              <div className="text-white/70 text-sm tracking-wide uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
