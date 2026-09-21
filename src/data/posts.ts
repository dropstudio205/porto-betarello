import gallery1 from '@/assets/gallery-1.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import tipRestaurant from '@/assets/tip-restaurant.jpg';
import tipTrail from '@/assets/tip-trail.jpg';
import heroBg from '@/assets/hero-bg.jpg';

export type LocalizedText = { pt: string; en: string };

export interface BlogPost {
  slug: string;
  image: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  content: LocalizedText[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'arroz-feijao-moela-e-amor',
    image: tipRestaurant,
    title: { pt: 'Arroz, feijão, moela e amor', en: 'Rice, beans, gizzard and love' },
    excerpt: {
      pt: 'Há comidas que alimentam o corpo. E há aquelas que alimentam a história.',
      en: 'Some foods feed the body. Others feed the story.',
    },
    content: [
      {
        pt: 'Há comidas que alimentam o corpo. E há aquelas que alimentam a história. Na nossa família, a moela com arroz e feijão sempre foi muito mais do que um prato: era o centro da mesa nos domingos, a desculpa para reunir todo mundo e a memória que nenhum restaurante sofisticado consegue substituir.',
        en: 'Some foods feed the body. Others feed the story. In our family, gizzard with rice and beans was always much more than a dish: it was the center of the table on Sundays, the excuse to bring everyone together and a memory that no fancy restaurant can replace.',
      },
      {
        pt: 'Aprendemos com os mais velhos que cozinhar para alguém é uma forma de cuidado. Cada tempero escolhido, cada panela que fica no fogo baixo por horas, carrega um carinho que se percebe no primeiro garfo. É esse mesmo espírito que levamos para cada refúgio que preparamos para os nossos hóspedes.',
        en: 'We learned from our elders that cooking for someone is a form of care. Every chosen seasoning, every pot that simmers for hours, carries an affection you can taste from the very first forkful. It is that same spirit we bring to every retreat we prepare for our guests.',
      },
      {
        pt: 'Se você ficar em um dos nossos refúgios, não deixe de experimentar a gastronomia caseira da região. São pratos simples, feitos com calma, que contam quem somos — e que talvez contem um pouco de você também.',
        en: "If you stay in one of our retreats, don't miss the homemade cuisine of the region. These are simple dishes, made slowly, that tell you who we are — and maybe tell a little about you too.",
      },
    ],
  },
  {
    slug: 'viajar-tambem-e-um-lugar-dentro-da-mente',
    image: heroBg,
    title: { pt: 'Viajar também é um lugar dentro da mente', en: 'Traveling is also a place inside the mind' },
    excerpt: {
      pt: 'Viajar não é apenas mudar de endereço.',
      en: 'Traveling is more than changing addresses.',
    },
    content: [
      {
        pt: 'Viajar não é apenas mudar de endereço. É mudar de ritmo, de olhar, de respiração. Quem chega aos nossos refúgios costuma trazer o cansaço da rotina — e costuma voltar para casa carregando algo que não cabe na mala: uma pausa verdadeira.',
        en: "Traveling is more than changing addresses. It is changing pace, perspective and breath. Those who arrive at our retreats usually carry the tiredness of routine — and usually return home carrying something that doesn't fit in a suitcase: a true pause.",
      },
      {
        pt: 'A natureza faz a sua parte. O som do mar em Palhoça, a brisa de Florianópolis, o silêncio do interior em Amparo. Mas o resto acontece dentro de cada um: o sono que finalmente chega, a conversa que finalmente acontece, a leitura que estava parada há meses.',
        en: 'Nature does its part. The sound of the sea in Palhoça, the breeze of Florianópolis, the silence of the countryside in Amparo. But the rest happens inside each person: the sleep that finally comes, the conversation that finally happens, the book that had been waiting for months.',
      },
      {
        pt: 'Por isso dizemos que cada refúgio é preparado com carinho: porque sabemos que o lugar certo, no momento certo, pode mudar muita coisa. Ou melhor: pode simplesmente devolver você para você mesmo.',
        en: 'That is why we say each retreat is prepared with care: because we know the right place, at the right moment, can change so much. Or better: it can simply give you back to yourself.',
      },
    ],
  },
  {
    slug: 'curiosidade-literaria-grande-sertao-veredas',
    image: gallery1,
    title: {
      pt: 'Curiosidade Literária: As Raízes Reais de "Grande Sertão: Veredas"',
      en: 'Literary Curiosity: The Real Roots of "Grande Sertão: Veredas"',
    },
    excerpt: {
      pt: 'Você sabia que o icônico romance Grande Sertão tem inspirações reais?',
      en: 'Did you know the iconic novel Grande Sertão has real-life roots?',
    },
    content: [
      {
        pt: 'Você sabia que o icônico romance Grande Sertão: Veredas, de Guimarães Rosa, tem inspirações reais? O autor percorreu o sertão mineiro coletando histórias, falas e paisagens que depois viraram literatura universal.',
        en: 'Did you know that the iconic novel Grande Sertão: Veredas, by João Guimarães Rosa, has real-life roots? The author traveled through the backlands of Minas Gerais collecting stories, voices and landscapes that later became universal literature.',
      },
      {
        pt: 'A região do interior tem esse poder: guarda em cada casarão, em cada estrada de terra e em cada conversa na varanda um capítulo de história brasileira. Amparo, onde ficam dois dos nossos refúgios, é uma dessas cidades onde o passado ainda caminha ao lado do presente.',
        en: 'The countryside has that power: every old mansion, every dirt road and every conversation on the porch holds a chapter of Brazilian history. Amparo, where two of our retreats are located, is one of those cities where the past still walks beside the present.',
      },
      {
        pt: 'Levar um bom livro para uma estadia no interior é uma das nossas recomendações favoritas. Ler no ritmo do interior, sem pressa, é um luxo silencioso — e dos mais acessíveis.',
        en: 'Taking a good book to a countryside stay is one of our favorite recommendations. Reading at the pace of the countryside, without hurry, is a quiet luxury — and one of the most accessible.',
      },
    ],
  },
  {
    slug: 'o-melhor-cafe-da-manha-do-interior',
    image: gallery5,
    title: { pt: 'O melhor café da manhã do interior', en: 'The best countryside breakfast' },
    excerpt: {
      pt: 'Pão de queijo quentinho, café passado na hora e tempo de sobra.',
      en: 'Warm cheese bread, freshly brewed coffee and time to spare.',
    },
    content: [
      {
        pt: 'Pão de queijo quentinho, café passado na hora e tempo de sobra. O café da manhã no interior de São Paulo é uma cerimônia simples que muda o tom do dia inteiro.',
        en: 'Warm cheese bread, freshly brewed coffee and time to spare. Breakfast in the São Paulo countryside is a simple ceremony that changes the tone of the whole day.',
      },
      {
        pt: 'Em Amparo, recomendamos acordar cedo, abrir as janelas e deixar o dia começar devagar. A cidade tem uma tradição acolhedora de padarias e cafés que vale explorar — e o passeio pelo centro histórico é a sobremesa perfeita.',
        en: 'In Amparo, we recommend waking up early, opening the windows and letting the day begin slowly. The city has a welcoming tradition of bakeries and cafés worth exploring — and a stroll through the historic center is the perfect dessert.',
      },
      {
        pt: 'Nos nossos refúgios em Amparo você encontra cozinha equipada para preparar tudo com calma, do jeito que a sua família gosta. Porque férias boas são aquelas em que até o café da manhã vira memória.',
        en: 'In our retreats in Amparo you will find an equipped kitchen to prepare everything at your own pace, just the way your family likes it. Because good vacations are those where even breakfast becomes a memory.',
      },
    ],
  },
  {
    slug: 'roteiro-de-praia-para-quem-odeia-multidao',
    image: tipTrail,
    title: {
      pt: 'Roteiro de praia para quem odeia multidão',
      en: 'A beach itinerary for those who hate crowds',
    },
    excerpt: {
      pt: 'A Grande Florianópolis ainda guarda cantinhos tranquilos para quem sabe onde procurar.',
      en: 'Greater Florianópolis still keeps quiet corners for those who know where to look.',
    },
    content: [
      {
        pt: 'A Grande Florianópolis ainda guarda cantinhos tranquilos para quem sabe onde procurar. Praias escondidas entre trilhas, mirantes fora do circuito óbvio e pôr do sol sem competição por espaço na areia.',
        en: 'Greater Florianópolis still keeps quiet corners for those who know where to look. Beaches hidden behind trails, viewpoints off the obvious circuit and sunsets with no competition for a spot on the sand.',
      },
      {
        pt: 'A nossa dica de ouro: vá na maré certa, chegue cedo e leve água e lanche. As melhores experiências aqui não estão à venda — estão a uma caminhada de distância.',
        en: 'Our golden tip: go with the right tide, arrive early and bring water and snacks. The best experiences here are not for sale — they are a walk away.',
      },
      {
        pt: 'Na nossa página de Dicas reunimos trilhas, mirantes e praias que amamos. É o nosso conhecimento de gerações, compartilhado para que a sua viagem tenha o mesmo encanto das nossas.',
        en: 'On our Tips page we gathered the trails, viewpoints and beaches we love. It is our generations-old knowledge, shared so that your trip has the same charm as ours.',
      },
    ],
  },
  {
    slug: 'por-que-toda-familia-precisa-de-uma-casa-de-temporada',
    image: gallery3,
    title: {
      pt: 'Por que toda família precisa de uma casa de temporada',
      en: 'Why every family needs a vacation home',
    },
    excerpt: {
      pt: 'Não é luxo: é investimento em memória.',
      en: 'It is not luxury: it is an investment in memory.',
    },
    content: [
      {
        pt: 'Não é luxo: é investimento em memória. Uma casa de temporada é onde a família finalmente divide o mesmo teto, o mesmo café e a mesma gargalhada — coisa rara na correria do dia a dia.',
        en: 'It is not luxury: it is an investment in memory. A vacation home is where the family finally shares the same roof, the same coffee and the same laughter — a rare thing in the rush of everyday life.',
      },
      {
        pt: 'Diferente de um hotel, uma casa inteira dá liberdade: cozinhar junto, acordar sem despertador, brincar no quintal, conversar até tarde sem hora para acabar. São detalhes pequenos que constroem lembranças grandes.',
        en: 'Unlike a hotel, an entire house gives you freedom: cooking together, waking up without an alarm, playing in the yard, talking late into the night with no closing time. Small details that build big memories.',
      },
      {
        pt: 'É por isso que cuidamos dos nossos refúgios como cuidamos da nossa própria casa. Porque sabemos que, por alguns dias, ela será a casa da sua família também.',
        en: 'That is why we take care of our retreats the way we take care of our own home. Because we know that, for a few days, it will be your family home too.',
      },
    ],
  },
];

export const getPostBySlug = (slug: string | undefined) =>
  blogPosts.find((post) => post.slug === slug);
