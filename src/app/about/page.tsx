'use client';

import PageHero from '@/components/PageHero';
import { useI18n } from '@/components/LanguageProvider';

const milestones = [
  { date: '2005.12', title: '원력솔루션㈜ 설립', desc: '전력 솔루션 비즈니스 개시' },
  { date: '2025.04', title: '기업분할 공고', desc: '전문 엔지니어링 분할' },
  { date: '2025.05', title: 'PSS 설립', desc: '엔지니어링 전문성 확보' },
  { date: 'Future', title: 'Global Partner', desc: '지속 가능한 성장 도약' }
];

const visions = [
  { num: '01', title: 'Ethics', desc: '고객과의 신뢰를 최우선으로 하며, 투명한 업무 수행과 윤리적인 경영' },
  { num: '02', title: 'Economical Value', desc: '혁신적인 기술 솔루션 제공으로 지속 가능한 경제적 가치 창출' },
  { num: '03', title: 'Challenge & Innovation', desc: '끊임없이 변화하는 에너지 산업에서 도전과 혁신을 지속' },
  { num: '04', title: 'Environment', desc: '효율적인 에너지 사용과 지속 가능한 미래를 위해 노력' }
];

export default function AboutPage() {
  const { locale } = useI18n();

  return (
    <>
      <PageHero
        breadcrumb="ABOUT US"
        title={locale === 'ko' ? '회사 소개' : 'Who We Are'}
        subtitle={
          locale === 'ko'
            ? '고객과 함께 성장하겠습니다'
            : 'Growing together with our clients'
        }
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-secondary text-sm tracking-[0.3em] italic mb-3">
                COMPANY OVERVIEW
              </p>
              <h2 className="section-title mb-6">파워시스템서비스㈜</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                전력 분야 토탈 솔루션 PROVIDER로서 에너지전력품질·전기안전·엔지니어링 서비스를 제공합니다.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <Row label="회사명" value="파워시스템서비스㈜" />
                <Row label="주소" value="서울 강남구 개포로22길 32 청우빌딩 4층" />
                <Row label="업종" value="전문·과학 및 기술서비스업, 엔지니어링 서비스업" />
                <Row label="설립" value="2025.05.29" />
                <Row label="대표" value="PSS Inc." />
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80)'
                }}
              />
              <div className="absolute inset-0 bg-brand-primary/30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-brand-secondary text-sm tracking-[0.3em] italic mb-3">
              MILESTONES
            </p>
            <h2 className="section-title">회사의 역사</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300" />
            <div className="grid md:grid-cols-4 gap-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative text-center">
                  <div className="w-5 h-5 rounded-full bg-brand-primary border-4 border-brand-light mx-auto mb-6 relative z-10" />
                  <p className="text-brand-secondary font-bold mb-2">{m.date}</p>
                  <h3 className="font-bold text-brand-primary mb-2">{m.title}</h3>
                  <p className="text-sm text-gray-600">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-brand-secondary text-sm tracking-[0.3em] italic mb-3">
              VISION
            </p>
            <h2 className="section-title">핵심 가치</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visions.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-xl bg-gradient-to-br from-brand-light to-white border border-gray-100 hover:border-brand-primary hover:shadow-lg transition-all group"
              >
                <div className="text-4xl font-black text-brand-secondary/30 group-hover:text-brand-primary transition-colors mb-4">
                  {v.num}
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 py-2 border-b border-gray-100">
      <span className="w-20 text-gray-400 font-medium">{label}</span>
      <span className="text-gray-800 flex-1">{value}</span>
    </div>
  );
}
