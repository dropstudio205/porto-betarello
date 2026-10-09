import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeedbackSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quoteKey: 'feedback.t1.quote',
      author: 'Thiago',
      locationKey: 'feedback.t1.location',
    },
    {
      quoteKey: 'feedback.t2.quote',
      authorKey: 'feedback.t2.author',
      locationKey: 'feedback.t1.location',
    },
    {
      quoteKey: 'feedback.t3.quote',
      authorKey: 'feedback.t3.author',
      locationKey: 'feedback.t1.location',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {t('feedback.title')}
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
            {t('feedback.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background rounded-xl p-6 shadow-elegant border border-accent/20 flex flex-col"
            >
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic flex-1 mb-6">
                "{t(item.quoteKey)}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div>
                <p className="font-display text-base font-semibold text-primary">
                  {item.author ?? t(item.authorKey!)}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {t(item.locationKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
