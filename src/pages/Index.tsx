import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Properties from '@/components/Properties';
import Tips from '@/components/Tips';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const { language } = useLanguage();

  const seoContent = {
    pt: {
      title: 'Porto Betarello | Aluguel de Casas de Luxo em Florianópolis e São Paulo',
      description: 'Refúgios de luxo da família Betarello para suas férias. Casas e apartamentos premium em Florianópolis, Praia do Rosa e interior de São Paulo. Reserve agora.',
      keywords: 'aluguel de temporada, casas de luxo, Florianópolis, Praia do Rosa, férias, hospedagem premium, apartamentos luxo',
    },
    en: {
      title: 'Porto Betarello | Luxury Vacation Rentals in Florianópolis and São Paulo',
      description: 'Luxury retreats by the Betarello family for your vacation. Premium houses and apartments in Florianópolis, Rosa Beach and São Paulo countryside. Book now.',
      keywords: 'vacation rental, luxury homes, Florianópolis, Rosa Beach, holidays, premium accommodation, luxury apartments',
    },
  };

  const seo = seoContent[language];

  return (
    <>
      <Helmet>
        <html lang={language === 'pt' ? 'pt-BR' : 'en'} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'pt' ? 'pt_BR' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <link rel="canonical" href="https://portobetarello.com.br" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Gallery />
          <Properties />
          <Tips />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
