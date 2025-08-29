import React from 'react';
import { Globe } from 'lucide-react';
import { getCurrentLanguage, setLanguage, type Language } from '../i18n';
import { cn } from '../lib/utils';

interface LanguageSwitcherProps {
  isOpen?: boolean;
  className?: string;
}

export function LanguageSwitcher({ isOpen = false, className }: LanguageSwitcherProps) {
  const currentLang = getCurrentLanguage();
  
  const handleLanguageChange = (lang: Language) => {
    if (lang !== currentLang) {
      setLanguage(lang);
    }
  };

  return (
    <div className={cn('px-2 pb-1', className)}>
      <div
        className={cn(
          'flex items-center transition-all duration-200',
          isOpen
            ? 'h-9 px-3 rounded-lg hover:bg-primary-foreground/5 text-primary-foreground/60 hover:text-primary-foreground justify-start w-full'
            : 'w-8 h-8 rounded-lg hover:bg-primary-foreground/5 text-primary-foreground/60 hover:text-primary-foreground mx-auto justify-center'
        )}
      >
        <Globe size={18} />
        {isOpen && (
          <div className="ml-3 flex items-center gap-2">
            <button
              onClick={() => handleLanguageChange('en')}
              className={cn(
                'text-xs font-medium px-2 py-1 rounded transition-colors',
                currentLang === 'en'
                  ? 'bg-primary-foreground/10 text-primary-foreground'
                  : 'text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/5'
              )}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('zh')}
              className={cn(
                'text-xs font-medium px-2 py-1 rounded transition-colors',
                currentLang === 'zh'
                  ? 'bg-primary-foreground/10 text-primary-foreground'
                  : 'text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/5'
              )}
            >
              中文
            </button>
          </div>
        )}
      </div>
    </div>
  );
}