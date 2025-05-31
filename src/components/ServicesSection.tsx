'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import Link from 'next/link';

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="min-h-screen flex flex-col justify-center items-center py-0 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center items-center">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center w-full">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
              {t.services.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
              {t.services.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 w-full">
            {/* Service Card 1 */}
            <Link href="/services" className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between h-full min-h-[340px] focus:outline-none focus:ring-2 focus:ring-primary">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {t.services.service1.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {t.services.service1.description}
                  </p>
                </div>
              </div>
            </Link>

            {/* Service Card 2 */}
            <Link href="/services" className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between h-full min-h-[340px] focus:outline-none focus:ring-2 focus:ring-primary">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {t.services.service2.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {t.services.service2.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {t.services.comingSoon}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Service Card 3 */}
            <Link href="/services" className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between h-full min-h-[340px] focus:outline-none focus:ring-2 focus:ring-primary">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 dark:from-yellow-600 dark:to-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                    {t.services.service3.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {t.services.service3.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 