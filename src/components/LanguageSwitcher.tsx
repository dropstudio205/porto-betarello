import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted rounded-full p-1">
      <button
        onClick={() => setLanguage('pt')}
        className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
          language === 'pt' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-primary'
        }`}
      >
        {language === 'pt' && (
          <motion.div
            layoutId="languageIndicator"
            className="absolute inset-0 bg-primary rounded-full"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">🇧🇷</span>
        <span className="relative z-10 hidden sm:inline">PT</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
          language === 'en' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-primary'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="languageIndicator"
            className="absolute inset-0 bg-primary rounded-full"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">🇬🇧</span>
        <span className="relative z-10 hidden sm:inline">EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
