import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';

const BlogSection = () => {
  const { t } = useLanguage();

  const posts = [
    { titleKey: 'blog.post1.title', descKey: 'blog.post1.desc' },
    { titleKey: 'blog.post2.title', descKey: 'blog.post2.desc' },
    { titleKey: 'blog.post3.title', descKey: 'blog.post3.desc' },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
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
            {t('blog.title')}
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-card transition-all duration-300 border border-accent/20 hover:border-accent/40 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-3">
                {t(post.titleKey)}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                {t(post.descKey)}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button asChild variant="outline" size="lg">
            <a
              href="https://portobetarello.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              {t('blog.cta')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
