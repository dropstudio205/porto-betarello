import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';
import img1 from '@/assets/gallery-1.jpg';
import img2 from '@/assets/gallery-2.jpg';
import img3 from '@/assets/gallery-3.jpg';
import img4 from '@/assets/gallery-4.jpg';

const NossaHistoria = () => {
  const { language } = useLanguage();

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

  const timeline = [
    {
      year: '∞',
      title: 'Da generosidade dos nossos pais, que nos presentearam com moradas',
      desc: 'Uma para cada filha — como quem planta sementes confiando no florescer. Foi nesse chão de afeto que tudo começou.',
    },
    {
      year: '∞',
      title: 'Expansão para o Interior',
      desc: 'Em 2015, essas casas passaram a acolher não apenas sonhos...',
    },
    {
      year: '∞',
      title: 'Reconhecimento',
      desc: 'Dali surgiu o desejo de ir além.',
    },
    {
      year: '∞',
      title: 'Porto Betarello Hoje',
      desc: 'A essência de tudo está na união entre irmãs.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Acolhimento',
      desc: 'Tratamos cada hóspede como família, criando um ambiente onde todos se sentem verdadeiramente em casa.',
    },
    {
      icon: Users,
      title: 'Conexão',
      desc: 'Facilitamos momentos de reconexão — com a natureza, com quem se ama e consigo mesmo.',
    },
    {
      icon: Sparkles,
      title: 'Autenticidade',
      desc: 'Não seguimos tendências, seguimos nosso coração e a tradição de hospitalidade da nossa família.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="/nossa-historia" />
      </Helmet>

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-muted/40 to-background text-center">
        <div className="container-luxury">
          <motion.h1
            {...fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6"
          >
            Nossa História
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Mais do que refúgios, compartilhamos gerações de amor pela hospitalidade e pela arte de fazer cada hóspede se sentir em casa.
          </motion.p>
        </div>
      </section>

      {/* Story Blocks */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-luxury space-y-24 md:space-y-32">
          {/* Block 1 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-accent rounded-2xl -z-10" />
              <img src={img1} alt="Família Betarello" className="w-full h-[500px] object-cover rounded-2xl shadow-elegant" />
            </motion.div>
            <motion.div {...fadeUp}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">Betarello</h2>
              <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                <p>
                  O nome <strong className="text-primary">Porto Betarello</strong> carrega, em cada sílaba, a alma da minha família.
                  Porto, porque somos abrigo. Somos o lugar de retorno quando o mundo pesa, quando o coração pede colo, quando a vida merece ser celebrada. Aqui, o afeto é presença constante, nunca exceção.
                </p>
                <p>
                  Betarello nasce da nossa descendência italiana e traz consigo a alegria que transborda, o riso fácil e o amor profundo pela boa comida. Como bons italianos, celebramos a vida ao redor da mesa, em conversas longas, taças que se enchem devagar, sabores que se compartilham e memórias que permanecem.
                </p>
                <p className="italic text-primary border-l-2 border-accent pl-5">
                  No nome Porto também vive a nossa ancestralidade. Ele honra os passos de quem veio antes de nós, aqueles que construíram nossa história com trabalho, coragem e afeto, abrindo caminhos para que hoje pudéssemos existir, sonhar e acolher.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Block 2 - Reverse */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeUp} className="md:order-2 relative">
              <div className="absolute -top-5 -right-5 w-full h-full border-2 border-accent rounded-2xl -z-10" />
              <img src={img2} alt="Risos e estilo de vida" className="w-full h-[500px] object-cover rounded-2xl shadow-elegant" />
            </motion.div>
            <motion.div {...fadeUp} className="md:order-1">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">Risos e estilo de vida</h2>
              <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                <p>
                  Nossa família carrega uma energia rara — daquelas que transformam os lugares por onde passam. Onde chegamos, a alegria se instala sem pedir licença. O riso se espalha, as piadas surgem naturalmente, e essa leveza abraça pessoas e ambientes.
                </p>
                <p>
                  Somos, acima de tudo, aventureiros de alma. Amamos encontrar pessoas, criar vínculos, descobrir novos caminhos e, às vezes, nos perder de propósito. A natureza é nosso refúgio favorito, o cenário onde nos sentimos inteiros.
                </p>
                <p>
                  Nossos dons se revelam na convivência. Cozinhar é um gesto coletivo, quase sagrado: todos vão para a cozinha. A anfitriã da casa, porém, tem um talento especial — seu arroz com feijão é daqueles que aquecem o corpo e a alma. Não somos do Nordeste, mas a farinha nunca falta, porque carinho também se serve no prato.
                </p>
                <p className="italic text-primary border-l-2 border-accent pl-5">
                  Plantar é outro traço que nos define. Catamos mudinhas, clonamos plantas, espalhamos vida por onde passamos. E, como bons descendentes de italianos, cultivamos longas horas à mesa, entre comida, bebida e boas conversas — talvez o ritual mais amado dessa família.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Block 3 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-accent rounded-2xl -z-10" />
              <img src={img3} alt="Café, vinho e alegria" className="w-full h-[500px] object-cover rounded-2xl shadow-elegant" />
            </motion.div>
            <motion.div {...fadeUp}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">Café, vinho e alegria</h2>
              <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                <p>
                  Se quiser saber onde me encontrar, é simples: provavelmente estarei à mesa da casa dos meus pais, saboreando um café, um vinho, uma cachaça ou um suco feito com todas as frutas disponíveis, cercada de risadas, histórias e amor.
                </p>
                <p>
                  Em nossos refúgios, buscamos preservar e compartilhar essa mesma energia e leveza. Criamos espaços onde cada hóspede possa sentir, de forma genuína, o calor, a alegria e o acolhimento que nos acompanham. Lugares que convidam a desacelerar, sorrir, respirar fundo e viver o simples — que é, quase sempre, o mais inesquecível.
                </p>
                <p>
                  Nossa família deseja deixar como herança essa marca especial: um porto de chegada, de descanso e de reconexão com o bem-estar.
                </p>
                <p className="font-display text-2xl italic text-accent mt-6">
                  Seja leve. Ria conosco.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container-luxury">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Nossa Jornada</h2>
            <p className="font-body text-muted-foreground">Nosso primeiro refúgio nasceu de um gesto de amor.</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
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
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 bg-accent rounded-full border-4 border-background md:-translate-x-1/2 ring-4 ring-accent/20" />

                  <div className={`bg-card p-7 rounded-2xl shadow-card ${i % 2 === 1 ? '' : 'md:text-right'}`}>
                    <div className="font-display text-3xl font-bold text-accent mb-2">{item.year}</div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-3">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">O que nos move</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Valores que carregamos em cada detalhe, em cada interação, em cada momento compartilhado com nossos hóspedes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-10 bg-card rounded-2xl shadow-card hover:-translate-y-2 transition-transform"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-accent flex items-center justify-center">
                  <v.icon className="w-9 h-9 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-4">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Raízes que Conectam */}
      <section className="relative py-28 overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-secondary/90" />
        <div className="relative container-luxury max-w-3xl text-center text-primary-foreground">
          <motion.div {...fadeUp}>
            <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Raízes que Conectam</h2>
            <div className="space-y-5 font-body text-base md:text-lg leading-relaxed text-primary-foreground/90">
              <p>
                Acreditamos que a verdadeira evolução espiritual nasce do encontro — com a natureza, com o outro e consigo mesmo. Assim como as plantas que cultivamos, crescemos em silêncio, respeitando o tempo, o solo e a luz. Evoluir é permitir-se enraizar para então expandir.
              </p>
              <p>
                Aqui, o acolhimento é um ato sagrado. A mesa compartilhada, o riso solto, o caminhar sem pressa e o descanso profundo são convites à reconexão. Criamos espaços onde o corpo desacelera, a mente silencia e o espírito encontra espaço para respirar.
              </p>
              <p>
                Nossos refúgios são portos de retorno à essência. Lugares onde a leveza cura, a simplicidade ensina e a alegria eleva. Onde cada hóspede é convidado a soltar o que pesa e levar consigo apenas o que nutre.
              </p>
              <p className="font-display italic text-accent text-xl pt-2">
                Porque quando honramos nossas raízes, despertamos a consciência. E quando nos conectamos de verdade, evoluímos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Do Sonho à Realidade */}
      <section className="py-24 bg-gradient-to-br from-muted/40 to-background">
        <div className="container-luxury max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <img src={img4} alt="Família Betarello" className="w-full max-w-xl h-80 object-cover rounded-2xl shadow-elegant mx-auto mb-10" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Do Sonho à Realidade</h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Venha viver o nosso sonho. Ele foi feito para ser compartilhado.
            </p>
            <p className="font-display text-2xl italic text-accent">
              Com carinho, Família Betarello
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NossaHistoria;
