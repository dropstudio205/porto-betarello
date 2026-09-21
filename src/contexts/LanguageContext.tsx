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
  'nav.tips': { pt: 'Dicas', en: 'Tips' },
  'nav.shop': { pt: 'Shop', en: 'Shop' },
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
  'tips.subtitle': { pt: 'Descubra os lugares favoritos da família Betarello', en: "Discover the Betarello family's favorite places" },
  'tips.cta': { pt: 'Ver todas as dicas', en: 'View all tips' },
  'tip1.title': { pt: 'Praia Secreta da Lagoinha', en: 'Lagoinha Secret Beach' },
  'tip1.desc': { pt: 'Uma joia escondida com águas cristalinas e pouca movimentação', en: 'A hidden gem with crystal clear waters and few crowds' },
  'tip2.title': { pt: 'Restaurante Ostradamus', en: 'Ostradamus Restaurant' },
  'tip2.desc': { pt: 'Frutos do mar frescos com vista panorâmica inesquecível', en: 'Fresh seafood with an unforgettable panoramic view' },
  'tip3.title': { pt: 'Trilha do Morro das Pedras', en: 'Morro das Pedras Trail' },
  'tip3.desc': { pt: 'Vista de 360° de toda a ilha ao nascer do sol', en: '360° view of the entire island at sunrise' },

  // Blog
  'blog.title': { pt: 'Blog Betarello', en: 'Betarello Blog' },
  'blog.subtitle': { pt: 'Histórias, memórias e curiosidades da família Betarello', en: 'Stories, memories and curiosities from the Betarello family' },
  'blog.post1.title': { pt: 'Arroz, feijão, moela e amor', en: 'Rice, beans, gizzard and love' },
  'blog.post1.desc': { pt: 'Há comidas que alimentam o corpo. E há aquelas que alimentam a história.', en: 'Some foods feed the body. Others feed the story.' },
  'blog.post2.title': { pt: 'Viajar também é um lugar dentro da mente', en: 'Traveling is also a place inside the mind' },
  'blog.post2.desc': { pt: 'Viajar não é apenas mudar de endereço.', en: 'Traveling is more than changing addresses.' },
  'blog.post3.title': { pt: 'Curiosidade Literária: As Raízes Reais de "Grande Sertão: Veredas"', en: 'Literary Curiosity: The Real Roots of "Grande Sertão: Veredas"' },
  'blog.post3.desc': { pt: 'Você sabia que o icônico romance Grande Sertão tem inspirações reais?', en: 'Did you know the iconic novel Grande Sertão has real-life roots?' },
  'blog.cta': { pt: 'Ver Blog no Substack', en: 'View blog on Substack' },
  'shop.title': { pt: 'Nossa Loja', en: 'Our Shop' },
  'shop.subtitle': { pt: 'Produtos selecionados especialmente para complementar sua experiência em nossos refúgios.', en: 'Products specially selected to complement your experience in our retreats.' },
  'shop.cta': { pt: 'Acessar Nossa Loja', en: 'Visit Our Shop' },

  // Feedback
  'feedback.title': { pt: 'Feedback', en: 'Feedback' },
  'feedback.subtitle': { pt: 'Veja o feedback dos nossos hóspedes', en: 'See what our guests are saying' },
  'feedback.t1.quote': {
    pt: 'Tive dias incríveis durante minha estadia neste apartamento em Palhoça. O lugar é simplesmente aconchegante, bonito e muito bem cuidado, daqueles que fazem a gente se sentir em casa desde o primeiro momento.',
    en: 'I had incredible days during my stay at this apartment in Palhoça. The place is simply cozy, beautiful and very well kept — the kind that makes you feel at home from the very first moment.',
  },
  'feedback.t1.location': { pt: 'Palhoça', en: 'Palhoça' },
  'feedback.t2.quote': {
    pt: 'Lugar perfeito para descansar com a família. Cada detalhe foi pensado com carinho, e a vista é simplesmente espetacular.',
    en: 'A perfect place to rest with the family. Every detail was carefully thought through, and the view is simply spectacular.',
  },
  'feedback.t2.author': { pt: 'Família hóspede', en: 'Guest family' },
  'feedback.t2.location': { pt: 'Verão no Sul do Brasil', en: 'Summer in Southern Brazil' },
  'feedback.t3.quote': {
    pt: 'Uma experiência que renova. Voltamos descansados, com memórias que vamos guardar para sempre.',
    en: 'A truly renewing experience. We came back rested, with memories we will keep forever.',
  },
  'feedback.t3.author': { pt: 'Família hóspede', en: 'Guest family' },
  'feedback.t3.location': { pt: 'Verão no Sul do Brasil', en: 'Summer in Southern Brazil' },

  // Story page
  'story.title': { pt: 'Nossa História', en: 'Our Story' },
  'story.p1': {
    pt: 'A família Betarello compartilha há gerações o prazer de hospedar. Tudo começou com encontros ao redor da mesa, com receitas passadas de avó para neta e com a vontade de oferecer aos amigos um pedaço da nossa casa.',
    en: 'The Betarello family has shared the pleasure of hosting for generations. It all started around the table, with recipes passed down from grandmother to granddaughter and the desire to offer friends a piece of our home.',
  },
  'story.p2': {
    pt: 'Com o tempo, esse cuidado virou propósito. Cada refúgio foi escolhido a dedo, pensado nos detalhes e preparado para que cada hóspede viva uma experiência verdadeira de descanso, conexão e bem-estar.',
    en: 'Over time, this care became purpose. Each retreat was hand-picked, designed with attention to detail and prepared so that every guest enjoys a true experience of rest, connection and well-being.',
  },
  'story.p3': {
    pt: 'Hoje, o Porto Betarello é a nossa forma de continuar essa tradição: receber bem, com carinho e com a alma da nossa família, em cada lugar que oferecemos.',
    en: 'Today, Porto Betarello is our way of continuing this tradition: welcoming people warmly, with care and with the soul of our family, in every place we offer.',
  },

  // Contact page
  'contact.title': { pt: 'Fale com a gente', en: 'Get in touch' },
  'contact.subtitle': {
    pt: 'Estamos aqui para ajudar você a planejar sua próxima estadia. Escolha o canal de sua preferência.',
    en: 'We are here to help you plan your next stay. Choose your preferred channel.',
  },
  'contact.phoneBR': { pt: 'Telefone Brasil', en: 'Phone Brazil' },
  'contact.phoneUS': { pt: 'Telefone EUA', en: 'Phone USA' },

  // Footer
  'footer.about': {
    pt: 'A família Betarello compartilha há gerações o prazer de hospedar e proporcionar experiências únicas em nossos refúgios.',
    en: 'The Betarello family has shared for generations the pleasure of hosting and providing unique experiences in our retreats.',
  },
  'footer.rights': { pt: '© 2026 Família Betarello. Todos os direitos reservados.', en: '© 2026 Betarello Family. All rights reserved.' },

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
