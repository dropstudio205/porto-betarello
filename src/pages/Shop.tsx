import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const Shop = () => {
  const { language, t } = useLanguage();

  const seo = {
    pt: {
      title: 'Shop | Porto Betarello',
      description: 'Produtos selecionados pela família Betarello para complementar a experiência em nossos refúgios.',
    },
    en: {
      title: 'Shop | Porto Betarello',
      description: 'Products selected by the Betarello family to complement your stay in our retreats.',
    },
  }[language];

  const products = [
    { name: "Kinder's Prime Steak", price: 'R$ 69,99', desc: { pt: 'Intenso e saboroso, realça o sabor de cortes nobres de carne. Perfeito para grelhar ou selar.', en: 'Bold and savory, brings out the rich flavor of premium cuts. Perfect for grilling or pan-searing.' } },
    { name: "Kinder's Woodfired Garlic", price: 'R$ 69,99', desc: { pt: 'Rico e aromático, traz um sabor de alho defumado que transforma carnes, legumes e grelhados.', en: 'Rich and aromatic, brings a smoky roasted garlic flavor to meats, vegetables, and grilled dishes.' } },
    { name: "Kinder's Grilled Chicken", price: 'R$ 69,99', desc: { pt: 'Leve e saboroso, realça o sabor natural do frango com uma mistura equilibrada de ervas e especiarias.', en: 'Light and savory, enhances the natural flavor of chicken with a balanced blend of herbs and spices.' } },
    { name: "Kinder's Cowboy Butter", price: 'R$ 69,99', desc: { pt: 'Rico e amanteigado, combina alho, ervas e um leve toque picante para um sabor marcante.', en: 'Rich and buttery, blends garlic, herbs, and a hint of spice for a bold, indulgent flavor.' } },
    { name: "Kinder's All Purpose", price: 'R$ 69,99', desc: { pt: 'Versátil e equilibrado, realça o sabor de carnes, legumes e pratos do dia a dia.', en: 'Versatile and well-balanced, enhances the flavor of meats, vegetables, and everyday dishes.' } },
  ];

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
            {t('shop.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Products */}
      <section className="bg-muted py-20 md:py-24">
        <div className="container-luxury">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="overflow-hidden rounded-2xl bg-background shadow-elegant transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-muted to-background p-6">
                  <div className="font-display text-2xl text-primary/40">Kinder's</div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-primary">{p.name}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                    {p.desc[language]}
                  </p>
                  <div className="mt-4 font-display text-xl font-bold text-accent">{p.price}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="gold" size="lg">
              <a href="https://nuzap.com.br/portobetarello" target="_blank" rel="noreferrer">
                {t('shop.cta')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
