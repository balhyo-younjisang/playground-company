'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const INFO = {
  ko: {
    privacy: '개인정보처리방침',
    company: 'PLAYGROUND',
    address: '서울특별시 성북구 정릉로 52길 42 5층',
    ceo: '대표이사 : 윤지상',
    reg: '사업자등록번호 : 142-33-01524',
    email: 'Email : ',
    copyright: 'Copyright © PLAYGROUND. All Rights Reserved.'
  },
  en: {
    privacy: 'Privacy Policy',
    company: 'PLAYGROUND',
    address: '5F, 42, Jeongneung-ro 52-gil, Seongbuk-gu, Seoul, Republic of Korea',
    ceo: 'CEO: Jisang Yoon',
    reg: 'Business Registration No.: 142-33-01524',
    email: 'Email: ',
    copyright: 'Copyright © PLAYGROUND. All Rights Reserved.'
  }
};

export default function Footer() {
  const { language } = useLanguage();
  const t = INFO[language] || INFO.ko;

  return (
    <footer className="border-t bg-white dark:bg-gray-900 py-8 px-4 text-gray-700 dark:text-gray-300 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col gap-2">
        <div className="flex justify-end mb-2">
          <Link href="/privacy-policy" className="hover:underline text-primary font-semibold">{t.privacy}</Link>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-xl text-primary">{t.company}</span>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
          <span>{t.address}</span>
          <span className="hidden md:inline">|</span>
          <span>{t.ceo}</span>
          <span className="hidden md:inline">|</span>
          <span>{t.reg}</span>
          <span className="hidden md:inline">|</span>
          <span>{t.email}<a href="mailto:contact@yunjisang.me" className="hover:underline text-primary">contact@yunjisang.me</a></span>
        </div>
        <div className="mt-2 text-gray-500 dark:text-gray-400">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
} 