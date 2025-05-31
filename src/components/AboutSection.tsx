'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="vision" className="min-h-screen flex flex-col justify-center items-center py-0 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold dark:text-white">
            {t.vision.title}
          </h2>
          <div className="relative w-full flex justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line font-light">
            {t.vision.description}
          </p>
        </div>
      </div>
    </section>
  );
} 