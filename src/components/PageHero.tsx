'use client';

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 bg-brand-primary overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=2000&q=80)'
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-secondary/20 blur-3xl" />

      <div className="container-custom relative z-10">
        {breadcrumb && (
          <p className="text-brand-secondary text-sm tracking-[0.3em] italic mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-up">
          {title}
        </h1>
        <p className="text-white/70 text-lg max-w-2xl whitespace-pre-line">{subtitle}</p>
      </div>
    </section>
  );
}
