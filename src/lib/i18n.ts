export type Locale = 'ko' | 'en';

export const messages = {
  ko: {
    nav: {
      home: 'HOME',
      about: 'ABOUT US',
      services: 'SERVICES',
      tech: 'TECH POWER',
      references: 'REFERENCES',
      contact: 'CONTACT'
    },
    hero: {
      tag: 'Engineering the Next Standard',
      title: '전력 엔지니어링의\n새로운 기준',
      subtitle: '파워시스템서비스㈜는 전력계통 해석·설비진단·에너지진단을 아우르는\n전문 엔지니어링 솔루션을 제공합니다.',
      cta1: '서비스 알아보기',
      cta2: '문의하기'
    },
    stats: {
      title: 'Our Scale',
      subtitle: '숫자로 보는 PSS',
      items: [
        { value: '9GW+', label: '누적 해석 용량' },
        { value: '50+', label: '주요 사업 실적' },
        { value: '22+', label: '전문 엔지니어' },
        { value: '3', label: '기술사 보유' }
      ]
    },
    services: {
      title: 'Core Services',
      subtitle: '전력 기반 시스템의 경제적이고 효율적인 설계·운용·검증',
      items: [
        { title: '엔지니어링', desc: '전기설계, 엔지니어링 서비스' },
        { title: '전력 계통 해석', desc: '기술계산, 전력계통 및 과도현상 분석' },
        { title: '설비진단 & Cx', desc: '전력설비 진단, 안전공사 대행, 통합 시운전' },
        { title: '에너지 진단', desc: '설비 엔지니어링, 에너지 진단/효율화, ESCO 사업' }
      ]
    },
    partners: {
      title: 'Major Partners',
      subtitle: '국내외 최고의 파트너들이 PSS를 신뢰합니다'
    },
    references: {
      title: 'Major References',
      subtitle: '다양한 분야의 계획·설계·시공·운영 솔루션',
      viewAll: '전체 보기'
    },
    cta: {
      title: '프로젝트 문의',
      subtitle: '전력 엔지니어링 전문가와 상담하세요',
      button: '문의하기'
    },
    footer: {
      address: '서울 강남구 개포로22길 32 청우빌딩 4층',
      phone: '070-4355-0708',
      email: 'PSS@PSService.co.kr',
      copy: '© 2026 PSS Inc. All rights reserved.'
    }
  },
  en: {
    nav: {
      home: 'HOME',
      about: 'ABOUT US',
      services: 'SERVICES',
      tech: 'TECH POWER',
      references: 'REFERENCES',
      contact: 'CONTACT'
    },
    hero: {
      tag: 'Engineering the Next Standard',
      title: 'A New Standard in\nPower Engineering',
      subtitle: 'Power System Service Inc. provides professional engineering\nacross power system analysis, diagnostics, and energy audits.',
      cta1: 'Explore Services',
      cta2: 'Contact Us'
    },
    stats: {
      title: 'Our Scale',
      subtitle: 'PSS by the Numbers',
      items: [
        { value: '9GW+', label: 'Total Analyzed Capacity' },
        { value: '50+', label: 'Major References' },
        { value: '22+', label: 'Professional Engineers' },
        { value: '3', label: 'Licensed P.E.' }
      ]
    },
    services: {
      title: 'Core Services',
      subtitle: 'Economical and efficient design, operation, and verification',
      items: [
        { title: 'Engineering', desc: 'Electrical design and engineering services' },
        { title: 'Power System Analysis', desc: 'Technical computation and transient analysis' },
        { title: 'Diagnosis & Cx', desc: 'Equipment diagnosis and integrated commissioning' },
        { title: 'Energy Audit', desc: 'Energy audit, efficiency, and ESCO projects' }
      ]
    },
    partners: {
      title: 'Major Partners',
      subtitle: 'Trusted by leading partners worldwide'
    },
    references: {
      title: 'Major References',
      subtitle: 'Planning, design, construction, and operation solutions',
      viewAll: 'View All'
    },
    cta: {
      title: 'Start Your Project',
      subtitle: 'Consult with our power engineering experts',
      button: 'Contact Us'
    },
    footer: {
      address: '4F Cheongwoo Bldg, 32 Gaepo-ro 22-gil, Gangnam-gu, Seoul',
      phone: '+82-70-4355-0708',
      email: 'PSS@PSService.co.kr',
      copy: '© 2026 PSS Inc. All rights reserved.'
    }
  }
} as const;

export type Messages = typeof messages.ko;
