import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contato = () => {
  const { t, language } = useLanguage();

  const seo = {
    pt: {
      title: 'Contato | Porto Betarello',
      description: 'Entre em contato com a família Betarello para reservar seu refúgio.',
    },
    en: {
      title: 'Contact | Porto Betarello',
      description: 'Get in touch with the Betarello family to book your retreat.',
    },
  }[language];

  const whatsappUrl = `https://wa.me/5519999169958?text=${encodeURIComponent(t('whatsapp.message'))}`;

  const items = [
    {
      icon: Mail,
      label: 'E-mail',
      value: 'portobetarello@gmail.com',
      href: 'mailto:portobetarello@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.phoneBR'),
      value: '+55 (19) 99916-9958',
      href: 'tel:+5519999169958',
    },
    {
      icon: Phone,
      label: t('contact.phoneUS'),
      value: '+1 (216) 337-0184',
      href: 'tel:+12163370184',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+55 (19) 99916-9958',
      href: whatsappUrl,
      external: true,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@porto_betarello',
      href: 'https://instagram.com/porto_betarello',
      external: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="/contato" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="/contato" />
      </Helmet>

      <section className="py-20 md:py-28 bg-background">
        <div className="container-luxury max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              {t('contact.title')}
            </h1>
            <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-4 p-5 bg-card rounded-xl shadow-elegant border border-accent/20 hover:border-accent/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="font-display text-base font-semibold text-primary truncate">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
