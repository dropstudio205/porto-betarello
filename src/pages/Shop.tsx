import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';

const Shop = () => {
  const { language, t } = useLanguage();

  const seo = {
    pt: {
      title: 'Shop | Porto Betarello',
      description: 'A loja Porto Betarello está em construção. Em breve teremos novidades.',
    },
    en: {
      title: 'Shop | Porto Betarello',
      description: 'The Porto Betarello shop is under construction. More to come soon.',
    },
  }[language];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="/shop" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden mt-16">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container-luxury text-center text-primary-foreground max-w-2xl"
        >
          <div className="h-px w-20 bg-gradient-to-r from-accent to-gold-light mx-auto mb-6" />
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-5">{t('shop.title')}</h1>
          <p className="font-body text-lg text-primary-foreground/95 leading-relaxed">
            {language === 'pt' ? 'Algo especial está a caminho.' : 'Something special is on its way.'}
          </p>
        </motion.div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="container-luxury max-w-3xl text-center">
          <div className="mx-auto mb-8 h-0.5 w-16 bg-accent" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6">
            {language === 'pt' ? 'Estamos construindo nossa loja' : 'Our shop is under construction'}
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            {language === 'pt' ? 'Em breve teremos novidades para você. Aguarde!' : 'We will have news for you soon. Stay tuned!'}
          </p>
        </div>
      </section>
    </>
  );
};

export default Shop;
