'use client';

import Link from 'next/link';
import { Dictionary } from '@/lib/dictionary';

interface FooterProps {
  dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.footer.company}</h3>
            <p className="text-gray-400">{dict.footer.description}</p>
            <div className="mt-4 space-y-2 text-gray-400">
              <p>{dict.footer.address}</p>
              <p>{dict.footer.ceo}</p>
              <p>{dict.footer.registration}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.footer.links}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.footer.contact}</h3>
            <p className="text-gray-400">{dict.footer.email}</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PLAYGROUND. {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
} 