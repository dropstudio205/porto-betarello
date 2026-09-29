import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import property4 from '@/assets/property-4.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

export type LocalizedText = { pt: string; en: string };

export interface Retreat {
  slug: string;
  name: string;
  location: string;
  mapQuery: string;
  rooms: number;
  baths: number;
  guests: number;
  featured?: boolean;
  comingSoon?: boolean;
  images: string[];
  description: LocalizedText;
  highlights: LocalizedText[];
  airbnbUrl?: string;
}

export const retreats: Retreat[] = [
  {
    slug: 'morada-da-cachoeira',
    name: 'Morada da Cachoeira',
    location: 'Florianópolis, SC',
    mapQuery: 'Florianópolis, Santa Catarina, Brasil',
    rooms: 1,
    baths: 1,
    guests: 2,
    featured: true,
    images: [property1, gallery1, gallery4, gallery5],
    description: {
      pt: 'Um refúgio intimista em Florianópolis, pensado para quem deseja desacelerar e aproveitar dias tranquilos em contato com a natureza. O espaço combina privacidade, conforto e a praticidade necessária para uma estadia leve.',
      en: 'An intimate retreat in Florianópolis, designed for guests who want to slow down and enjoy peaceful days close to nature. The space combines privacy, comfort and everything needed for an easy stay.',
    },
    highlights: [
      { pt: 'Ambiente reservado e acolhedor', en: 'Private and welcoming setting' },
      { pt: 'Cozinha equipada para a estadia', en: 'Equipped kitchen for your stay' },
      { pt: 'Check-in independente', en: 'Self check-in' },
      { pt: 'Enxoval de cama e banho', en: 'Bed linen and towels' },
    ],
  },
  {
    slug: 'morada-do-sol',
    name: 'Morada do Sol',
    location: 'Palhoça, SC',
    mapQuery: 'Palhoça, Santa Catarina, Brasil',
    rooms: 2,
    baths: 1,
    guests: 4,
    images: [property2, gallery2, gallery6, gallery4],
    description: {
      pt: 'Uma casa acolhedora em Palhoça para descansar em família ou entre amigos. Os ambientes foram preparados para oferecer praticidade, conforto e bons momentos durante toda a viagem.',
      en: 'A welcoming home in Palhoça for relaxing with family or friends. Its spaces were prepared to offer convenience, comfort and memorable moments throughout your trip.',
    },
    highlights: [
      { pt: 'Espaço ideal para famílias', en: 'Ideal space for families' },
      { pt: 'Cozinha e área de convivência', en: 'Kitchen and living area' },
      { pt: 'Check-in independente', en: 'Self check-in' },
      { pt: 'Enxoval de cama e banho', en: 'Bed linen and towels' },
    ],
  },
  {
    slug: 'morada-do-mar',
    name: 'Morada do Mar',
    location: 'Palhoça, SC',
    mapQuery: 'Palhoça, Santa Catarina, Brasil',
    rooms: 2,
    baths: 4,
    guests: 4,
    images: [property3, gallery3, gallery1, gallery6],
    description: {
      pt: 'Um refúgio espaçoso em Palhoça, com ambientes que convidam ao descanso e à convivência. Uma escolha confortável para aproveitar o litoral catarinense com privacidade e liberdade.',
      en: 'A spacious retreat in Palhoça, with rooms designed for rest and time together. A comfortable choice for enjoying the Santa Catarina coast with privacy and freedom.',
    },
    highlights: [
      { pt: 'Ambientes amplos e integrados', en: 'Spacious, connected living areas' },
      { pt: 'Estrutura para estadias em grupo', en: 'Set up for group stays' },
      { pt: 'Check-in independente', en: 'Self check-in' },
      { pt: 'Cozinha equipada', en: 'Equipped kitchen' },
    ],
  },
  {
    slug: 'house-do-interior',
    name: 'House do Interior',
    location: 'Amparo, SP',
    mapQuery: 'Amparo, São Paulo, Brasil',
    rooms: 3,
    baths: 1,
    guests: 6,
    images: [property4, gallery5, gallery2, gallery4],
    description: {
      pt: 'Uma casa no interior paulista feita para reunir quem importa. Com clima tranquilo e espaços para compartilhar, é uma base acolhedora para conhecer Amparo e descansar longe da rotina.',
      en: 'A countryside home in São Paulo state made for gathering the people who matter. With a peaceful atmosphere and shared spaces, it is a welcoming base for exploring Amparo and leaving routine behind.',
    },
    highlights: [
      { pt: 'Clima tranquilo de interior', en: 'Peaceful countryside atmosphere' },
      { pt: 'Espaço para família e amigos', en: 'Space for family and friends' },
      { pt: 'Cozinha equipada', en: 'Equipped kitchen' },
      { pt: 'Check-in independente', en: 'Self check-in' },
    ],
  },
  {
    slug: 'casarao-centenario-amparo',
    name: 'Casarão Centenário em Amparo',
    location: 'Amparo, SP',
    mapQuery: 'Amparo, São Paulo, Brasil',
    rooms: 3,
    baths: 2,
    guests: 6,
    images: [gallery1, gallery6, gallery3, gallery2],
    description: {
      pt: 'Uma estadia cheia de personalidade em um casarão centenário de Amparo. A atmosfera histórica encontra o conforto de uma hospedagem preparada com cuidado para receber famílias e grupos.',
      en: 'A character-filled stay in a century-old house in Amparo. Historic atmosphere meets the comfort of a thoughtfully prepared home for families and groups.',
    },
    highlights: [
      { pt: 'Arquitetura cheia de história', en: 'Architecture rich in history' },
      { pt: 'Ambientes para reunir o grupo', en: 'Spaces for gathering together' },
      { pt: 'Cozinha equipada', en: 'Equipped kitchen' },
      { pt: 'Enxoval de cama e banho', en: 'Bed linen and towels' },
    ],
  },
  {
    slug: 'recanto-da-brisa',
    name: 'Recanto da Brisa',
    location: 'Localização a confirmar',
    mapQuery: '', rooms: 0, baths: 0, guests: 0,
    comingSoon: true,
    images: [gallery2, gallery4, gallery5, gallery1],
    description: {
      pt: 'Um novo capítulo da coleção Porto Betarello está sendo preparado. Fotos ilustrativas; localização, características e disponibilidade serão divulgadas em breve.',
      en: 'A new chapter of the Porto Betarello collection is being prepared. Photos are illustrative; location, features and availability will be announced soon.',
    },
    highlights: [],
  },
  {
    slug: 'casa-entre-ares',
    name: 'Casa Entre Ares',
    location: 'Localização a confirmar',
    mapQuery: '', rooms: 0, baths: 0, guests: 0,
    comingSoon: true,
    images: [gallery5, gallery2, gallery6, gallery3],
    description: {
      pt: 'Estamos preparando mais um espaço para a coleção Porto Betarello. Fotos ilustrativas; localização, características e disponibilidade serão divulgadas em breve.',
      en: 'We are preparing another space for the Porto Betarello collection. Photos are illustrative; location, features and availability will be announced soon.',
    },
    highlights: [],
  },
  {
    slug: 'refugio-do-horizonte',
    name: 'Refúgio do Horizonte',
    location: 'Localização a confirmar',
    mapQuery: '', rooms: 0, baths: 0, guests: 0,
    comingSoon: true,
    images: [gallery3, gallery1, gallery4, gallery6],
    description: {
      pt: 'Mais um refúgio está a caminho. As imagens são ilustrativas; informações sobre o endereço, espaços e reservas serão compartilhadas quando disponíveis.',
      en: 'Another retreat is on its way. Images are illustrative; address, space and booking information will be shared when available.',
    },
    highlights: [],
  },
  {
    slug: 'morada-das-estrelas',
    name: 'Morada das Estrelas',
    location: 'Localização a confirmar',
    mapQuery: '', rooms: 0, baths: 0, guests: 0,
    comingSoon: true,
    images: [gallery6, gallery5, gallery2, gallery1],
    description: {
      pt: 'Uma nova possibilidade de estadia está em preparação. Fotos ilustrativas; detalhes do imóvel e disponibilidade ainda serão confirmados.',
      en: 'A new stay is in the works. Photos are illustrative; property details and availability have yet to be confirmed.',
    },
    highlights: [],
  },
];

export const getRetreatBySlug = (slug: string | undefined) =>
  retreats.find((retreat) => retreat.slug === slug);