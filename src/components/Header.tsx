import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logoBetarello from '@/assets/logo-porto-betarello.png.asset.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { key: 'nav.home', to: '/' },
    { key: 'nav.story', to: '/nossa-historia' },
    { key: 'nav.retreats', to: '/refugios' },
    { key: 'nav.tips', to: '/dicas' },
    { key: 'nav.shop', to: '/shop' },
    { key: 'nav.contact', to: '/contato' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-accent/20">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
            <img
              src={logoBetarello.url}
              alt="Porto Betarello"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `font-body text-sm font-medium transition-colors duration-200 relative group ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {t(item.key)}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/porto_betarello"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-accent/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-primary" />
            </a>

            <LanguageSwitcher />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-primary" />
              ) : (
                <Menu className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-accent/20"
          >
            <nav className="container-luxury py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block font-body text-base font-medium py-2 border-b border-muted last:border-b-0 ${
                        isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                      }`
                    }
                  >
                    {t(item.key)}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a
                href="https://instagram.com/porto_betarello"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 font-body text-base font-medium text-muted-foreground hover:text-primary py-2"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
