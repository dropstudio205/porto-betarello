import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import BlogSection from '@/components/BlogSection';
import FeedbackSection from '@/components/FeedbackSection';
import RetreatMoment from '@/components/RetreatMoment';

const Home = () => {
  const { language } = useLanguage();

  const seo = {
    pt: {
      title: 'Porto Betarello | Aluguel de Casas de Luxo em Florianópolis e São Paulo',
      description:
        'Refúgios de luxo da família Betarello para suas férias. Casas e apartamentos premium em Florianópolis, Praia do Rosa e interior de São Paulo.',
    },
    en: {
      title: 'Porto Betarello | Luxury Vacation Rentals in Florianópolis and São Paulo',
      description:
        'Luxury retreats by the Betarello family for your vacation. Premium houses and apartments in Florianópolis, Rosa Beach and São Paulo countryside.',
    },
  }[language];

  return (
    <>
      <Helmet>
        <html lang={language === 'pt' ? 'pt-BR' : 'en'} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="/" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Hero />
      <Gallery />
      <RetreatMoment />
      <BlogSection />
      <FeedbackSection />
    </>
  );
};

export default Home;
