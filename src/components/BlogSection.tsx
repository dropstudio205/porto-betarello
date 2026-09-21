import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/posts';

const BlogSection = () => {
  const { language, t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -340 : 340,
      behavior: 'smooth',
    });
  };

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

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center bg-background/95 rounded-full shadow-elegant hover:bg-muted transition-colors"
            aria-label={language === 'pt' ? 'Anterior' : 'Previous'}
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center bg-background/95 rounded-full shadow-elegant hover:bg-muted transition-colors"
            aria-label={language === 'pt' ? 'Próximo' : 'Next'}
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group flex-none w-72 md:w-80 snap-start"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex flex-col h-full bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-card transition-all duration-300 border border-accent/20 hover:border-accent/40"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title[language]}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-semibold text-primary leading-snug mb-2">
                      {post.title[language]}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt[language]}
                    </p>
                    <span className="mt-auto pt-4 font-body text-sm font-semibold text-accent">
                      {language === 'pt' ? 'Ler mais' : 'Read more'}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
