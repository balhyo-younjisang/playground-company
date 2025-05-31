'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const TEXT = {
  ko: {
    title: '서비스 소개',
    desc: 'PLAYGROUND의 외주 개발, 자체 서비스, 기술 컨설팅 등 다양한 서비스를 곧 만나보실 수 있습니다.',
    coming: 'Comming Soon!'
  },
  en: {
    title: 'Our Services',
    desc: 'You will soon be able to explore PLAYGROUND\'s custom development, in-house services, and tech consulting.',
    coming: 'Coming Soon!'
  }
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = TEXT[language] || TEXT.ko;

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">{t.title}</h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-10">{t.desc}</p>
        <div className="inline-block px-8 py-4 rounded-full bg-primary text-white text-xl font-semibold shadow-lg animate-pulse">
          {t.coming}
        </div>
      </div>
    </main>
  );
} 