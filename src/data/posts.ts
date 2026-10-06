import foodPhoto from '@/assets/blog-arroz-feijao.jpeg.asset.json';
import rosaCover from '@/assets/blog-rosa-capa.png.asset.json';
import rosaWriting from '@/assets/blog-rosa-escrevendo.jpg.asset.json';
import rosaExhibition from '@/assets/blog-rosa-exposicao.jpeg.asset.json';
import rosaJourney from '@/assets/blog-rosa-boiada.jpg.asset.json';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import tipTrail from '@/assets/tip-trail.jpg';
import heroBg from '@/assets/hero-bg.jpg';

export type LocalizedText = { pt: string; en: string };

export interface BlogPost {
  slug: string;
  image: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  content: (LocalizedText & { heading?: boolean })[];
  gallery?: { image: string; alt: LocalizedText }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'arroz-feijao-moela-e-amor',
    image: foodPhoto.url,
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
    slug: 'curiosidade-literaria-grande-sertao-veredas',
    image: rosaCover.url,
    title: { pt: 'Curiosidade Literária: As Raízes Reais de “Grande Sertão: Veredas”', en: 'Literary Curiosity: The Real Roots of “Grande Sertão: Veredas”' },
    excerpt: { pt: 'Uma expedição pelo sertão em 1952, Guimarães Rosa e Seu Zito: uma conexão entre literatura e nossas raízes familiares.', en: 'A 1952 backcountry expedition, Guimarães Rosa and Seu Zito: a connection between literature and our family roots.' },
    content: [
      {
            "pt": "Você sabia que o icônico romance Grande Sertão: Veredas, de João Guimarães Rosa, não surgiu apenas da imaginação do autor, mas foi inspirado em uma expedição real pelo sertão mineiro em 1952? Nessa jornada épica de boiadeiros, um dos vaqueiros que assumia o papel de cozinheiro da tropa era o lendário Zito – ou João Henrique Ribeiro, um homem do campo, poeta e guia habilidoso, que travou contato próximo com o próprio Guimarães Rosa durante a travessia. E aqui vai o toque pessoal e fascinante: Seu Zito é nada menos que o irmão mais velho da minha mãe! Nascidos no coração do sertão de Minas Gerais, eles cresceram imersos nas paisagens áridas e nas tradições rurais que tanto influenciaram a obra de Rosa. Cheios de histórias autênticas do campo – de tropeadas intermináveis a noites sob o céu estrelado –, eles representam o espírito vivo do sertão que pulsa nas páginas do livro. Essa conexão familiar transforma a literatura em algo palpável, provando que as veredas de Guimarães Rosa ecoam nas vidas reais de mineiros como nós. Uma verdadeira ponte entre ficção e herança cultural",
            "en": "Did you know that João Guimarães Rosa’s iconic novel Grande Sertão: Veredas did not spring solely from the author’s imagination, but was inspired by a real expedition through the backlands of Minas Gerais in 1952? On this epic cattle-driving journey, one of the cowboys who cooked for the group was the legendary Zito — João Henrique Ribeiro, a countryman, poet and skilled guide who became close to Guimarães Rosa during the crossing. And here is the fascinating personal connection: Seu Zito is none other than my mother’s eldest brother! Born in the heart of the Minas Gerais backlands, they grew up surrounded by the dry landscapes and rural traditions that so deeply influenced Rosa’s work. Full of authentic country stories — from endless cattle drives to nights beneath starry skies — they embody the living spirit of the sertão that beats in the pages of the book. This family connection makes literature tangible, showing that Guimarães Rosa’s paths echo in the real lives of people from Minas Gerais like us. A true bridge between fiction and cultural heritage."
      },
      {
            "pt": "Detalhes sobre Seu Zito: O Vaqueiro que Inspirou Guimarães Rosa",
            "en": "About Seu Zito: The Cowboy Who Inspired Guimarães Rosa",
            "heading": true
      },
      {
            "pt": "Seu Zito, cujo nome completo é João Henrique Ribeiro, é uma figura icônica ligada à expedição de boiadeiros realizada por João Guimarães Rosa pelo sertão mineiro em maio de 1952. Essa viagem, que durou cerca de 10 dias e inspirou diretamente obras como Grande Sertão: Veredas e Corpo de Baile, contou com Zito como um dos principais companheiros do escritor. Nascido no sertão de Minas Gerais, assim como você mencionou ser o irmão mais velho de sua mãe, ele representava o autêntico homem do campo: mineiro raiz, cheio de histórias rurais, versos improvisados e sabedoria prática sobre a vida nas veredas áridas.",
            "en": "Seu Zito, whose full name is João Henrique Ribeiro, is an iconic figure associated with João Guimarães Rosa’s cattle-driving expedition through the Minas Gerais backlands in May 1952. The journey lasted around ten days and directly inspired works such as Grande Sertão: Veredas and Corpo de Baile, with Zito as one of the writer’s main companions. Born in the Minas Gerais backlands, and the eldest brother of my mother, as mentioned, he represented the authentic countryman: deeply rooted in Minas Gerais, full of rural stories, improvised verses and practical wisdom about life along the dry backcountry paths."
      },
      {
            "pt": "Papel na Expedição",
            "en": "His Role in the Expedition",
            "heading": true
      },
      {
            "pt": "Zito atuou como guia e cozinheiro da tropa. Ele ia à frente da boiada, tocando o berrante para orientar os bois e mantendo conversas constantes com Guimarães Rosa. Durante toda a jornada, respondia às inúmeras dúvidas do escritor sobre o sertão, suas tradições, dialetos e desafios cotidianos. Rosa o considerava o “mais esperto” entre os vaqueiros, servindo como uma fonte primordial para suas anotações – que mais tarde se transformaram em elementos literários. A expedição envolvia o transporte de cerca de 360 bois grandes, partindo da Fazenda Sirga (próxima a Andrequicé, distrito de Três Marias, MG) em 19 de maio de 1952, com uma festa de despedida. O percurso cobriu mais de 40 léguas, passando por locais como Fazenda Tolda, Catatau, Riacho das Vacas, Meleiro, Barreiro do Mato, Fazenda Ventania do Juvenal, Riacho da Areia, Fazenda do Dr. José Saturnino, Cordisburgo, Toca do Urubu (onde encontraram repórteres da revista O Cruzeiro) e chegando a uma fazenda perto de Araçaí (MG). Participaram cerca de 8 ou 9 vaqueiros, incluindo nomes como Manuelzão (chefe da tropa e inspiração para personagens de Rosa), Tião Leite, Santana, Sebastião de Jesus, Gregório, Bindéia, Aquiles (um bom violeiro) e um rapazinho de 12 anos.",
            "en": "Zito served as the group’s guide and cook. He went ahead of the herd, blowing a cattle horn to guide the animals and keeping up a constant conversation with Guimarães Rosa. Throughout the journey, he answered the writer’s many questions about the backlands, their traditions, dialects and everyday challenges. Rosa considered him the “cleverest” of the cowboys, and he became a primary source for the notes that would later become literary material. The expedition transported around 360 large cattle, departing from Fazenda Sirga, near Andrequicé, a district of Três Marias, Minas Gerais, on May 19, 1952, with a farewell celebration. The route covered more than forty leagues, passing through Fazenda Tolda, Catatau, Riacho das Vacas, Meleiro, Barreiro do Mato, Fazenda Ventania do Juvenal, Riacho da Areia, Fazenda do Dr. José Saturnino, Cordisburgo and Toca do Urubu, where they met reporters from O Cruzeiro magazine, before reaching a farm near Araçaí, Minas Gerais. Around eight or nine cowboys took part, including Manuelzão, the group’s leader and an inspiration for Rosa’s characters, Tião Leite, Santana, Sebastião de Jesus, Gregório, Bindéia, Aquiles, a skilled viola player, and a twelve-year-old boy."
      },
      {
            "pt": "Antecedentes Pessoais",
            "en": "Personal Background",
            "heading": true
      },
      {
            "pt": "Aos 74 anos, em uma entrevista concedida à Revista Cult em Três Marias (MG), Zito se descrevia como um vaqueiro experiente, mas com a memória afetada por uma doença recente. Apesar disso, era um leitor voraz: sabia muitos livros de cor e mantinha o hábito de registrar versos poéticos sobre o dia a dia. Durante a viagem, escrevia esses versos à noite, ao redor da fogueira, e os anotava nas cadernetas de Guimarães Rosa – hoje arquivadas no Instituto de Estudos Brasileiros (IEB) da USP. Sua família, enraizada no sertão mineiro, compartilhava o amor pelas histórias do campo, cheias de tropeadas, noites estreladas e desafios da vida rural. Como irmão mais velho de sua mãe, ele carrega esse legado familiar de mineiros autênticos, que você destacou na curiosidade que escrevemos juntos.",
            "en": "At the age of 74, in an interview with Revista Cult in Três Marias, Minas Gerais, Zito described himself as an experienced cowboy whose memory had been affected by a recent illness. Even so, he was an avid reader: he knew many books by heart and regularly wrote poetic verses about daily life. During the journey, he wrote these verses at night around the campfire, recording them in Guimarães Rosa’s notebooks, now held at the University of São Paulo’s Institute of Brazilian Studies (IEB). His family, rooted in the Minas Gerais backlands, shared a love for country stories filled with cattle drives, starry nights and rural challenges. As my mother’s eldest brother, he carries this legacy of authentic people from Minas Gerais, highlighted in this literary curiosity."
      },
      {
            "pt": "Anedotas e Histórias Compartilhadas",
            "en": "Anecdotes and Shared Stories",
            "heading": true
      },
      {
            "pt": "Zito contava com humor sobre a viagem: quando os assuntos acabavam, ele “inventava bobagens”, como falar de mulheres e moças bonitas, só para manter a conversa fluindo – e Rosa anotava tudo! Ele ria ao lembrar que o escritor adorava versos, mas não os memorizava. Muitas das narrativas de Zito foram incorporadas às obras de Rosa, confirmando que o autor “escreveu tudo” baseado no que ouvia dos vaqueiros. Em depoimentos, Zito relembrava a camaradagem noturna, as fogueiras e como a expedição misturava trabalho árduo com momentos poéticos. Há menções a cenas específicas, como uma com um tucano, que Zito ajudou a descrever, tornando-se uma das mais belas em relatos de Rosa.  Essa conexão entre Zito e Guimarães Rosa não foi apenas profissional: transformou-se em uma ponte entre a vida real do sertão e a literatura brasileira, ecoando nas páginas de Grande Sertão: Veredas. Como familiar seu, ele simboliza esse amor incondicional pelas raízes mineiras que você valoriza tanto.",
            "en": "Zito told humorous stories about the journey: when they ran out of things to discuss, he would “make up nonsense,” talking about women and pretty young ladies just to keep the conversation going — and Rosa wrote it all down! He laughed as he recalled that the writer loved verses but did not memorize them. Many of Zito’s stories found their way into Rosa’s works, confirming that the author “wrote everything” based on what he heard from the cowboys. In his recollections, Zito described their nighttime camaraderie, campfires and the way the expedition combined hard work with poetic moments. There are mentions of particular scenes, such as one involving a toucan, which Zito helped describe and which became one of the most beautiful in accounts of Rosa. This connection between Zito and Guimarães Rosa was more than professional: it became a bridge between real backcountry life and Brazilian literature, echoing in the pages of Grande Sertão: Veredas. As a member of our family, he symbolizes the unconditional love for our Minas Gerais roots that we cherish so much."
      },
      {
            "pt": "Versos de Zito na Expedição de 1952",
            "en": "Zito’s Verses on the 1952 Expedition",
            "heading": true
      },
      {
            "pt": "João Henrique Ribeiro, o Seu Zito, foi uma figura central na expedição boiadeira de maio de 1952 pelo sertão mineiro, atuando como guia, cozinheiro e companheiro constante de João Guimarães Rosa. Durante a viagem, que inspirou obras como Grande Sertão: Veredas, Zito tinha o hábito de escrever versos todas as noites, após o trabalho com a tropa. Sentado à beira da fogueira, ele registrava em um caderno escolar os eventos do dia, transformando a rotina árdua dos vaqueiros em poesia simples e autêntica, com caligrafia arrastada e frases diretas. Esses versos narravam o cotidiano da jornada – como o movimento da boiada, as paradas em fazendas, as conversas e os desafios do sertão – e eram frequentemente compartilhados com Rosa, que os anotava em suas próprias cadernetas. Infelizmente, os versos originais de Zito não são amplamente publicados ou disponíveis em fontes online acessíveis. Eles estão preservados nas cadernetas de viagem de Guimarães Rosa, arquivadas no Instituto de Estudos Brasileiros (IEB) da USP, em São Paulo. Pesquisas em entrevistas, artigos e relatos (como o depoimento de Zito à Revista Cult em 2001) confirmam a existência desses escritos, mas não incluem transcrições completas ou citações verbatim. Zito mencionava que escrevia sobre \"o que passava no dia\" e que Rosa anotava tudo, mas ele próprio ria ao lembrar que inventava \"bobagens\" para manter as conversas fluindo, como histórias de mulheres ou detalhes da natureza.",
            "en": "João Henrique Ribeiro, Seu Zito, was a central figure in the May 1952 cattle-driving expedition through the Minas Gerais backlands, serving as guide, cook and constant companion to João Guimarães Rosa. During the journey, which inspired works such as Grande Sertão: Veredas, Zito wrote verses every night after working with the herd. Sitting beside the campfire, he recorded the day’s events in a school notebook, turning the cowboys’ demanding routine into simple, authentic poetry with flowing handwriting and direct phrases. These verses described daily life on the journey — the herd’s movements, stops at farms, conversations and backcountry challenges — and were often shared with Rosa, who wrote them in his own notebooks. Unfortunately, Zito’s original verses are not widely published or available through accessible online sources. They are preserved in Guimarães Rosa’s travel notebooks, held at the University of São Paulo’s Institute of Brazilian Studies (IEB). Interviews, articles and accounts, including Zito’s 2001 testimony to Revista Cult, confirm these writings existed, but do not provide complete transcriptions or verbatim quotations. Zito said he wrote about “what happened during the day” and that Rosa noted everything down, laughing as he recalled inventing “nonsense” to keep conversations flowing, such as stories about women or details of nature."
      },
      {
            "pt": "Exemplo de Verso Coletado na Expedição",
            "en": "An Example of Verse Collected on the Expedition",
            "heading": true
      },
      {
            "pt": "Embora não atribuído exclusivamente a Zito, uma quadrinha (verso popular em quatro linhas) foi recolhida por Guimarães Rosa durante a viagem, entre os vaqueiros da tropa – possivelmente inspirada ou compartilhada por Zito, dado seu papel como poeta do grupo. Ela captura o espírito da vida sertaneja e aparece em Ave, Palavra (p. 114), um livro de Rosa com anotações e recolhimentos da expedição:",
            "en": "Although not attributed exclusively to Zito, a four-line folk verse was collected by Guimarães Rosa among the cowboys during the journey — possibly inspired or shared by Zito, given his role as the group’s poet. It captures the spirit of backcountry life and appears in Ave, Palavra (p. 114), a book containing Rosa’s notes and material collected on the expedition:"
      },
      {
            "pt": "Meu cavalo é minhas pernas,",
            "en": "My horse is my legs,"
      },
      {
            "pt": "meu arreio é meu assento,",
            "en": "my saddle is my seat,"
      },
      {
            "pt": "meu capote é minha cama,",
            "en": "my coat is my bed,"
      },
      {
            "pt": "meu perigo é meu sustento.",
            "en": "my danger is my livelihood."
      },
      {
            "pt": "Essa quadrinha reflete o dia a dia dos vaqueiros: a dependência do cavalo, o uso prático dos equipamentos e a aceitação do risco como parte da existência no sertão. É um exemplo típico do tipo de poesia oral e improvisada que Zito e os outros produziam, misturando humor, sabedoria rural e observações da natureza.",
            "en": "This verse reflects the cowboys’ daily life: their dependence on the horse, the practical use of their equipment and the acceptance of risk as part of existence in the backlands. It is a typical example of the oral, improvised poetry that Zito and the others created, blending humor, rural wisdom and observations of nature."
      }
],
    gallery: [
      { image: rosaWriting.url, alt: { pt: 'Guimarães Rosa escrevendo durante a viagem pelo sertão', en: 'Guimarães Rosa writing during his backcountry journey' } },
      { image: rosaExhibition.url, alt: { pt: 'Visitantes observam fotografias de Guimarães Rosa em uma exposição', en: 'Visitors viewing photographs of Guimarães Rosa at an exhibition' } },
      { image: rosaJourney.url, alt: { pt: 'Sala da exposição sobre a viagem de 1952 e a boiada', en: 'Exhibition room about the 1952 journey and cattle drive' } },
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
