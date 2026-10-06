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
import moradaMar1 from '@/assets/morada-do-mar-2368.jpg.asset.json';
import moradaMar2 from '@/assets/morada-do-mar-2375.jpg.asset.json';
import moradaMar3 from '@/assets/morada-do-mar-2377.jpg.asset.json';
import moradaMar4 from '@/assets/morada-do-mar-2378.jpg.asset.json';
import moradaMar5 from '@/assets/morada-do-mar-2382.jpg.asset.json';
import moradaMar6 from '@/assets/morada-do-mar-2388.jpg.asset.json';
import moradaMar7 from '@/assets/morada-do-mar-2395.jpg.asset.json';
import moradaPinheira1 from '@/assets/morada-da-pinheira-2462.jpg.asset.json';
import moradaPinheira2 from '@/assets/morada-da-pinheira-2463.jpg.asset.json';
import moradaPinheira3 from '@/assets/morada-da-pinheira-2474.jpg.asset.json';
import moradaPinheira4 from '@/assets/morada-da-pinheira-2483.jpg.asset.json';
import moradaPinheira5 from '@/assets/morada-da-pinheira-2484.jpg.asset.json';
import moradaPinheira6 from '@/assets/morada-da-pinheira-2485.jpg.asset.json';
import moradaPinheira7 from '@/assets/morada-da-pinheira-2490.jpg.asset.json';
import moradaPinheira8 from '@/assets/morada-da-pinheira-2500.jpg.asset.json';
import moradaPinheira9 from '@/assets/morada-da-pinheira-2504.jpg.asset.json';
import moradaSol1 from '@/assets/morada-do-sol-IMG_2553.jpg.asset.json';
import moradaSol2 from '@/assets/morada-do-sol-IMG_2544.jpg.asset.json';
import moradaSol3 from '@/assets/morada-do-sol-IMG_2558.jpg.asset.json';
import moradaSol4 from '@/assets/morada-do-sol-IMG_2559.jpg.asset.json';
import moradaSol5 from '@/assets/morada-do-sol-IMG_2561.jpg.asset.json';
import moradaSol6 from '@/assets/morada-do-sol-IMG_2572.jpg.asset.json';
import moradaSol7 from '@/assets/morada-do-sol-IMG_2587.jpg.asset.json';
import moradaSol8 from '@/assets/morada-do-sol-IMG_2580.jpg.asset.json';
import moradaSol9 from '@/assets/morada-do-sol-IMG_2540.jpg.asset.json';
import moradaCachoeira1 from '@/assets/morada-da-cachoeira-1.jpg.asset.json';
import moradaCachoeira2 from '@/assets/morada-da-cachoeira-2.jpg.asset.json';
import moradaCachoeira3 from '@/assets/morada-da-cachoeira-3.jpg.asset.json';
import moradaCachoeira4 from '@/assets/morada-da-cachoeira-4.jpg.asset.json';
import moradaCachoeira5 from '@/assets/morada-da-cachoeira-5.jpg.asset.json';
import moradaCachoeira6 from '@/assets/morada-da-cachoeira-6.jpg.asset.json';
import moradaCachoeira7 from '@/assets/morada-da-cachoeira-7.jpg.asset.json';
import moradaCachoeira8 from '@/assets/morada-da-cachoeira-8.jpg.asset.json';
import florDaMontana1 from '@/assets/flor-da-montana-1.jpg.asset.json';
import florDaMontana2 from '@/assets/flor-da-montana-2.jpg.asset.json';
import florDaMontana3 from '@/assets/flor-da-montana-3.jpg.asset.json';
import florDaMontana4 from '@/assets/flor-da-montana-4.jpg.asset.json';
import florDaMontana5 from '@/assets/flor-da-montana-5.jpg.asset.json';
import florDaMontana6 from '@/assets/flor-da-montana-6.jpg.asset.json';
import florDaMontana7 from '@/assets/flor-da-montana-7.jpg.asset.json';
import florDaMontana8 from '@/assets/flor-da-montana-8.jpg.asset.json';
import florDaMontana9 from '@/assets/flor-da-montana-9.jpg.asset.json';
import casaDoInterior1 from '@/assets/casa-do-interior-1.jpg.asset.json';
import casaDoInterior2 from '@/assets/casa-do-interior-2.jpg.asset.json';
import casaDoInterior3 from '@/assets/casa-do-interior-3.jpg.asset.json';
import casaDoInterior4 from '@/assets/casa-do-interior-4.jpg.asset.json';
import casaDoInterior5 from '@/assets/casa-do-interior-5.jpg.asset.json';
import casaDoInterior6 from '@/assets/casa-do-interior-6.jpg.asset.json';
import casaDoInterior7 from '@/assets/casa-do-interior-7.jpg.asset.json';
import casaDoInterior8 from '@/assets/casa-do-interior-8.jpg.asset.json';
import casaDoInterior9 from '@/assets/casa-do-interior-9.jpg.asset.json';
import casaDoInterior10 from '@/assets/casa-do-interior-10.jpg.asset.json';


