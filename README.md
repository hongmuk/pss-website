# PSS Official Website

> Engineering the Next Standard

파워시스템서비스㈜(PSS) 공식 홈페이지 **프로토타입 시안**입니다.
Next.js 14 App Router 기반으로 구축되었으며, 이중 언어(한/영) 지원과 반응형 디자인이 적용되어 있습니다.

## 🚀 시작하기

### 1. 저장소 클론

```bash
git clone <YOUR_GITHUB_URL> pss-website
cd pss-website
```

### 2. 의존성 설치

```bash
npm install
# 또는
pnpm install
# 또는
yarn install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속.

### 4. 프로덕션 빌드

```bash
npm run build
npm start
```

## 🛠 기술 스택

| 구분 | 기술 |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Fonts | Poppins (영문) · Pretendard (국문) |
| Icons | Lucide React |
| Animation | Framer Motion (설치 포함) |
| Deployment | Vercel (권장) |

## 🎨 디자인 가이드

| 항목 | 값 |
|---|---|
| Primary Color | `#0E3967` |
| Secondary Color | `#4472C4` |
| Background | `#F5F7FA` |
| Heading Font | Poppins / Pretendard |
| Body Font | Pretendard / Lato |

## 📁 프로젝트 구조

```
pss-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   ├── page.tsx           # HOME
│   │   ├── globals.css        # 전역 스타일
│   │   ├── about/             # 회사 소개
│   │   ├── services/          # 서비스
│   │   ├── tech-power/        # 기술 역량
│   │   ├── references/        # 주요 실적 (필터/검색)
│   │   └── contact/           # 연락처 (문의 폼)
│   ├── components/
│   │   ├── Header.tsx         # 상단 내비게이션
│   │   ├── Footer.tsx         # 푸터
│   │   ├── Hero.tsx           # 메인 히어로
│   │   ├── Stats.tsx          # 숫자 섹션
│   │   ├── Services.tsx       # 서비스 카드
│   │   ├── References.tsx    # 레퍼런스 프리뷰
│   │   ├── Partners.tsx       # 파트너 로고
│   │   ├── ContactCTA.tsx    # 문의 CTA
│   │   ├── PageHero.tsx       # 서브 페이지 히어로
│   │   └── LanguageProvider.tsx # 다국어 컨텍스트
│   └── lib/
│       ├── i18n.ts            # 한/영 번역
│       └── data.ts            # 실적·파트너 데이터
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🌏 다국어 지원

- 한국어 (`ko`) · 영어 (`en`)
- 우측 상단 `EN / KO` 버튼으로 전환
- 번역은 `src/lib/i18n.ts`에서 관리
- 실 운영 시 `next-intl` 기반 URL 라우팅 (`/ko`, `/en`) 전환 권장

## 📝 페이지

| 경로 | 설명 |
|---|---|
| `/` | 메인 (Hero · Stats · Services · References · Partners · CTA) |
| `/about` | 회사 소개 · 연혁 · 비전 |
| `/services` | 4대 서비스 상세 |
| `/tech-power` | 기술 인력 · 소프트웨어 · 진단 장비 |
| `/references` | 주요 실적 (카테고리 필터 + 검색) |
| `/contact` | 연락처 · 문의 양식 · 지도 |

## 🚢 Vercel 배포

1. 이 저장소를 GitHub에 푸시
2. [vercel.com](https://vercel.com) → New Project → Import Git Repository
3. 별도 환경 변수 없이 바로 배포 가능
4. 커스텀 도메인 연결 (예: pss.co.kr)

## 📋 시안 단계에서 생략된 항목 (실제 구축 시 추가)

- [ ] Headless CMS 연동 (Sanity / Strapi)
- [ ] Kakao Maps API 실제 연동
- [ ] Contact Form 백엔드 (Resend + API Route)
- [ ] reCAPTCHA v3 스팸 차단
- [ ] 이미지 워터마크 (Sharp 서버사이드)
- [ ] Google Analytics 4
- [ ] Sitemap.xml / robots.txt
- [ ] 구조화 데이터 (JSON-LD)
- [ ] 전문 영문 번역 감수
- [ ] 4K Hero 영상 교체

## 📞 문의

파워시스템서비스㈜ (PSS Inc.)
- 📍 서울 강남구 개포로22길 32 청우빌딩 4층
- 📞 070-4355-0708
- 📧 PSS@PSService.co.kr

---

© 2026 PSS Inc. All rights reserved.
