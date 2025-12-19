import { motion } from 'framer-motion';
import { Bed, Bath } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';

import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import property4 from '@/assets/property-4.jpg';

const Properties = () => {
  const { t } = useLanguage();

  const properties = [
    {
      image: property1,
      nameKey: 'property1.name',
      locationKey: 'property1.location',
      rooms: 4,
      baths: 3,
    },
    {
      image: property2,
      nameKey: 'property2.name',
      locationKey: 'property2.location',
      rooms: 3,
      baths: 2,
    },
    {
      image: property3,
      nameKey: 'property3.name',
      locationKey: 'property3.location',
      rooms: 5,
      baths: 4,
    },
    {
      image: property4,
      nameKey: 'property4.name',
      locationKey: 'property4.location',
      rooms: 3,
      baths: 3,
    },
  ];

  return (
    <section id="retreats" className="py-20 md:py-28 bg-background">
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            {t('properties.title')}
          </h2>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-card transition-all duration-300 border border-accent/20 hover:border-accent/40">
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={t(property.nameKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-primary mb-2">
                    {t(property.nameKey)}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    {t(property.locationKey)}
                  </p>

                  {/* Amenities */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-accent" />
                      <span className="font-body text-sm text-muted-foreground">
                        {property.rooms} {t('properties.rooms')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-accent" />
                      <span className="font-body text-sm text-muted-foreground">
                        {property.baths} {t('properties.baths')}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button variant="default" className="w-full">
                    {t('properties.cta')}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
