import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Bath, Bed, Check, ExternalLink, MapPin, MessageCircle, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { getRetreatBySlug } from '@/data/retreats';

const WHATSAPP_NUMBER = '5519999169958';

const RetreatDetail = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const retreat = getRetreatBySlug(slug);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  if (!retreat) return <Navigate to="/refugios" replace />;

  const text = {
    back: { pt: 'Voltar aos refúgios', en: 'Back to retreats' },
    about: { pt: 'Sobre este refúgio', en: 'About this retreat' },
    rooms: { pt: retreat.rooms === 1 ? 'quarto' : 'quartos', en: retreat.rooms === 1 ? 'bedroom' : 'bedrooms' },
    baths: { pt: retreat.baths === 1 ? 'banheiro' : 'banheiros', en: retreat.baths === 1 ? 'bathroom' : 'bathrooms' },
    guests: { pt: retreat.guests === 1 ? 'hóspede' : 'hóspedes', en: retreat.guests === 1 ? 'guest' : 'guests' },
    features: { pt: 'O que este lugar oferece', en: 'What this place offers' },
    airbnb: { pt: 'Link do Airbnb em breve', en: 'Airbnb link coming soon' },
    contact: { pt: 'Falar com o responsável', en: 'Contact the host' },
    location: { pt: 'Onde você estará', en: "Where you'll be" },
    approximate: {
      pt: 'A localização exibida é aproximada. O endereço completo é informado aos hóspedes após a confirmação da reserva.',
      en: 'The location shown is approximate. The full address is shared with guests after the booking is confirmed.',
    },
  };

  const whatsappMessage = language === 'pt'
    ? `Olá! Gostaria de saber mais sobre o refúgio ${retreat.name}.`
    : `Hello! I would like to know more about ${retreat.name}.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(retreat.mapQuery)}&z=12&output=embed`;
  const title = `${retreat.name} | Porto Betarello`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={retreat.description[language]} />
        <link rel="canonical" href={`/refugios/${retreat.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={retreat.description[language]} />
      </Helmet>

      <section className="border-b border-border/30 bg-background py-8 md:py-12">
        <div className="container-luxury">
          <Link to="/refugios" className="mb-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            {text.back[language]}
          </Link>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-display text-4xl font-bold leading-tight text-primary md:text-5xl">{retreat.name}</h1>
              <p className="mt-3 flex items-center gap-2 font-body text-sm text-muted-foreground md:text-base">
                <MapPin className="h-4 w-4 text-accent" /> {retreat.comingSoon ? (language === 'pt' ? 'Localização a confirmar' : 'Location to be confirmed') : retreat.location}
              </p>
            </div>
            {retreat.featured && (
              <span className="w-fit rounded-full bg-accent px-4 py-2 font-body text-xs font-bold uppercase text-accent-foreground">
                {language === 'pt' ? 'Destaque' : 'Featured'}
              </span>
            )}
            {retreat.comingSoon && <span className="w-fit bg-accent px-4 py-2 font-body text-xs font-bold uppercase text-accent-foreground">{language === 'pt' ? 'Em breve' : 'Coming soon'}</span>}
          </div>
        </div>
      </section>

      <section className="bg-background pb-20 pt-6 md:pb-28 md:pt-10">
        <div className="container-luxury grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(340px,0.75fr)] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted shadow-elegant md:aspect-[16/10]">
              <img src={retreat.images[selectedPhoto]} alt={`${retreat.name} — ${language === 'pt' ? `foto ${selectedPhoto + 1}` : `photo ${selectedPhoto + 1}`}`} className="h-full w-full object-cover" />
            </div>
            {retreat.comingSoon && <p className="mt-3 text-sm text-muted-foreground">{language === 'pt' ? 'Imagens ilustrativas — fotos deste refúgio em breve.' : 'Illustrative images — photos of this retreat coming soon.'}</p>}
            <div className="mt-3 grid grid-cols-4 gap-3">
              {retreat.images.map((image, index) => (
                <Button
                  key={image}
                  type="button"
                  variant="ghost"
                  onClick={() => setSelectedPhoto(index)}
                  aria-label={language === 'pt' ? `Ver foto ${index + 1}` : `View photo ${index + 1}`}
                  aria-pressed={selectedPhoto === index}
                  className={`h-auto overflow-hidden rounded-md border-2 p-0 focus-visible:ring-offset-1 ${selectedPhoto === index ? 'border-accent' : 'border-transparent opacity-75 hover:opacity-100'}`}
                >
                  <img src={image} alt="" className="aspect-[4/3] h-full w-full object-cover" />
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="lg:sticky lg:top-28">
            <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">{text.about[language]}</h2>
            {!retreat.comingSoon && <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-y border-border/40 py-5 font-body text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Bed className="h-5 w-5 text-accent" />{retreat.rooms} {text.rooms[language]}</span>
              <span className="flex items-center gap-2"><Bath className="h-5 w-5 text-accent" />{retreat.baths} {text.baths[language]}</span>
              <span className="flex items-center gap-2"><Users className="h-5 w-5 text-accent" />{retreat.guests} {text.guests[language]}</span>
            </div>}
            <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">{retreat.description[language]}</p>

            {!retreat.comingSoon && <><h3 className="mt-8 font-display text-xl font-semibold text-primary">{text.features[language]}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {retreat.highlights.map((highlight) => (
                <li key={highlight.pt} className="flex items-start gap-3 font-body text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {highlight[language]}
                </li>
              ))}
            </ul></>}

            <div className="mt-9 grid gap-3">
              {retreat.comingSoon ? null : retreat.airbnbUrl ? (
                <Button asChild size="lg" className="w-full">
                  <a href={retreat.airbnbUrl} target="_blank" rel="noopener noreferrer"><ExternalLink />{language === 'pt' ? 'Ver no Airbnb' : 'View on Airbnb'}</a>
                </Button>
              ) : (
                <Button size="lg" className="w-full" disabled><ExternalLink />{text.airbnb[language]}</Button>
              )}
              <Button asChild variant="hero" size="lg" className="w-full">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle />{text.contact[language]}</a>
              </Button>
            </div>
          </motion.aside>
        </div>
      </section>

      {!retreat.comingSoon && <section className="bg-muted/50 py-20 md:py-24">
        <div className="container-luxury">
          <div className="mb-8 max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">{text.location[language]}</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground md:text-base">{text.approximate[language]}</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border/40 bg-card shadow-elegant">
            <iframe title={`${text.location[language]} — ${retreat.name}`} src={mapUrl} className="h-[380px] w-full md:h-[480px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>}
    </>
  );
};

export default RetreatDetail;