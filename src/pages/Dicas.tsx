import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Tips from '@/components/Tips';

const Dicas = () => {
  const { language } = useLanguage();
  const seo = {
    pt: {
      title: 'Dicas da Família | Porto Betarello',
      description: 'Os lugares favoritos da família Betarello para sua viagem.',
    },
    en: {
      title: 'Family Tips | Porto Betarello',
      description: 'The Betarello family\'s favorite spots for your trip.',
    },
  }[language];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="/dicas" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="/dicas" />
      </Helmet>
      <div className="pt-8">
        <Tips />
      </div>
    </>
  );
};

export default Dicas;
