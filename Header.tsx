
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="https://static.readdy.ai/image/73c73ff687c061bb9b32c7710cd7c3e7/529d6c500223392990f9c08be12baaf9.png" 
              alt="ROKNET Logo" 
              className="h-10 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-red-400 transition-colors whitespace-nowrap">
              Ana Sayfa
            </Link>
            <Link href="/hakkimizda" className="hover:text-red-400 transition-colors whitespace-nowrap">
              Hakkımızda
            </Link>
            <Link href="/misyon-vizyon" className="hover:text-red-400 transition-colors whitespace-nowrap">
              Misyon & Vizyon
            </Link>
            <Link href="/iletisim" className="hover:text-red-400 transition-colors whitespace-nowrap">
              İletişim
            </Link>
          </nav>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="py-2 hover:text-red-400 transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/hakkimizda" className="py-2 hover:text-red-400 transition-colors">
                Hakkımızda
              </Link>
              <Link href="/misyon-vizyon" className="py-2 hover:text-red-400 transition-colors">
                Misyon & Vizyon
              </Link>
              <Link href="/iletisim" className="py-2 hover:text-red-400 transition-colors">
                İletişim
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
