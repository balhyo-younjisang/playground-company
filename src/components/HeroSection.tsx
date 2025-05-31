'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { scrollToSection } from '@/utils/scroll';

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('services');
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 via-purple-500/90 to-yellow-400/90 dark:from-blue-600/90 dark:via-purple-600/90 dark:to-yellow-500/90" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="container mx-auto px-4 py-16 md:py-32 text-center text-white relative z-10 flex-1 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center space-y-8">
          <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 whitespace-pre-line leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-blue-50 font-light">
            {t.hero.subtitle}
          </p>
          <div className="flex justify-center">
            <a
              href="#services"
              onClick={handleCTAClick}
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 hover:shadow-lg group"
            >
              <span>{t.hero.cta}</span>
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 