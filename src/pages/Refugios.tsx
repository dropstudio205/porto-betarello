import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Bed, Bath, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/refugios-hero.jpg.asset.json';
import { retreats } from '@/data/retreats';

const Refugios = () => {
  const { language } = useLanguage();

  const seo = {
    pt: {
      title: 'Refúgios em Palhoça, Florianópolis e Amparo | Porto Betarello',
      description:
        'Alugue casas e refúgios exclusivos em Palhoça SC, Florianópolis e Amparo SP. Experiência estilo Airbnb, conforto e praticidade.',
    },
    en: {
      title: 'Retreats in Palhoça, Florianópolis and Amparo | Porto Betarello',
      description:
        'Rent exclusive homes and retreats in Palhoça SC, Florianópolis and Amparo SP. Airbnb-style stays with comfort and ease.',
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

      {/* Page Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-16">
        <img src={heroBg.url} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/50" />
        <div className="relative z-10 container-luxury text-center text-primary-foreground max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-20 bg-gradient-to-r from-accent to-gold-light mx-auto mb-6" />
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {language === 'pt' ? 'Nossos Refúgios' : 'Our Retreats'}
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/95 leading-relaxed">
              {language === 'pt'
                ? 'Cada refúgio é cuidadosamente preparado para oferecer uma experiência única de conforto, privacidade e conexão com a natureza.'
                : 'Each retreat is carefully prepared to offer a unique experience of comfort, privacy and connection with nature.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-gradient-to-br from-muted/40 to-background">
        <div className="container-luxury max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight">
              {language === 'pt'
                ? 'Onde Cada Momento se Transforma em Memória'
                : 'Where Every Moment Becomes a Memory'}
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              {language === 'pt'
                ? 'Nossa coleção de refúgios foi escolhida a dedo pela família Betarello. Cada propriedade conta sua própria história e oferece uma experiência distinta, mas todas compartilham o mesmo compromisso com excelência, aconchego e atenção aos detalhes que nos definem.'
                : 'Our collection of retreats was hand-picked by the Betarello family. Each property tells its own story and offers a distinct experience, but all share the same commitment to excellence, warmth and attention to detail that define us.'}
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed italic">
              {language === 'pt'
                ? 'De casas à beira-mar a refúgios nas montanhas, cada espaço foi pensado para proporcionar descanso, reconexão e momentos inesquecíveis.'
                : 'From beachfront houses to mountain retreats, every space was designed to provide rest, reconnection and unforgettable moments.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreats.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-card transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                    {p.comingSoon && (
                      <span className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1.5 text-xs font-semibold">
                        {language === 'pt' ? 'Imagem ilustrativa' : 'Illustrative image'}
                      </span>
                    )}
                    {p.comingSoon && (
                      <span className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-1.5 text-xs font-semibold">
                        {language === 'pt' ? 'EM BREVE' : 'COMING SOON'}
                      </span>
                    )}
                    {p.featured && (
                    <span className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider">
                      {language === 'pt' ? 'DESTAQUE' : 'FEATURED'}
                    </span>
                  )}
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{p.comingSoon ? (language === 'pt' ? 'Localização a confirmar' : 'Location to be confirmed') : p.location}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-5">{p.name}</h3>
                  {p.comingSoon && <p className="mb-5 font-body text-sm leading-relaxed text-muted-foreground">{p.description[language]}</p>}

                  <div className="mt-auto">
                    {!p.comingSoon && <div className="flex gap-6 py-4 border-t border-border/40">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Bed className="w-4 h-4 text-accent" />
                        {p.rooms}{' '}
                        {language === 'pt'
                          ? p.rooms === 1 ? 'quarto' : 'quartos'
                          : p.rooms === 1 ? 'bedroom' : 'bedrooms'}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Bath className="w-4 h-4 text-accent" />
                        {p.baths}{' '}
                        {language === 'pt'
                          ? p.baths === 1 ? 'banheiro' : 'banheiros'
                          : p.baths === 1 ? 'bathroom' : 'bathrooms'}
                      </div>
                    </div>}
                    <Button asChild className="w-full mt-2">
                      <Link to={`/refugios/${p.slug}`}>
                        {p.comingSoon ? (language === 'pt' ? 'Conhecer a novidade' : 'Explore this preview') : (language === 'pt' ? 'Ver detalhes e reservar' : 'View details and book')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Refugios;
