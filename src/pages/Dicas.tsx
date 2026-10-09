import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Hand, Leaf, Heart, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

import restauranteGuardiao from '@/assets/restaurante-guardiao.jpg';
import bistro from '@/assets/bistro.jpeg';
import rio from '@/assets/rio_rastro.jpg';
import dolmen from '@/assets/Dolmen_oracao.webp';
import trilha from '@/assets/trilha-pedras.jpg';
import vale from '@/assets/vale_utopia.jpg';

type Category = 'all' | 'trail' | 'food' | 'tourism';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const Dicas = () => {
  const { language } = useLanguage();
  const [category, setCategory] = useState<Category>('all');

  const seo = {
    pt: {
      title: 'Dicas da Família | Porto Betarello',
      description:
        'Os segredos mais bem guardados da região, compartilhados com carinho pela família Betarello.',
    },
    en: {
      title: 'Family Tips | Porto Betarello',
      description:
        "The region's best-kept secrets, lovingly shared by the Betarello family.",
    },
  }[language];

  const txt = {
    heroTitle: { pt: 'Dicas da Família', en: 'Family Tips' },
    heroSubtitle: {
      pt: 'Os segredos mais bem guardados da região, compartilhados com carinho pela família Betarello. Lugares que amamos e queremos que você também descubra.',
      en: "The region's best-kept secrets, lovingly shared by the Betarello family. Places we love and want you to discover too.",
    },
    introTitle: { pt: 'Explore Como Um Local', en: 'Explore Like a Local' },
    introP1: {
      pt: 'Viver aqui por gerações nos deu algo especial: conhecimento profundo dos lugares mais autênticos e experiências que você não encontra nos guias turísticos convencionais.',
      en: "Living here for generations has given us something special: deep knowledge of the most authentic places and experiences you won't find in conventional tourist guides.",
    },
    introHighlight: {
      pt: 'Estas são nossas dicas pessoais — aquela praia escondida onde levamos os amigos, o restaurante familiar que serve o melhor peixe da região, a trilha com a vista mais incrível ao amanhecer.',
      en: 'These are our personal tips — that hidden beach where we take friends, the family restaurant that serves the best fish in the region, the trail with the most incredible sunrise view.',
    },
    introP2: {
      pt: 'Explore, descubra e crie memórias inesquecíveis com as nossas recomendações.',
      en: 'Explore, discover and create unforgettable memories with our recommendations.',
    },
    tabs: {
      all: { pt: 'Todas', en: 'All' },
      trail: { pt: 'Trilhas', en: 'Trails' },
      food: { pt: 'Gastronomia', en: 'Gastronomy' },
      tourism: { pt: 'Turismo', en: 'Tourism' },
    },
    wellnessBadge: { pt: 'PARCEIRA RECOMENDADA', en: 'RECOMMENDED PARTNER' },
    wellnessTitle: { pt: 'Renove Corpo e Mente', en: 'Renew Body and Mind' },
    wellnessP1: {
      pt: 'Durante sua estadia, recomendamos os serviços da nossa querida irmã, especialista em terapias holísticas e bem-estar. Uma experiência transformadora que complementa perfeitamente seus dias de descanso em nossos refúgios.',
      en: 'During your stay, we recommend the services of our dear sister, a specialist in holistic therapies and wellness. A transformative experience that perfectly complements your days of rest in our retreats.',
    },
    wellnessP2: {
      pt: 'Com anos de experiência e formação internacional, ela oferece tratamentos personalizados que harmonizam corpo, mente e espírito.',
      en: 'With years of experience and international training, she offers personalized treatments that harmonize body, mind and spirit.',
    },
    wellnessCta: { pt: 'Conheça os Serviços', en: 'Discover the Services' },
  };

  const tips = [
    {
      cat: 'trail' as const,
      img: vale,
      location: { pt: 'Guarda do Embaú, SC', en: 'Guarda do Embaú, SC' },
      title: { pt: 'Vale da Utopia — Guarda do Embaú', en: 'Vale da Utopia — Guarda do Embaú' },
      desc: {
        pt: 'Indicamos para quem gosta de trilhas leves, natureza preservada e paisagens que convidam à contemplação. O caminho passa por mata nativa e leva a praias mais tranquilas, ideais para desacelerar e se reconectar.',
        en: 'We recommend it for those who enjoy easy trails, preserved nature, and landscapes that invite contemplation. The path goes through native forest and leads to quieter beaches, perfect for slowing down and reconnecting.',
      },
    },
    {
      cat: 'trail' as const,
      img: trilha,
      location: { pt: 'Praia do Rosa, SC', en: 'Praia do Rosa, SC' },
      title: { pt: 'Trilha do Morro das Pedras', en: 'Morro das Pedras Trail' },
      desc: {
        pt: 'Vista 360° de tirar o fôlego! A trilha é curta (40 min) mas íngreme. Vá ao nascer do sol para uma experiência mágica. Nosso spot secreto para meditação.',
        en: 'Breathtaking 360° view! The trail is short (40 min) but steep. Go at sunrise for a magical experience. Our secret spot for meditation.',
      },
    },
    {
      cat: 'food' as const,
      img: restauranteGuardiao,
      location: { pt: 'Palhoça, SC', en: 'Palhoça, SC' },
      title: { pt: 'Restaurante Guardião', en: 'Restaurante Guardião' },
      desc: {
        pt: 'Indicamos este restaurante pelo bom atendimento e pelo strogonoff de camarão, que é bem servido e chega rápido à mesa. O ambiente é amplo e a localização, próxima à praia, facilita muito para quem busca um almoço prático depois do mar.',
        en: 'We recommend this restaurant for its good service and the shrimp stroganoff, which is well served and arrives quickly. The space is large, and its location near the beach makes it a convenient choice for lunch.',
      },
    },
    {
      cat: 'trail' as const,
      img: dolmen,
      location: { pt: 'Ponta do Caçador, SC', en: 'Ponta do Caçador, SC' },
      title: { pt: 'Dólmen da Oração', en: 'Dólmen da Oração' },
      desc: {
        pt: 'Indicamos para quem busca silêncio, contato com a natureza e momentos de introspecção. O local é conhecido pelas formações de pedras e pela atmosfera tranquila, ideal para pausas, contemplação e conexão interior.',
        en: 'We recommend it for those seeking silence, nature, and moments of introspection. The site is known for its stone formations and peaceful atmosphere, ideal for pauses, contemplation, and inner connection.',
      },
    },
    {
      cat: 'tourism' as const,
      img: rio,
      location: { pt: 'Bom Jardim da Serra / Lauro Müller, SC', en: 'Bom Jardim da Serra / Lauro Müller, SC' },
      title: { pt: 'Serra do Rio do Rastro', en: 'Serra do Rio do Rastro' },
      desc: {
        pt: 'Uma das estradas mais impressionantes do Brasil, famosa por suas curvas e mirantes. Ideal para fotos e contemplação. No inverno, as temperaturas caem bastante e pode haver geada. Leve agasalho.',
        en: 'One of the most impressive roads in Brazil, famous for its curves and viewpoints. Perfect for photos and sightseeing. In winter, temperatures drop significantly and frost may occur. Bring warm clothes.',
      },
    },
    {
      cat: 'food' as const,
      img: bistro,
      location: { pt: 'Praia do Rosa, Imbituba, SC', en: 'Praia do Rosa, Imbituba, SC' },
      title: { pt: 'Bistrô Pedra da Vigia', en: 'Pedra da Vigia Bistro' },
      desc: {
        pt: 'Restaurante localizado em um dos pontos mais altos da Praia do Rosa, conhecido pelo jantar ao pôr do sol. Trabalha com menu degustação e ingredientes locais. Recomenda-se reserva.',
        en: 'Restaurant located at one of the highest points of Praia do Rosa, known for sunset dinners. Offers a tasting menu with local ingredients. Reservation recommended.',
      },
    },
  ];

  const wellnessFeatures = [
    { icon: Sparkles, title: { pt: 'Yoga & Meditação', en: 'Yoga & Meditation' }, desc: { pt: 'Aulas particulares e em grupo', en: 'Private and group classes' } },
    { icon: Hand, title: { pt: 'Massoterapia', en: 'Massage Therapy' }, desc: { pt: 'Técnicas relaxantes e terapêuticas', en: 'Relaxing and therapeutic techniques' } },
    { icon: Leaf, title: { pt: 'Terapia Holística', en: 'Holistic Therapy' }, desc: { pt: 'Reiki, aromaterapia e mais', en: 'Reiki, aromatherapy and more' } },
    { icon: Heart, title: { pt: 'Retiros Personalizados', en: 'Custom Retreats' }, desc: { pt: 'Programas completos de bem-estar', en: 'Complete wellness programs' } },
  ];

  const badgeColor = (c: 'trail' | 'food' | 'tourism') =>
    c === 'trail'
      ? 'bg-emerald-600 text-white'
      : c === 'food'
        ? 'bg-accent text-accent-foreground'
        : 'bg-primary text-primary-foreground';

  const filtered = category === 'all' ? tips : tips.filter((t) => t.cat === category);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="/dicas" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80"
          alt={txt.heroTitle[language]}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-luxury relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground"
        >
          <span className="mb-6 h-0.5 w-20 bg-accent" />
          <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            {txt.heroTitle[language]}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base text-primary-foreground/90 md:text-lg">
            {txt.heroSubtitle[language]}
          </p>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              {txt.introTitle[language]}
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light" />
            <p className="mt-8 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              {txt.introP1[language]}
            </p>
            <div className="my-8 rounded-2xl border-l-4 border-accent bg-muted p-6 text-left font-body text-base italic text-foreground md:text-lg">
              {txt.introHighlight[language]}
            </div>
            <p className="font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              {txt.introP2[language]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-8">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {(['all', 'trail', 'food', 'tourism'] as Category[]).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border-2 px-5 py-2 font-body text-sm font-medium transition-all ${
                  category === c
                    ? 'border-primary bg-primary text-primary-foreground shadow-md'
                    : 'border-border bg-background text-foreground hover:border-primary'
                }`}
              >
                {txt.tabs[c][language]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="pb-20 md:pb-28">
        <div className="container-luxury">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filtered.map((tip, i) => (
              <motion.article
                key={`${tip.title.pt}-${i}`}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-card shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tip.img}
                    alt={tip.title[language]}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wider ${badgeColor(tip.cat)}`}
                  >
                    {txt.tabs[tip.cat][language].toUpperCase()}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{tip.location[language]}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary">
                    {tip.title[language]}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                    {tip.desc[language]}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Partner */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <motion.div {...fadeUp} className="mb-10 text-center">
            <span className="inline-block rounded-full bg-accent/15 px-4 py-1.5 font-body text-xs font-semibold tracking-widest text-accent-foreground">
              {txt.wellnessBadge[language]}
            </span>
          </motion.div>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div {...fadeUp} className="overflow-hidden rounded-2xl shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80"
                alt={txt.wellnessTitle[language]}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div {...fadeUp}>
              <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
                {txt.wellnessTitle[language]}
              </h2>
              <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light" />
              <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
                {txt.wellnessP1[language]}
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                {txt.wellnessP2[language]}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {wellnessFeatures.map((f) => (
                  <div key={f.title.pt} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <f.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-semibold text-primary">
                        {f.title[language]}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground">{f.desc[language]}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild variant="default" size="lg" className="mt-8">
                <a
                  href="https://www.instagram.com/serena.a.mente?igsh=cG9mc2V3aTIxNTI4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  {txt.wellnessCta[language]}
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dicas;
