import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Properties from '@/components/Properties';

const Refugios = () => {
  const { language } = useLanguage();
  const seo = {
    pt: {
      title: 'Refúgios | Porto Betarello',
      description: 'Conheça nossos refúgios de luxo em Florianópolis, Praia do Rosa e São Paulo.',
    },
    en: {
      title: 'Retreats | Porto Betarello',
      description: 'Discover our luxury retreats in Florianópolis, Rosa Beach and São Paulo.',
    },
  }[language];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="/refugios" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="/refugios" />
      </Helmet>
      <div className="pt-8">
        <Properties />
      </div>
    </>
  );
};

export default Refugios;
