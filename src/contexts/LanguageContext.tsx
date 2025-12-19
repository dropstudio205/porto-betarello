import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export const translations: Translations = {
  // Header
  'nav.home': { pt: 'Início', en: 'Home' },
  'nav.story': { pt: 'Nossa História', en: 'Our Story' },
  'nav.retreats': { pt: 'Refúgios', en: 'Retreats' },
  'nav.tips': { pt: 'Dicas da Família', en: 'Family Tips' },
  'nav.contact': { pt: 'Contato', en: 'Contact' },

  // Hero
  'hero.subtitle': {
    pt: 'Refúgios de luxo preparados pela família Betarello para você desacelerar, reconectar e viver o melhor da vida.',
    en: 'Luxury retreats crafted by the Betarello family for you to slow down, reconnect, and experience the best of life.',
  },
  'hero.description': {
    pt: 'Viajar não é apenas mudar de lugar — é restaurar a mente, reduzir o estresse e criar memórias que duram para sempre. Nossos refúgios foram pensados para oferecer exatamente isso: paz, conforto e bem-estar em meio à natureza.',
    en: "Traveling is not just changing places — it restores the mind, reduces stress, and creates memories that last forever. Our retreats were designed to offer exactly that: peace, comfort, and well-being amidst nature.",
  },
  'hero.cta': { pt: 'Descubra nossos refúgios', en: 'Discover our retreats' },

  // Gallery
  'gallery.title': { pt: 'Momentos Porto Betarello', en: 'Porto Betarello Moments' },
  'gallery.caption1': { pt: 'Sala de estar com vista para o mar', en: 'Living room with ocean view' },
  'gallery.caption2': { pt: 'Família aproveitando o pôr do sol', en: 'Family enjoying the sunset' },
  'gallery.caption3': { pt: 'Piscina infinita tropical', en: 'Tropical infinity pool' },
  'gallery.caption4': { pt: 'Suíte aconchegante', en: 'Cozy bedroom suite' },
  'gallery.caption5': { pt: 'Trilha na Mata Atlântica', en: 'Atlantic Forest trail' },
  'gallery.caption6': { pt: 'Jantar ao pôr do sol', en: 'Sunset dinner' },

  // Properties
  'properties.title': { pt: 'Nossos Refúgios', en: 'Our Retreats' },
  'properties.cta': { pt: 'Ver detalhes e reservar', en: 'View details and book' },
  'properties.rooms': { pt: 'quartos', en: 'rooms' },
  'properties.baths': { pt: 'banheiros', en: 'baths' },

  // Property Names & Locations
  'property1.name': { pt: 'Villa Praia do Rosa', en: 'Rosa Beach Villa' },
  'property1.location': { pt: 'Praia do Rosa, SC', en: 'Rosa Beach, SC' },
  'property2.name': { pt: 'Refúgio da Lagoa', en: 'Lagoon Retreat' },
  'property2.location': { pt: 'Lagoa da Conceição, SC', en: 'Conceição Lagoon, SC' },
  'property3.name': { pt: 'Fazenda Serra Verde', en: 'Green Hills Farm' },
  'property3.location': { pt: 'Campos do Jordão, SP', en: 'Campos do Jordão, SP' },
  'property4.name': { pt: 'Cobertura Vista Mar', en: 'Ocean View Penthouse' },
  'property4.location': { pt: 'Jurerê Internacional, SC', en: 'Jurerê International, SC' },

  // Tips
  'tips.title': { pt: 'Dicas da Família', en: 'Family Tips' },
  'tips.subtitle': { pt: 'Descubra os lugares favoritos da família Betarello', en: 'Discover the Betarello family\'s favorite places' },
  'tips.cta': { pt: 'Ver todas as dicas', en: 'View all tips' },
  'tip1.title': { pt: 'Praia Secreta da Lagoinha', en: 'Lagoinha Secret Beach' },
  'tip1.desc': { pt: 'Uma joia escondida com águas cristalinas e pouca movimentação', en: 'A hidden gem with crystal clear waters and few crowds' },
  'tip2.title': { pt: 'Restaurante Ostradamus', en: 'Ostradamus Restaurant' },
  'tip2.desc': { pt: 'Frutos do mar frescos com vista panorâmica inesquecível', en: 'Fresh seafood with an unforgettable panoramic view' },
  'tip3.title': { pt: 'Trilha do Morro das Pedras', en: 'Morro das Pedras Trail' },
  'tip3.desc': { pt: 'Vista de 360° de toda a ilha ao nascer do sol', en: '360° view of the entire island at sunrise' },

  // Footer
  'footer.about': {
    pt: 'A família Betarello compartilha há gerações o prazer de hospedar e proporcionar experiências únicas em nossos refúgios.',
    en: 'The Betarello family has shared for generations the pleasure of hosting and providing unique experiences in our retreats.',
  },
  'footer.rights': { pt: '© 2025 Família Betarello. Todos os direitos reservados.', en: '© 2025 Betarello Family. All rights reserved.' },

  // WhatsApp
  'whatsapp.message': {
    pt: 'Olá! Gostaria de saber mais sobre os refúgios Porto Betarello.',
    en: 'Hello! I would like to know more about Porto Betarello retreats.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
