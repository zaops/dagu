import { useState, useEffect } from 'react';
import { getCurrentLanguage, setLanguage, t, type Language, type Translations } from '../i18n';

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(getCurrentLanguage());

  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentLanguage(getCurrentLanguage());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setCurrentLanguage(lang);
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
  };
}