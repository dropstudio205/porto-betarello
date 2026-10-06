import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts, getPostBySlug } from '@/data/posts';

const BlogPost = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/" replace />;

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];
  const title = `${post.title[language]} | Porto Betarello`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={post.excerpt[language]} />
        <link rel="canonical" href={`/blog/${post.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={post.excerpt[language]} />
      </Helmet>

      <section className="bg-background pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="container-luxury max-w-3xl">
          <Link
            to="/#blog"
            className="mb-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === 'pt' ? 'Voltar ao blog' : 'Back to blog'}
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight text-primary">
              {post.title[language]}
            </h1>
            <div className="mt-6 h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 overflow-hidden rounded-xl shadow-elegant"
          >
            <img src={post.image} alt={post.title[language]} className="aspect-[16/9] w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 space-y-6"
          >
            {post.content.map((paragraph, index) => paragraph.heading ? (
              <h2 key={index} className="pt-4 font-display text-2xl font-semibold leading-snug text-primary md:text-3xl">
                {paragraph[language]}
              </h2>
            ) : (
              <p
                key={index}
                className={`font-body leading-relaxed text-muted-foreground ${
                  index === 0 ? 'text-lg md:text-xl text-foreground' : 'text-base md:text-lg'
                }`}
              >
                {paragraph[language]}
              </p>
            ))}
          </motion.div>

          {post.gallery && (
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {post.gallery.map((photo) => (
                <figure key={photo.image} className="overflow-hidden rounded-lg">
                  <img src={photo.image} alt={photo.alt[language]} loading="lazy" className="h-auto w-full" />
                </figure>
              ))}
            </div>
          )}

          <div className="mt-14 border-t border-border/40 pt-8">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {language === 'pt' ? 'Próxima leitura' : 'Next read'}
            </p>
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group inline-flex items-center gap-3 font-display text-xl font-semibold text-primary hover:text-accent transition-colors"
            >
              {nextPost.title[language]}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
