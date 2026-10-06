import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

import { Button } from '@/components/ui/button';
import gallery1 from '@/assets/momentos-porto-1.jpeg.asset.json';
import gallery2 from '@/assets/momentos-porto-2.jpeg.asset.json';
import gallery3 from '@/assets/momentos-porto-3.jpeg.asset.json';
import gallery4 from '@/assets/momentos-porto-4.jpeg.asset.json';
import gallery5 from '@/assets/momentos-porto-5.jpeg.asset.json';
import gallery6 from '@/assets/momentos-porto-6.jpeg.asset.json';
import gallery7 from '@/assets/momentos-porto-7.jpeg.asset.json';
import gallery8 from '@/assets/momentos-porto-8.jpeg.asset.json';
import gallery9 from '@/assets/momentos-porto-9.jpeg.asset.json';

const Gallery = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9,
  ].map((image, index) => ({ src: image.url, alt: `${language === 'pt' ? 'Momentos Porto Betarello — foto' : 'Porto Betarello moments — photo'} ${index + 1}` }));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="story" className="py-20 md:py-28 bg-muted">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {t('gallery.title')}
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button variant="ghost" size="icon"
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center bg-background/90 backdrop-blur-sm rounded-full shadow-elegant hover:bg-background transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>
          <Button variant="ghost" size="icon"
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center bg-background/90 backdrop-blur-sm rounded-full shadow-elegant hover:bg-background transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>

          {/* Scrollable Gallery */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImage(index)}
                className="flex-none w-72 md:w-80 snap-center cursor-pointer group"
              >
                <div className="relative rounded-lg overflow-hidden shadow-elegant">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-52 md:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-lg p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <Button variant="ghost" size="icon"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-background/20 hover:bg-background/40 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-primary-foreground" />
            </Button>

            {/* Navigation */}
            <Button variant="ghost" size="icon"
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-background/20 hover:bg-background/40 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-primary-foreground" />
            </Button>
            <Button variant="ghost" size="icon"
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-background/20 hover:bg-background/40 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-primary-foreground" />
            </Button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
