import type { Metadata } from 'next';
import { LanguageProvider } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'PSS — Power System Service | Engineering the Next Standard',
  description:
    '파워시스템서비스㈜는 전력계통해석, 설비진단, 에너지진단을 포함한 종합 전력 엔지니어링 솔루션을 제공합니다.',
  keywords: [
    'Power System Service',
    'PSS',
    '전력계통해석',
    '설비진단',
    'Arc Flash',
    'Commissioning',
    'ESCO',
    'Energy Audit',
    'Power Engineering'
  ],
  openGraph: {
    title: 'PSS — Power System Service',
    description: 'Engineering the Next Standard',
    locale: 'ko_KR'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-body">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
