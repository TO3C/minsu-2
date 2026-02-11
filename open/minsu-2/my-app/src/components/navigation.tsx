'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Language } from '@/lib/translations';

export default function Navigation() {
  const pathname = usePathname();
  const { t, language, setLanguage, languages } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/rooms', label: t.nav.rooms },
    { href: '/booking', label: t.nav.booking },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-realistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient-warm tracking-tight">
              {language === 'zh' ? '流云智炬' : language === 'en' ? 'Cloud & Torch' : 'Облако и Факел'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-terracotta bg-terracotta/10'
                    : 'text-text-primary hover:text-terracotta hover:bg-black/5'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative ml-4 pl-4 border-l border-black/10">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-text-primary hover:bg-black/5 transition-all"
              >
                <span className="text-lg">
                  {languages.find((l) => l.code === language)?.flag}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 card-realistic py-1 animate-fade-in">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as Language);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-terracotta/10 transition-colors ${
                        language === lang.code ? 'text-terracotta font-medium' : 'text-text-primary'
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-primary hover:bg-black/5 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-natural border-t border-black/10 animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${
                  pathname === item.href ? 'text-terracotta bg-terracotta/10' : 'text-text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-black/10">
              <p className="text-sm text-text-muted mb-2 px-4">选择语言 / Language / Язык</p>
              <div className="flex flex-wrap gap-2 px-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as Language);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                      language === lang.code
                        ? 'border-terracotta bg-terracotta text-white shadow-md'
                        : 'border-black/10 text-text-primary hover:border-terracotta/50'
                    }`}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
