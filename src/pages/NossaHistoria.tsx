import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';

const NossaHistoria = () => {
  const { t, language } = useLanguage();

  const seo = {
    pt: {
      title: 'Nossa História | Porto Betarello',
      description: 'Conheça a história da família Betarello e a tradição de hospedar.',
    },
    en: {
      title: 'Our Story | Porto Betarello',
      description: 'Discover the Betarello family story and tradition of hosting.',
    },
  }[language];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="/nossa-historia" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="/nossa-historia" />
      </Helmet>

      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container-luxury text-center">
          <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
            {t('story.title')}
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container-luxury max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            <p>{t('story.p1')}</p>
            <p>{t('story.p2')}</p>
            <p>{t('story.p3')}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NossaHistoria;
