import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import poster from '@/assets/gallery-2.jpg';

// A local file named retreat-moment.mp4 or retreat-moment.webm in src/assets
// automatically replaces the preview image without changing this section.
const localVideos = import.meta.glob('../assets/retreat-moment.{mp4,webm}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const localVideo = Object.values(localVideos)[0];

const RetreatMoment = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-background py-20 md:py-28" aria-labelledby="moment-title">
      <div className="container-luxury grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <div className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase text-accent">
            <span className="h-px w-12 bg-accent" />
            {language === 'pt' ? 'Um convite para sentir' : 'An invitation to feel'}
          </div>
          <h2 id="moment-title" className="font-display text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
            {language === 'pt' ? 'Há lugares que ficam com a gente.' : 'Some places stay with us.'}
          </h2>
          <p className="mt-8 font-body text-base leading-loose text-muted-foreground md:text-lg">
            {language === 'pt'
              ? 'O primeiro café sem pressa. A conversa que se estende. A luz da tarde entrando pela janela. Nos refúgios Porto Betarello, a melhor parte da viagem é ter tempo para viver cada instante.'
              : 'The first coffee without a rush. A conversation that lingers. Afternoon light through the window. At Porto Betarello retreats, the best part of the trip is having time to savor every moment.'}
          </p>
          <Button asChild variant="outline" className="mt-9 gap-2">
            <Link to="/refugios">
              {language === 'pt' ? 'Encontre seu refúgio' : 'Find your retreat'}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[330px]"
        >
          <div className="absolute -left-5 top-12 bottom-12 w-px bg-accent/60 md:-left-10" aria-hidden="true" />
          <div className="relative rounded-[2.5rem] border-[7px] border-primary bg-primary p-1.5 shadow-elegant">
            <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-primary" aria-hidden="true" />
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.8rem] bg-muted">
              {localVideo ? (
                <video src={localVideo} poster={poster} autoPlay muted loop playsInline className="h-full w-full object-cover" aria-label={language === 'pt' ? 'Vídeo dos refúgios Porto Betarello' : 'Porto Betarello retreat video'} />
              ) : (
                <img src={poster} alt={language === 'pt' ? 'Prévia visual de momentos nos refúgios' : 'Visual preview of moments at the retreats'} className="h-full w-full object-cover" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/20" />
              <div className="absolute bottom-8 left-6 right-6 text-primary-foreground">
                {localVideo && <Play className="mb-4 h-8 w-8" aria-hidden="true" />}
                <p className="font-display text-2xl leading-snug">
                  {language === 'pt' ? 'Seu tempo, do seu jeito.' : 'Your time, your way.'}
                </p>
              </div>
            </div>
          </div>
          {!localVideo && <p className="mt-5 text-center font-body text-xs text-muted-foreground">
            {language === 'pt' ? 'Vídeo dos refúgios em breve' : 'Retreat video coming soon'}
          </p>}
        </motion.div>
      </div>
    </section>
  );
};

export default RetreatMoment;