export type LocalizedText = { pt: string; en: string };
export interface RetreatSection { title: LocalizedText; body: LocalizedText }

export interface Retreat {
  slug: string;
  name: string;
  location: string;
  mapQuery: string;
  rooms: number;
  beds?: number;
  baths: number;
  guests?: number;
  featured?: boolean;
  comingSoon?: boolean;
  images: string[];
  description: LocalizedText;
  sections?: RetreatSection[];
  highlights: LocalizedText[];
  airbnbUrl?: string;
  /** WhatsApp number (digits only) for direct contact */
  contactPhone: string;
}

export const BR_PHONE = '5519999169958';
export const US_PHONE = '12163370184';

const all = [property1, property2, property3, property4, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
const rotate = (n: number) => [...all.slice(n), ...all.slice(0, n)];

const T = (pt: string, en: string): LocalizedText => ({ pt, en });

const pinheiraAccess = T(
  'Aproximadamente 800 m da Praia do Meio, cerca de 5 min de carro e 10 min a pé. Mercadinho nas proximidades e mercados maiores a aproximadamente 7 min de carro. Drogaria no andar térreo do prédio. Para acessar o apartamento há dois lances de escada.',
  'About 800 m from Praia do Meio — roughly 5 min by car or 10 min on foot. Small grocery nearby and larger supermarkets about 7 min away by car. Pharmacy on the ground floor of the building. The apartment is reached by two flights of stairs.',
);
const pinheiraNotes = T(
  'IMPORTANTE: vocês receberão um formulário que deve ser devidamente preenchido pelo responsável da reserva. Sem esse documento não poderão ingressar no edifício.',
  'IMPORTANT: you will receive a form that must be completed by the person responsible for the booking. Without it, entry to the building is not allowed.',
);
const pinheiraSpace = (self: string, a: string, b: string) => T(
  `A ${self} está localizada ao lado dos apartamentos ${a} e ${b}, o que possibilita alojar famílias com número maior de pessoas no mesmo endereço.`,
  `${self} sits next to the ${a} and ${b} apartments, making it possible to host larger families at the same address.`,
);
const S = {
  space: T('O espaço', 'The space'),
  access: T('Acesso do hóspede', 'Guest access'),
  notes: T('Outras observações', 'Other notes'),
};

export const retreats: Retreat[] = [
  {
    slug: 'morada-do-mar',
    name: 'Morada do Mar',
    location: 'Pinheira, Palhoça – SC',
    mapQuery: 'Rua Paulo Manoel dos Santos, 3605, Pinheira, Palhoça, SC',
    rooms: 2, beds: 3, baths: 1, guests: 6,
    images: [moradaMar1.url, moradaMar2.url, moradaMar3.url, moradaMar4.url, moradaMar5.url, moradaMar6.url, moradaMar7.url],
    airbnbUrl: 'https://www.airbnb.com.br/rooms/1490512859657438882',
    contactPhone: BR_PHONE,
    description: T(
      'Colecione momentos especiais com sua família. Apartamento novo, com acesso automatizado. Possui dois quartos com cama de casal, sendo uma padrão e a outra Queen. Na sala, um sofá-cama acolhe mais duas pessoas. O banheiro é compartilhado. Cozinha totalmente equipada e área externa com churrasqueira. Estacionamento gratuito com acesso por controle remoto. A maior parte da área externa possui câmeras de segurança.',
      'Collect special moments with your family. A brand-new apartment with automated access. Two bedrooms with double beds — one standard and one Queen — plus a sofa bed in the living room for two more guests. Shared bathroom. Fully equipped kitchen and outdoor area with barbecue grill. Free parking with remote-controlled access. Most of the outdoor area is covered by security cameras.',
    ),
    sections: [
      { title: S.space, body: pinheiraSpace('Morada do Mar', 'Morada do Sol', 'Morada da Pinheira') },
      { title: S.access, body: pinheiraAccess },
      { title: S.notes, body: pinheiraNotes },
    ],
    highlights: [
      T('Acesso automatizado', 'Automated access'),
      T('Cozinha totalmente equipada', 'Fully equipped kitchen'),
      T('Churrasqueira na área externa', 'Outdoor barbecue grill'),
      T('Estacionamento gratuito', 'Free parking'),
    ],
  },
  {
    slug: 'morada-da-pinheira',
    name: 'Morada da Pinheira',
    location: 'Pinheira, Palhoça – SC',
    mapQuery: 'Rua Paulo Manoel dos Santos, 3605, Pinheira, Palhoça, SC',
    rooms: 2, beds: 3, baths: 1, guests: 6,
    images: [moradaPinheira1.url, moradaPinheira2.url, moradaPinheira3.url, moradaPinheira4.url, moradaPinheira5.url, moradaPinheira6.url, moradaPinheira7.url, moradaPinheira8.url, moradaPinheira9.url],
    airbnbUrl: 'https://www.airbnb.com.br/rooms/1610856043587454351',
    contactPhone: BR_PHONE,
    description: T(
      'Viva dias leves pertinho do mar com quem você ama. Apartamento novo e com acesso automatizado, com dois quartos com cama de casal e um sofá-cama na sala para mais duas pessoas. Banheiro compartilhado, cozinha completa e área externa com churrasqueira para reunir a família. Estacionamento gratuito com controle remoto e câmeras na maior parte da área externa.',
      'Enjoy easy days close to the sea with the people you love. A new apartment with automated access, two bedrooms with double beds and a living-room sofa bed for two more guests. Shared bathroom, complete kitchen and an outdoor barbecue area for family gatherings. Free remote-access parking and cameras covering most of the outdoor area.',
    ),
    sections: [
      { title: S.space, body: pinheiraSpace('Morada da Pinheira', 'Morada do Mar', 'Morada do Sol') },
      { title: S.access, body: pinheiraAccess },
      { title: S.notes, body: pinheiraNotes },
    ],
    highlights: [
      T('Acesso automatizado', 'Automated access'),
      T('Cozinha completa', 'Complete kitchen'),
      T('Churrasqueira na área externa', 'Outdoor barbecue grill'),
      T('Estacionamento gratuito', 'Free parking'),
    ],
  },
  {
    slug: 'morada-do-sol',
    name: 'Morada do Sol',
    location: 'Pinheira, Palhoça – SC',
    mapQuery: 'Rua Paulo Manoel dos Santos, 3605, Pinheira, Palhoça, SC',
    rooms: 2, beds: 3, baths: 1, guests: 6,
    images: [moradaSol1.url, moradaSol2.url, moradaSol3.url, moradaSol4.url, moradaSol5.url, moradaSol6.url, moradaSol7.url, moradaSol8.url, moradaSol9.url],
    airbnbUrl: 'https://www.airbnb.com.br/rooms/1492775160954091250',
    contactPhone: BR_PHONE,
    description: T(
      'Refúgio de paz a 5 min da Praia da Pinheira, Santa Catarina! Apartamento novo com varanda e vista deslumbrante para a Reserva do Tabuleiro. Viva momentos inesquecíveis com a brisa do mar e o canto dos pássaros. Localização estratégica, conforto e praticidade para curtir o melhor da costa catarinense — o paraíso ao seu alcance, com a tranquilidade e a beleza natural da reserva.',
      'A peaceful retreat 5 min from Praia da Pinheira, Santa Catarina! A new apartment with a balcony and stunning views of the Tabuleiro Reserve. Live unforgettable moments with the sea breeze and birdsong. Strategic location, comfort and convenience to enjoy the best of the Santa Catarina coast — paradise within reach, with the calm and natural beauty of the reserve.',
    ),
    sections: [
      { title: S.space, body: pinheiraSpace('Morada do Sol', 'Morada do Mar', 'Morada da Pinheira') },
      { title: S.access, body: pinheiraAccess },
      { title: S.notes, body: pinheiraNotes },
    ],
    highlights: [
      T('Varanda com vista para a Reserva do Tabuleiro', 'Balcony overlooking the Tabuleiro Reserve'),
      T('5 min da Praia da Pinheira', '5 min from Praia da Pinheira'),
      T('Apartamento novo', 'Brand-new apartment'),
      T('Drogaria no térreo', 'Pharmacy on the ground floor'),
    ],
  },
  {
    slug: 'morada-da-cachoeira',
    name: 'Morada da Cachoeira',
    location: 'Cachoeira do Bom Jesus, Florianópolis – SC',
    mapQuery: 'Rua das Buganvílias, 123, Cachoeira do Bom Jesus, Florianópolis, SC',
    rooms: 1, beds: 2, baths: 1, guests: 4,
    featured: true,
    images: [moradaCachoeira1.url, moradaCachoeira2.url, moradaCachoeira3.url, moradaCachoeira4.url, moradaCachoeira5.url, moradaCachoeira6.url, moradaCachoeira7.url, moradaCachoeira8.url],
    airbnbUrl: 'https://www.airbnb.com.br/rooms/1543496322651033833',
    contactPhone: BR_PHONE,
    description: T(
      'Bem-vindo à Morada da Cachoeira, seu refúgio em Florianópolis a apenas 150 metros da praia! Compacto e aconchegante, ideal tanto para lazer quanto para trabalho. Próximo ao trapiche de Canavieiras, ao Sapiens Parque e ao Hotel Porta do Sol, com fácil acesso a restaurantes e conveniências. Estacionamento ao lado do prédio, vaga mediante disponibilidade (tratar diretamente com o responsável).',
      'Welcome to Morada da Cachoeira, your Florianópolis retreat just 150 meters from the beach! Compact and cozy, ideal for both leisure and work. Close to the Canavieiras pier, Sapiens Parque and Hotel Porta do Sol, with easy access to restaurants and conveniences. Parking next to the building, subject to availability (arrange directly with the host).',
    ),
    sections: [
      { title: S.space, body: T(
        'Apartamento todo reformado. Cozinha equipada com fogão, geladeira, airfryer, cafeteira, lava e seca, lava-louças e smart TV. Utensílios de cozinha, roupas de cama e toalhas disponíveis. Ar-condicionado na sala e no quarto (verificar regras de consumo no ato da reserva). Uma cama Queen no quarto e um sofá-cama na sala.',
        'Fully renovated apartment. Kitchen with stove, fridge, air fryer, coffee maker, washer-dryer, dishwasher and smart TV. Kitchenware, bed linen and towels provided. Air conditioning in the living room and bedroom (check usage rules when booking). One Queen bed in the bedroom and a sofa bed in the living room.',
      ) },
      { title: S.notes, body: T(
        'O condomínio aplica multa caso: não sejam respeitadas as regras de silêncio (das 22h às 8h); roupas sejam penduradas na janela; o formulário exigido pelo condomínio não seja preenchido.',
        'The building charges a fine if: quiet hours (10 pm to 8 am) are not respected; clothes are hung from the windows; the form required by the building is not completed.',
      ) },
    ],
    highlights: [
      T('150 m da praia', '150 m from the beach'),
      T('Ar-condicionado na sala e no quarto', 'Air conditioning in living room and bedroom'),
      T('Lava e seca e lava-louças', 'Washer-dryer and dishwasher'),
      T('Smart TV', 'Smart TV'),
    ],
  },
  {
    slug: 'flor-da-montanha',
    name: 'Flor da Montanha',
    location: 'Centro, Amparo – SP',
    mapQuery: 'Centro, Amparo, SP',
    rooms: 3, beds: 3, baths: 2, guests: 6,
    images: [florDaMontana1.url, florDaMontana2.url, florDaMontana3.url, florDaMontana4.url, florDaMontana5.url, florDaMontana6.url, florDaMontana7.url, florDaMontana8.url, florDaMontana9.url],
    airbnbUrl: 'https://www.airbnb.com.br/rooms/1612345498075548772',
    contactPhone: BR_PHONE,
    description: T(
      'Casarão histórico no centro de Amparo, amplo, confortável e cheio de charme. Preserva elementos originais, como grandes janelas e pé-direito alto, criando uma atmosfera acolhedora e única. Localização privilegiada, a poucos minutos da rua principal, com bancos, lojas, farmácias e supermercado próximos. Ideal para turistas e para profissionais em estadias temporárias.',
      'A historic mansion in downtown Amparo — spacious, comfortable and full of charm. It preserves original features such as large windows and high ceilings, creating a warm, unique atmosphere. Prime location a few minutes from the main street, with banks, shops, pharmacies and a supermarket nearby. Ideal for tourists and professionals on temporary stays.',
    ),
    sections: [
      { title: S.space, body: T(
        'Estacionamento com câmera 24 horas a aproximadamente 300 metros da casa (R$ 50 a diária — avise previamente para reservar a vaga).',
        'Parking with 24-hour cameras about 300 meters from the house (R$ 50 per day — let us know in advance to reserve a spot).',
      ) },
      { title: S.access, body: T(
        'O acesso será feito por senha, disponibilizada às vésperas do check-in.',
        'Access is by a code shared shortly before check-in.',
      ) },
    ],
    highlights: [
      T('Casarão histórico', 'Historic mansion'),
      T('Pé-direito alto e janelas originais', 'High ceilings and original windows'),
      T('Acesso por senha', 'Keyless code entry'),
      T('Perto do comércio central', 'Close to downtown shops'),
    ],
  },
  {
    slug: 'casa-do-interior',
    name: 'Casa do Interior',
    location: 'Centro Histórico, Amparo – SP',
    mapQuery: 'Centro Histórico, Amparo, SP',
    rooms: 3, beds: 3, baths: 2, guests: 5,
    images: [casaDoInterior1.url, casaDoInterior2.url, casaDoInterior3.url, casaDoInterior4.url, casaDoInterior5.url, casaDoInterior6.url, casaDoInterior7.url, casaDoInterior8.url, casaDoInterior9.url, casaDoInterior10.url],
    airbnbUrl: 'https://www.airbnb.com.br/rooms/1425663339808746025',
    contactPhone: BR_PHONE,
    description: T(
      'Localizada no centro histórico de Amparo, a Casa do Interior traz aconchego e autenticidade. Cada cantinho foi pensado para deixar uma marca positiva na memória de quem passa por aqui. Estamos bem próximos da rua principal e a uma quadra de bares e restaurantes — somos amigos e parceiros de vários estabelecimentos, o que torna sua estadia ainda mais especial!',
      "Set in Amparo's historic center, Casa do Interior brings warmth and authenticity. Every corner was designed to leave a lasting memory. We are close to the main street and one block from bars and restaurants — we're friends and partners with many local businesses, making your stay even more special!",
    ),
    sections: [
      { title: S.space, body: T(
        'A casa possui três quartos e acomoda confortavelmente quatro pessoas. O valor da diária anunciado é por casal; acima de duas pessoas há valor adicional por pessoa.',
        'The house has three bedrooms and comfortably fits four people. The listed nightly rate is per couple; additional guests pay an extra fee per person.',
      ) },
      { title: S.notes, body: T(
        'Temos profissionais parceiros que oferecem trilhas e massagens, cobrados à parte e mediante disponibilidade. Dicas de passeios, regras da casa, instruções de equipamentos e senha do Wi-Fi estarão disponíveis na casa.',
        'Partner professionals offer hikes and massages, charged separately and subject to availability. Tour tips, house rules, appliance instructions and the Wi-Fi password are available at the house.',
      ) },
    ],
    highlights: [
      T('Centro histórico de Amparo', "Amparo's historic center"),
      T('Uma quadra de bares e restaurantes', 'One block from bars and restaurants'),
      T('Trilhas e massagens com parceiros', 'Partner hikes and massages'),
      T('Wi-Fi', 'Wi-Fi'),
    ],
  },
  {
    slug: 'casa-da-lira',
    name: 'Casa da Lira',
    location: 'Amparo – SP',
    mapQuery: '',
    rooms: 2, beds: 2, baths: 1,
    images: rotate(8),
    airbnbUrl: 'https://www.airbnb.com.br/rooms/694249561141597439',
    contactPhone: BR_PHONE,
    description: T(
      'Uma casa simples e acolhedora, com duas camas de casal e banheiro privativo, para quem busca uma estadia prática e tranquila.',
      'A simple, welcoming house with two double beds and a private bathroom, for those looking for an easy, peaceful stay.',
    ),
    sections: [
      { title: T('Regras da casa', 'House rules'), body: T(
        'Obrigatório trancar a porta de entrada ao entrar e sair da casa. Obrigatório lavar os utensílios de cozinha utilizados.',
        'Always lock the front door when entering and leaving. Please wash any kitchenware you use.',
      ) },
      { title: T('Atenção', 'Please note'), body: T(
        'O banheiro é privativo, porém não é suíte. Não fornecemos itens de uso pessoal (shampoo, condicionador, sabonete, repelente etc.). Não nos responsabilizamos por danos ao veículo durante a estadia. O primeiro quarto está mais suscetível a barulhos externos.',
        'The bathroom is private but not en-suite. Personal items (shampoo, conditioner, soap, repellent, etc.) are not provided. We are not responsible for any vehicle damage during the stay. The first bedroom is more exposed to outside noise.',
      ) },
    ],
    highlights: [
      T('2 camas de casal', '2 double beds'),
      T('Banheiro privativo', 'Private bathroom'),
    ],
  },
  {
    slug: 'casa-indianapolis',
    name: 'Casa Indianápolis',
    location: 'Indianápolis – EUA',
    mapQuery: 'Indianapolis, Indiana, USA',
    rooms: 2, baths: 1,
    images: rotate(4),
    contactPhone: US_PHONE,
    description: T(
      'Para quem quer sair do Brasil e viver dias especiais nos Estados Unidos. Um refúgio em local privilegiado e muito bonito, com o mesmo cuidado e acolhimento Porto Betarello — uma base confortável para explorar Indianápolis com tranquilidade.',
      'For those who want to travel beyond Brazil and enjoy special days in the United States. A retreat in a beautiful, privileged location with the same Porto Betarello care and warmth — a comfortable base for exploring Indianapolis at ease.',
    ),
    highlights: [
      T('Local privilegiado', 'Prime location'),
      T('2 quartos e 1 banheiro', '2 bedrooms and 1 bathroom'),
      T('Atendimento em português', 'Portuguese-speaking host'),
    ],
  },
  {
    slug: 'casa-internacional',
    name: 'Casa Internacional',
    location: 'Estados Unidos',
    mapQuery: '',
    rooms: 1, baths: 1,
    images: rotate(7),
    contactPhone: US_PHONE,
    description: T(
      'Uma casa aconchegante nos Estados Unidos, ideal para casais ou viajantes que buscam conforto e praticidade longe de casa — com a hospitalidade da família Betarello do outro lado do continente.',
      'A cozy home in the United States, ideal for couples or travelers seeking comfort and convenience away from home — with the Betarello family hospitality across the continent.',
    ),
    highlights: [
      T('Ideal para casais', 'Ideal for couples'),
      T('1 quarto e 1 banheiro', '1 bedroom and 1 bathroom'),
      T('Atendimento em português', 'Portuguese-speaking host'),
    ],
  },
];

export const getRetreatBySlug = (slug: string | undefined) =>
  retreats.find((retreat) => retreat.slug === slug);
