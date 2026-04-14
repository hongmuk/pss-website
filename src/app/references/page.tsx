'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { useI18n } from '@/components/LanguageProvider';

const allReferences = [
  { year: '2025.06', title: 'KT 경제클러스터 데이터센터 신축설계', category: '데이터센터' },
  { year: '2025.05', title: '금선공항 DC 변압기 제조검사', category: '검사' },
  { year: '2025.03', title: 'NOC 예상 서우 분기기 전력계통해석', category: '계통해석' },
  { year: '2025.02', title: 'PFV DC 2차 발전기 가동시 보호계전', category: '검사' },
  { year: '2025.01', title: '순천완공업DC 엔지니어링·계통해석', category: '엔지니어링' },
  { year: '2024.12', title: 'PACO PFV DC 계통해석 및 SPOF', category: '계통해석' },
  { year: '2024.10', title: 'ARMA 설계 DC 변압기 시공', category: '설계' },
  { year: '2024.08', title: 'Timbuktu DC 엔지니어링·계통해석', category: '엔지니어링' },
  { year: '2024.02', title: 'PFV 데이터센터 신설공사 계통해석', category: '데이터센터' },
  { year: '2023.06', title: 'KT 경제클러스터 DC 데이터센터 설계', category: '설계' },
  { year: '2023.03', title: '군산 가변전압 피크 신뢰성 개선 검사', category: '검사' },
  { year: '2023.01', title: '15kV 송전선로 설계 용역 / 선로보강', category: '설계' },
  { year: '2022.02', title: '한국남동발전 아크플래쉬 분석용역', category: '안전분석' },
  { year: '2022.07', title: '상동DC ARPA Discrimination Study 용역', category: '계통해석' },
  { year: '2022.04', title: '대구 체일미터비엔 설계변경 검토 용역', category: '설계' },
  { year: '2021.10', title: '00기지 전력계통해석 및 설비 진단', category: '계통해석' },
  { year: '2021.07', title: '신세종 Power Plant 보호 계전기 정정검토', category: '계통해석' },
  { year: '2020.09', title: '한국전력공사 배전망 보호협조 진단', category: '진단' },
  { year: '2019.10', title: '미군기지 전력계통해석·전력설비 진단', category: '진단' },
  { year: '2018.03', title: '대형 GT 시뮬레이션 프로젝트', category: '설계' }
];

const categories = ['ALL', '계통해석', '데이터센터', '설계', '엔지니어링', '진단', '검사', '안전분석'];

export default function ReferencesPage() {
  const { locale } = useI18n();
  const [active, setActive] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = allReferences.filter(r => {
    const categoryMatch = active === 'ALL' || r.category === active;
    const searchMatch =
      search === '' || r.title.toLowerCase().includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <>
      <PageHero
        breadcrumb="REFERENCES"
        title={locale === 'ko' ? '주요 사업 실적' : 'Major References'}
        subtitle={
          locale === 'ko'
            ? '다양한 분야의 계획, 설계, 시공, 운영 유지보수 단계에\n적절한 솔루션을 제시합니다.'
            : 'Optimal solutions across every stage.'
        }
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* 필터 + 검색 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 text-sm rounded-full transition-all ${
                    active === cat
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-light text-gray-600 hover:bg-brand-secondary hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-brand-primary min-w-[200px]"
            />
          </div>

          {/* 결과 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((r, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl bg-brand-light hover:bg-brand-primary transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold tracking-widest text-brand-secondary group-hover:text-white/80 uppercase">
                    {r.category}
                  </span>
                  <span className="text-xs font-mono text-gray-400 group-hover:text-white/60">
                    {r.year}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-brand-primary group-hover:text-white leading-snug">
                  {r.title}
                </h3>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              검색 결과가 없습니다.
            </div>
          )}

          <div className="mt-12 text-center text-sm text-gray-500">
            <p>총 <strong className="text-brand-primary">50건 이상</strong>의 주요 사업 실적을 보유하고 있습니다.</p>
            <p className="mt-2">누적 해석 용량: <strong className="text-brand-primary">9GW+</strong> (신재생 5GW · 원전 2GW · 화력 1GW · 수력 0.7GW · 기타 0.3GW)</p>
          </div>
        </div>
      </section>
    </>
  );
}
