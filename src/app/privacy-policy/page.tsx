'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const policy = {
  ko: {
    title: '개인정보처리방침',
    intro: 'PLAYGROUND(이하 "회사")는 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하며, 개인정보처리방침을 통해 이용자의 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.',
    sections: [
      {
        title: '1. 개인정보의 수집 및 이용 목적',
        content: '회사는 다음의 목적을 위해 개인정보를 수집 및 이용합니다. 수집된 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경될 시에는 사전 동의를 구할 예정입니다.',
        list: ['문의 및 상담 응대', '서비스 제공 및 개선', '법적 의무 준수 등']
      },
      {
        title: '2. 수집하는 개인정보 항목',
        content: '회사는 문의 및 서비스 이용을 위해 아래와 같은 개인정보를 수집할 수 있습니다.',
        list: ['이름, 이메일, 연락처 등']
      },
      {
        title: '3. 개인정보의 보유 및 이용기간',
        content: '회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관련 법령에 따라 보존이 필요한 경우에는 해당 기간 동안 보관할 수 있습니다.'
      },
      {
        title: '4. 개인정보의 제3자 제공',
        content: '회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 이용자의 사전 동의가 있거나 법령에 의거한 경우에 한해 제3자에게 제공할 수 있습니다.'
      },
      {
        title: '5. 이용자의 권리와 행사 방법',
        content: '이용자는 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요청을 할 수 있습니다. 개인정보 관련 문의는 이메일(contact@yunjisang.me)로 연락해 주시기 바랍니다.'
      },
      {
        title: '6. 개인정보보호 책임자',
        content: '- 책임자: 윤지상\n- 이메일: contact@yunjisang.me'
      },
      {
        title: '7. 기타',
        content: '본 개인정보처리방침은 관련 법령 및 회사 정책에 따라 변경될 수 있으며, 변경 시 웹사이트를 통해 공지합니다.'
      }
    ],
    effective: '시행일: 2024-06-01'
  },
  en: {
    title: 'Privacy Policy',
    intro: 'PLAYGROUND (the "Company") complies with the Personal Information Protection Act and other relevant laws. This Privacy Policy explains how your personal information is used and protected, and what measures are taken for your privacy.',
    sections: [
      {
        title: '1. Purpose of Collecting and Using Personal Information',
        content: 'The Company collects and uses personal information for the following purposes. Collected information will not be used for any other purpose, and if the purpose changes, prior consent will be obtained.',
        list: ['Responding to inquiries and consultations', 'Providing and improving services', 'Compliance with legal obligations']
      },
      {
        title: '2. Items of Personal Information Collected',
        content: 'The Company may collect the following personal information for inquiries and service use.',
        list: ['Name, email, contact information, etc.']
      },
      {
        title: '3. Retention and Use Period of Personal Information',
        content: 'The Company destroys personal information without delay once the purpose of collection and use is achieved. However, information may be retained for a certain period if required by relevant laws.'
      },
      {
        title: '4. Provision of Personal Information to Third Parties',
        content: 'The Company does not provide personal information to external parties in principle. However, information may be provided to third parties with prior consent or if required by law.'
      },
      {
        title: '5. Rights of Users and How to Exercise Them',
        content: 'Users may request to view, correct, delete, or suspend processing of their personal information at any time. For inquiries regarding personal information, please contact us at contact@yunjisang.me.'
      },
      {
        title: '6. Personal Information Protection Officer',
        content: '- Officer: Jisang Yoon\n- Email: contact@yunjisang.me'
      },
      {
        title: '7. Others',
        content: 'This Privacy Policy may be changed according to relevant laws and company policy. Changes will be announced on the website.'
      }
    ],
    effective: 'Effective date: 2024-06-01'
  }
};

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const t = policy[language] || policy.ko;

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{t.title}</h1>
      <section className="space-y-6 text-base leading-relaxed">
        <p>{t.intro}</p>
        {t.sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-semibold mt-8 mb-2">{section.title}</h2>
            <p>{section.content.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
            {section.list && (
              <ul className="list-disc pl-6">
                {section.list.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">{t.effective}</p>
      </section>
    </main>
  );
} 