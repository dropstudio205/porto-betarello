import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';
import img1Asset from '@/assets/historia-logo.png.asset.json';
import img2Asset from '@/assets/historia-balanco.jpg.asset.json';
import img3Asset from '@/assets/historia-cafe.jpg.asset.json';
import img4Asset from '@/assets/historia-familia.jpg.asset.json';

const NossaHistoria = () => {
  const { language } = useLanguage();
  const img1 = img1Asset.url;
  const img2 = img2Asset.url;
  const img3 = img3Asset.url;
  const img4 = img4Asset.url;

  const seo = {
    pt: {
      title: 'Nossa História | Porto Betarello',
      description: 'Mais do que refúgios, compartilhamos gerações de amor pela hospitalidade.',
    },
    en: {
      title: 'Our Story | Porto Betarello',
      description: 'More than retreats, we share generations of love for hospitality.',
    },
  }[language];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7 },
  };

  const txt = {
    heroTitle: { pt: 'Nossa História', en: 'Our Story' },
    heroSubtitle: {
      pt: 'Mais do que refúgios, compartilhamos gerações de amor pela hospitalidade e pela arte de fazer cada hóspede se sentir em casa.',
      en: 'More than retreats, we share generations of love for hospitality and the art of making every guest feel at home.',
    },
    block1Title: { pt: 'Betarello', en: 'Betarello' },
    block1P1: {
      pt: 'O nome Porto Betarello carrega, em cada sílaba, a alma da minha família. Porto, porque somos abrigo. Somos o lugar de retorno quando o mundo pesa, quando o coração pede colo, quando a vida merece ser celebrada. Aqui, o afeto é presença constante, nunca exceção.',
      en: 'The name Porto Betarello carries, in every syllable, the soul of my family. Porto, because we are shelter. We are the place to return to when the world weighs heavy, when the heart asks for comfort, when life deserves to be celebrated. Here, affection is a constant presence, never an exception.',
    },
    block1P2: {
      pt: 'Betarello nasce da nossa descendência italiana e traz consigo a alegria que transborda, o riso fácil e o amor profundo pela boa comida. Como bons italianos, celebramos a vida ao redor da mesa, em conversas longas, taças que se enchem devagar, sabores que se compartilham e memórias que permanecem.',
      en: 'Betarello comes from our Italian heritage and carries with it overflowing joy, easy laughter and a deep love for good food. Like good Italians, we celebrate life around the table — in long conversations, slowly filled glasses, shared flavors and memories that remain.',
    },
    block1P3: {
      pt: 'No nome Porto também vive a nossa ancestralidade. Ele honra os passos de quem veio antes de nós, aqueles que construíram nossa história com trabalho, coragem e afeto, abrindo caminhos para que hoje pudéssemos existir, sonhar e acolher.',
      en: 'In the name Porto also lives our ancestry. It honors the steps of those who came before us, who built our story with work, courage and affection, opening paths so that today we could exist, dream and welcome.',
    },
    block2Title: { pt: 'Risos e estilo de vida', en: 'Laughter and lifestyle' },
    block2P1: {
      pt: 'Nossa família carrega uma energia rara — daquelas que transformam os lugares por onde passam. Onde chegamos, a alegria se instala sem pedir licença. O riso se espalha, as piadas surgem naturalmente, e essa leveza abraça pessoas e ambientes.',
      en: 'Our family carries a rare energy — the kind that transforms the places it passes through. Wherever we arrive, joy settles in without asking permission. Laughter spreads, jokes come naturally, and that lightness embraces people and spaces.',
    },
    block2P2: {
      pt: 'Somos, acima de tudo, aventureiros de alma. Amamos encontrar pessoas, criar vínculos, descobrir novos caminhos e, às vezes, nos perder de propósito. A natureza é nosso refúgio favorito, o cenário onde nos sentimos inteiros.',
      en: 'We are, above all, adventurers at heart. We love meeting people, building bonds, discovering new paths and, sometimes, getting lost on purpose. Nature is our favorite refuge, the setting where we feel whole.',
    },
    block2P3: {
      pt: 'Nossos dons se revelam na convivência. Cozinhar é um gesto coletivo, quase sagrado: todos vão para a cozinha. A anfitriã da casa, porém, tem um talento especial — seu arroz com feijão é daqueles que aquecem o corpo e a alma. Não somos do Nordeste, mas a farinha nunca falta, porque carinho também se serve no prato.',
      en: "Our gifts reveal themselves in shared living. Cooking is a collective, almost sacred gesture: everyone goes to the kitchen. The hostess, however, has a special talent — her rice and beans warm both body and soul. We're not from the Northeast, but cassava flour is never missing, because care is also served on the plate.",
    },
    block2P4: {
      pt: 'Plantar é outro traço que nos define. Catamos mudinhas, clonamos plantas, espalhamos vida por onde passamos. E, como bons descendentes de italianos, cultivamos longas horas à mesa, entre comida, bebida e boas conversas — talvez o ritual mais amado dessa família.',
      en: 'Planting is another trait that defines us. We gather seedlings, clone plants and spread life wherever we go. And, as good descendants of Italians, we cultivate long hours at the table, between food, drink and good conversation — perhaps the most beloved ritual of this family.',
    },
    block3Title: { pt: 'Café, vinho e alegria', en: 'Coffee, wine and joy' },
    block3P1: {
      pt: 'Se quiser saber onde me encontrar, é simples: provavelmente estarei à mesa da casa dos meus pais, saboreando um café, um vinho, uma cachaça ou um suco feito com todas as frutas disponíveis, cercada de risadas, histórias e amor.',
      en: "If you want to know where to find me, it's simple: I will probably be at my parents' table, enjoying a coffee, a wine, a cachaça or a juice made with every fruit available, surrounded by laughter, stories and love.",
    },
    block3P2: {
      pt: 'Em nossos refúgios, buscamos preservar e compartilhar essa mesma energia e leveza. Criamos espaços onde cada hóspede possa sentir, de forma genuína, o calor, a alegria e o acolhimento que nos acompanham. Lugares que convidam a desacelerar, sorrir, respirar fundo e viver o simples — que é, quase sempre, o mais inesquecível.',
      en: 'In our retreats, we seek to preserve and share that same energy and lightness. We create spaces where every guest can genuinely feel the warmth, joy and welcome that follow us. Places that invite you to slow down, smile, breathe deeply and live the simple — which is, almost always, the most unforgettable.',
    },
    block3P3: {
      pt: 'Nossa família deseja deixar como herança essa marca especial: um porto de chegada, de descanso e de reconexão com o bem-estar.',
      en: 'Our family wishes to leave this special mark as a legacy: a port of arrival, of rest and of reconnection with well-being.',
    },
    block3Quote: { pt: 'Seja leve. Ria conosco.', en: 'Be light. Laugh with us.' },
    timelineTitle: { pt: 'Nossa Jornada', en: 'Our Journey' },
    timelineSubtitle: {
      pt: 'Nosso primeiro refúgio nasceu de um gesto de amor.',
      en: 'Our first retreat was born from a gesture of love.',
    },
    valuesTitle: { pt: 'O que nos move', en: 'What moves us' },
    valuesSubtitle: {
      pt: 'Valores que carregamos em cada detalhe, em cada interação, em cada momento compartilhado com nossos hóspedes.',
      en: 'Values we carry in every detail, every interaction, every moment shared with our guests.',
    },
    rootsTitle: { pt: 'Raízes que Conectam', en: 'Roots that Connect' },
    rootsP1: {
      pt: 'Acreditamos que a verdadeira evolução espiritual nasce do encontro — com a natureza, com o outro e consigo mesmo. Assim como as plantas que cultivamos, crescemos em silêncio, respeitando o tempo, o solo e a luz. Evoluir é permitir-se enraizar para então expandir.',
      en: 'We believe that true spiritual evolution is born from meeting — with nature, with others and with oneself. Like the plants we grow, we grow in silence, respecting time, soil and light. To evolve is to allow oneself to take root and then expand.',
    },
    rootsP2: {
      pt: 'Aqui, o acolhimento é um ato sagrado. A mesa compartilhada, o riso solto, o caminhar sem pressa e o descanso profundo são convites à reconexão. Criamos espaços onde o corpo desacelera, a mente silencia e o espírito encontra espaço para respirar.',
      en: 'Here, welcoming is a sacred act. The shared table, free laughter, unhurried walking and deep rest are invitations to reconnect. We create spaces where the body slows down, the mind quiets and the spirit finds room to breathe.',
    },
    rootsP3: {
      pt: 'Nossos refúgios são portos de retorno à essência. Lugares onde a leveza cura, a simplicidade ensina e a alegria eleva. Onde cada hóspede é convidado a soltar o que pesa e levar consigo apenas o que nutre.',
      en: 'Our retreats are ports of return to essence. Places where lightness heals, simplicity teaches and joy uplifts. Where every guest is invited to let go of what weighs and take with them only what nourishes.',
    },
    rootsQuote: {
      pt: 'Porque quando honramos nossas raízes, despertamos a consciência. E quando nos conectamos de verdade, evoluímos.',
      en: 'Because when we honor our roots, we awaken consciousness. And when we truly connect, we evolve.',
    },
    dreamTitle: { pt: 'Do Sonho à Realidade', en: 'From Dream to Reality' },
    dreamP: {
      pt: 'Venha viver o nosso sonho. Ele foi feito para ser compartilhado.',
      en: 'Come live our dream. It was made to be shared.',
    },
    dreamSignature: {
      pt: 'Com carinho, Família Betarello',
      en: 'With love, the Betarello Family',
    },
  };

  const timeline = [
    {
      year: '∞',
      title: {
        pt: 'Da generosidade dos nossos pais, que nos presentearam com moradas',
        en: 'From the generosity of our parents, who gifted us with homes',
      },
      desc: {
        pt: 'Uma para cada filha — como quem planta sementes confiando no florescer. Foi nesse chão de afeto que tudo começou.',
        en: 'One for each daughter — like planting seeds trusting they will bloom. It was on that ground of affection that everything began.',
      },
    },
    {
      year: '∞',
      title: { pt: 'Expansão para o Interior', en: 'Expansion to the Countryside' },
      desc: {
        pt: 'Em 2015, essas casas passaram a acolher não apenas sonhos...',
        en: 'In 2015, these homes began to welcome not only dreams...',
      },
    },
    {
      year: '∞',
      title: { pt: 'Reconhecimento', en: 'Recognition' },
      desc: {
        pt: 'Dali surgiu o desejo de ir além.',
        en: 'From there came the desire to go further.',
      },
    },
    {
      year: '∞',
      title: { pt: 'Porto Betarello Hoje', en: 'Porto Betarello Today' },
      desc: {
        pt: 'A essência de tudo está na união entre irmãs.',
        en: 'The essence of it all lies in the union between sisters.',
      },
    },
  ];

  const values = [
    {
      icon: Heart,
      title: { pt: 'Acolhimento', en: 'Welcoming' },
      desc: {
        pt: 'Tratamos cada hóspede como família, criando um ambiente onde todos se sentem verdadeiramente em casa.',
        en: 'We treat every guest as family, creating an environment where everyone truly feels at home.',
      },
    },
    {
      icon: Users,
      title: { pt: 'Conexão', en: 'Connection' },
      desc: {
        pt: 'Facilitamos momentos de reconexão — com a natureza, com quem se ama e consigo mesmo.',
        en: 'We foster moments of reconnection — with nature, with loved ones and with oneself.',
      },
    },
    {
      icon: Sparkles,
      title: { pt: 'Autenticidade', en: 'Authenticity' },
      desc: {
        pt: 'Não seguimos tendências, seguimos nosso coração e a tradição de hospitalidade da nossa família.',
        en: "We don't follow trends — we follow our hearts and our family's tradition of hospitality.",
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="/nossa-historia" />
      </Helmet>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-muted/40 to-background text-center">
        <div className="container-luxury">
          <motion.h1
            {...fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6"
          >
            {txt.heroTitle[language]}
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {txt.heroSubtitle[language]}
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container-luxury space-y-24 md:space-y-32">
          {/* Block 1 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-accent rounded-2xl -z-10" />
              <img src={img1} alt={txt.block1Title[language]} className="w-full h-[500px] object-cover rounded-2xl shadow-elegant" />
            </motion.div>
            <motion.div {...fadeUp}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">{txt.block1Title[language]}</h2>
              <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                <p>{txt.block1P1[language]}</p>
                <p>{txt.block1P2[language]}</p>
                <p className="italic text-primary border-l-2 border-accent pl-5">{txt.block1P3[language]}</p>
              </div>
            </motion.div>
          </div>

          {/* Block 2 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeUp} className="md:order-2 relative">
              <div className="absolute -top-5 -right-5 w-full h-full border-2 border-accent rounded-2xl -z-10" />
              <img src={img2} alt={txt.block2Title[language]} className="w-full h-[500px] object-cover rounded-2xl shadow-elegant" />
            </motion.div>
            <motion.div {...fadeUp} className="md:order-1">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">{txt.block2Title[language]}</h2>
              <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                <p>{txt.block2P1[language]}</p>
                <p>{txt.block2P2[language]}</p>
                <p>{txt.block2P3[language]}</p>
                <p className="italic text-primary border-l-2 border-accent pl-5">{txt.block2P4[language]}</p>
              </div>
            </motion.div>
          </div>

          {/* Block 3 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-accent rounded-2xl -z-10" />
              <img src={img3} alt={txt.block3Title[language]} className="w-full h-[500px] object-cover rounded-2xl shadow-elegant" />
            </motion.div>
            <motion.div {...fadeUp}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">{txt.block3Title[language]}</h2>
              <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                <p>{txt.block3P1[language]}</p>
                <p>{txt.block3P2[language]}</p>
                <p>{txt.block3P3[language]}</p>
                <p className="font-display text-2xl italic text-accent mt-6">{txt.block3Quote[language]}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container-luxury">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">{txt.timelineTitle[language]}</h2>
            <p className="font-body text-muted-foreground">{txt.timelineSubtitle[language]}</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary md:-translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
                    i % 2 === 1 ? 'md:[&>div]:col-start-2' : ''
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 bg-accent rounded-full border-4 border-background md:-translate-x-1/2 ring-4 ring-accent/20" />
                  <div className={`bg-card p-7 rounded-2xl shadow-card ${i % 2 === 1 ? '' : 'md:text-right'}`}>
                    <div className="font-display text-3xl font-bold text-accent mb-2">{item.year}</div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-3">{item.title[language]}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc[language]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container-luxury">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">{txt.valuesTitle[language]}</h2>
            <p className="font-body text-muted-foreground leading-relaxed">{txt.valuesSubtitle[language]}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title.pt}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-10 bg-card rounded-2xl shadow-card hover:-translate-y-2 transition-transform"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-accent flex items-center justify-center">
                  <v.icon className="w-9 h-9 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-4">{v.title[language]}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc[language]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Raízes */}
      <section className="relative py-28 overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-secondary/90" />
        <div className="relative container-luxury max-w-3xl text-center text-primary-foreground">
          <motion.div {...fadeUp}>
            <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">{txt.rootsTitle[language]}</h2>
            <div className="space-y-5 font-body text-base md:text-lg leading-relaxed text-primary-foreground/90">
              <p>{txt.rootsP1[language]}</p>
              <p>{txt.rootsP2[language]}</p>
              <p>{txt.rootsP3[language]}</p>
              <p className="font-display italic text-accent text-xl pt-2">{txt.rootsQuote[language]}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Do Sonho */}
      <section className="py-24 bg-gradient-to-br from-muted/40 to-background">
        <div className="container-luxury max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <img src={img4} alt={txt.dreamTitle[language]} className="w-full max-w-xl h-80 object-cover rounded-2xl shadow-elegant mx-auto mb-10" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">{txt.dreamTitle[language]}</h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">{txt.dreamP[language]}</p>
            <p className="font-display text-2xl italic text-accent">{txt.dreamSignature[language]}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NossaHistoria;
