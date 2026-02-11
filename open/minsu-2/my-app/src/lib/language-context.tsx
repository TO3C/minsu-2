'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations, Language, TranslationKeys } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  languages: { code: Language; name: string; flag: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages = [
  { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang);
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferred-language') as Language;
      if (saved && translations[saved]) {
        setLanguageState(saved);
      }
    }
  }, []);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] as TranslationKeys,
    languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
