import { Instagram, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold mb-4">Porto Betarello</h3>
            <div className="h-0.5 w-12 bg-gradient-to-r from-accent to-gold-light mb-4 mx-auto md:mx-0" />
            <p className="font-body text-sm text-primary-foreground/80 leading-relaxed max-w-xs mx-auto md:mx-0">
              {t('footer.about')}
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="font-display text-lg font-semibold mb-4">{t('nav.contact')}</h4>
            <div className="space-y-3">
              <a
                href="mailto:portobetarello@gmail.com"
                className="flex items-center justify-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                portobetarello@gmail.com
              </a>
              <a
                href="tel:+5519999169958"
                className="flex items-center justify-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +55 (19) 99916-9958
              </a>
              <a
                href="tel:+12163370184"
                className="flex items-center justify-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (216) 337-0184
              </a>
            <a
                href="tel:+5519996116169"
                className="flex items-center justify-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +55 (19) 99611-6169 <span className="opacity-70">(Suporte SC)</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-lg font-semibold mb-4">Social</h4>
            <a
              href="https://instagram.com/porto_betarello"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @porto_betarello
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="font-body text-xs text-primary-foreground/60 text-center">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
