'use client';

import PageHero from '@/components/PageHero';
import { useI18n } from '@/components/LanguageProvider';
import { Zap, Cpu, Shield, Leaf, Check } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: '엔지니어링',
    en: 'Engineering Design',
    desc: '전기 설계, 전력 운영관리, 엔지니어링 서비스',
    items: ['전기 설계', '전력 운영 관리', '엔지니어링 서비스', '전력시스템 설계']
  },
  {
    icon: Cpu,
    title: '전력 계통 해석',
    en: 'Power System Analysis',
    desc: '단락전류·보호협조·아크플래쉬·과도현상 분석',
    items: ['단락전류 분석', '보호협조 분석', '아크플래쉬 분석', '과도현상 분석']
  },
  {
    icon: Shield,
    title: '설비진단 & Cx',
    en: 'Diagnosis & Commissioning',
    desc: '전력설비 진단, 안전공사 대행, 통합 시운전',
    items: ['전력설비 진단', '안전공사 대행', '통합 시운전', '데이터센터 검증']
  },
  {
    icon: Leaf,
    title: '에너지 진단',
    en: 'Energy Audit',
    desc: '설비 엔지니어링, 에너지 진단/효율화, ESCO 사업',
    items: ['에너지 진단', '효율화 사업', 'ESCO 사업', '산업통상자원부 지정']
  }
];

export default function ServicesPage() {
  const { locale } = useI18n();

  return (
    <>
      <PageHero
        breadcrumb="SERVICES"
        title={locale === 'ko' ? '서비스' : 'Our Services'}
        subtitle={
          locale === 'ko'
            ? '전력 기반 시스템의 경제적이고 효율적인\n설계, 운용, 그리고 검증을 위한 업무를 수행합니다.'
            : 'Economical and efficient design, operation,\nand verification for power-based systems.'
        }
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((s, i) => {
              const Icon = s.icon;
              const reverse = i % 2 === 1;
              return (
                <div
                  key={i}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    reverse ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={reverse ? 'lg:col-start-2' : ''}>
                    <div className="w-16 h-16 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-brand-primary" />
                    </div>
                    <p className="text-brand-secondary text-xs tracking-[0.3em] italic mb-2">
                      0{i + 1} · {s.en}
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">
                      {s.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-3">
                      {s.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`relative aspect-square rounded-2xl overflow-hidden shadow-xl ${
                      reverse ? 'lg:col-start-1' : ''
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(https://picsum.photos/seed/pss${i}/800/800)`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/40 to-transparent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
