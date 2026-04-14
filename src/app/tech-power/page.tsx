'use client';

import PageHero from '@/components/PageHero';
import { useI18n } from '@/components/LanguageProvider';

const engineers = [
  { role: '기술사', count: 3 },
  { role: 'P.E.', count: 1 },
  { role: '전기전문기사', count: 8 },
  { role: '기계설계기사', count: 4 },
  { role: '산업기사', count: 2 },
  { role: '기능사', count: 1 },
  { role: '커미셔닝 전문가', count: 2 }
];

const software = [
  { name: 'ETAP', qty: '5 EA' },
  { name: 'SKM Power Tools', qty: '1 EA' },
  { name: 'PSCAD', qty: '1 EA' },
  { name: 'AutoCAD', qty: '10 EA' },
  { name: 'EPLAN', qty: '2 EA' },
  { name: 'Sketch-Up (3D)', qty: '1 EA' }
];

const hardware = [
  { name: 'OMICRON CMC 256+', type: 'Relay Tester' },
  { name: 'OMICRON CPC 100', type: 'Primary Tester' },
  { name: 'MEGGER SPI500', type: 'Primary Tester' },
  { name: 'OMICRON CP TD15', type: 'TD Tester' },
  { name: 'BAUR VIOLA TD/PD', type: 'VLF Tester' },
  { name: 'MEGGER VLF SINE45', type: 'VLF Tester' },
  { name: 'PHENIX TECH 6CP50', type: 'AC Dielectric' },
  { name: 'MEGGER MOM2', type: 'Micro Ohmmeter' },
  { name: 'HIOKI TF6031', type: 'Earth Tester' }
];

export default function TechPowerPage() {
  const { locale } = useI18n();

  return (
    <>
      <PageHero
        breadcrumb="TECH POWER"
        title={locale === 'ko' ? '기술 역량' : 'Technical Assets'}
        subtitle={
          locale === 'ko'
            ? '고객의 요구에 대응하기 위한 기술 능력을 보유하고 있습니다.'
            : 'Equipped to meet every technical challenge.'
        }
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* 인력 */}
            <div className="lg:col-span-1">
              <p className="text-brand-secondary text-sm tracking-[0.3em] italic mb-3">
                ENGINEERS
              </p>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">기술 인력</h2>
              <div className="bg-brand-light rounded-xl p-6">
                <div className="text-center mb-6 pb-6 border-b border-gray-200">
                  <div className="text-6xl font-black text-brand-primary">28</div>
                  <div className="text-sm text-gray-500 tracking-widest mt-1">명</div>
                </div>
                <ul className="space-y-3">
                  {engineers.map((e, i) => (
                    <li key={i} className="flex justify-between text-sm">
                      <span className="text-gray-600">{e.role}</span>
                      <span className="font-semibold text-brand-primary">{e.count}명</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 소프트웨어 */}
            <div className="lg:col-span-1">
              <p className="text-brand-secondary text-sm tracking-[0.3em] italic mb-3">
                SOFTWARE
              </p>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">소프트웨어</h2>
              <ul className="space-y-3">
                {software.map((s, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center p-4 bg-brand-light rounded-lg hover:bg-brand-primary hover:text-white transition-all group"
                  >
                    <span className="font-semibold group-hover:text-white">{s.name}</span>
                    <span className="text-sm text-brand-secondary group-hover:text-white/80 font-mono">
                      {s.qty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 진단 장비 */}
            <div className="lg:col-span-1">
              <p className="text-brand-secondary text-sm tracking-[0.3em] italic mb-3">
                HARDWARE
              </p>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">진단 장비</h2>
              <ul className="space-y-3">
                {hardware.map((h, i) => (
                  <li
                    key={i}
                    className="p-4 bg-brand-light rounded-lg border-l-4 border-brand-secondary"
                  >
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      {h.type}
                    </div>
                    <div className="font-semibold text-brand-primary">{h.name}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
