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
            <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:contato@portobetarello.com.br"
                className="flex items-center justify-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@portobetarello.com.br
              </a>
              <a
                href="tel:+5548999999999"
                className="flex items-center justify-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +55 (48) 99999-9999
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-lg font-semibold mb-4">Social</h4>
            <a
              href="https://instagram.com/portobetarello"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @portobetarello
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
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
