import { motion } from 'framer-motion';
import { MapPin, Utensils, Mountain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';

import tipBeach from '@/assets/tip-beach.jpg';
import tipRestaurant from '@/assets/tip-restaurant.jpg';
import tipTrail from '@/assets/tip-trail.jpg';

const Tips = () => {
  const { t } = useLanguage();

  const tips = [
    {
      image: tipBeach,
      titleKey: 'tip1.title',
      descKey: 'tip1.desc',
      icon: MapPin,
    },
    {
      image: tipRestaurant,
      titleKey: 'tip2.title',
      descKey: 'tip2.desc',
      icon: Utensils,
    },
    {
      image: tipTrail,
      titleKey: 'tip3.title',
      descKey: 'tip3.desc',
      icon: Mountain,
    },
  ];

  return (
    <section id="tips" className="py-20 md:py-28 bg-muted">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {t('tips.title')}
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
            {t('tips.subtitle')}
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-background rounded-xl overflow-hidden shadow-elegant hover:shadow-card transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tip.image}
                    alt={t(tip.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-gold">
                    <tip.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">
                    {t(tip.titleKey)}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {t(tip.descKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="outline" size="lg">
            {t('tips.cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Tips;
