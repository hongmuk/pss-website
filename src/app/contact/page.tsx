'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { useI18n } from '@/components/LanguageProvider';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const { locale } = useI18n();
  const [form, setForm] = useState({ name: '', company: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 환경: POST /api/contact
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <PageHero
        breadcrumb="CONTACT"
        title={locale === 'ko' ? '연락처' : 'Get in Touch'}
        subtitle={
          locale === 'ko'
            ? '전력 엔지니어링 전문가와 상담하세요.'
            : 'Talk to our power engineering experts.'
        }
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* 연락처 정보 */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 bg-brand-light rounded-xl">
                <MapPin className="w-6 h-6 text-brand-primary mb-3" />
                <h3 className="font-bold text-brand-primary mb-2">주소</h3>
                <p className="text-sm text-gray-600">
                  서울 강남구 개포로22길 32<br />청우빌딩 4층
                </p>
              </div>
              <div className="p-6 bg-brand-light rounded-xl">
                <Phone className="w-6 h-6 text-brand-primary mb-3" />
                <h3 className="font-bold text-brand-primary mb-2">전화</h3>
                <p className="text-sm text-gray-600">070-4355-0708</p>
              </div>
              <div className="p-6 bg-brand-light rounded-xl">
                <Mail className="w-6 h-6 text-brand-primary mb-3" />
                <h3 className="font-bold text-brand-primary mb-2">이메일</h3>
                <a
                  href="mailto:PSS@PSService.co.kr"
                  className="text-sm text-gray-600 hover:text-brand-primary"
                >
                  PSS@PSService.co.kr
                </a>
              </div>
              <div className="p-6 bg-brand-light rounded-xl">
                <Clock className="w-6 h-6 text-brand-primary mb-3" />
                <h3 className="font-bold text-brand-primary mb-2">운영 시간</h3>
                <p className="text-sm text-gray-600">
                  평일 09:00 – 18:00<br />주말·공휴일 휴무
                </p>
              </div>
            </div>

            {/* 문의 양식 */}
            <div className="lg:col-span-3">
              <div className="p-8 lg:p-10 bg-gradient-to-br from-brand-light to-white rounded-2xl border border-gray-100">
                <h2 className="text-2xl font-bold text-brand-primary mb-2">
                  기술 문의
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  프로젝트 내용을 남겨주시면 담당자가 24시간 이내 회신드립니다.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field
                      label="이름 *"
                      value={form.name}
                      onChange={v => setForm({ ...form, name: v })}
                      required
                    />
                    <Field
                      label="회사명"
                      value={form.company}
                      onChange={v => setForm({ ...form, company: v })}
                    />
                  </div>
                  <Field
                    label="이메일 *"
                    type="email"
                    value={form.email}
                    onChange={v => setForm({ ...form, email: v })}
                    required
                  />
                  <Field
                    label="제목 *"
                    value={form.subject}
                    onChange={v => setForm({ ...form, subject: v })}
                    required
                  />
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-1 tracking-wider uppercase">
                      문의 내용 *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-primary resize-none text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    {submitted ? '전송 완료 ✓' : '문의 보내기'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 지도 자리 */}
      <section className="h-96 bg-brand-light relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=2000&q=80)'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-white/90 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg">
            <MapPin className="w-8 h-8 text-brand-primary mx-auto mb-3" />
            <h3 className="font-bold text-brand-primary mb-1">PSS 본사</h3>
            <p className="text-sm text-gray-600">서울 강남구 개포로22길 32 청우빌딩 4층</p>
            <p className="text-xs text-gray-400 mt-2 italic">* 실제 구축 시 Kakao Maps API 연동</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required = false
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs text-gray-500 font-medium mb-1 tracking-wider uppercase">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-primary text-sm"
      />
    </div>
  );
}
