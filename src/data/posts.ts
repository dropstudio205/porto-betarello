import foodPhoto from "@/assets/blog-arroz-feijao.jpeg.asset.json";
import rosaCover from "@/assets/blog-rosa-capa.png.asset.json";
import rosaWriting from "@/assets/blog-rosa-escrevendo.jpg.asset.json";
import rosaExhibition from "@/assets/blog-rosa-exposicao.jpeg.asset.json";
import rosaJourney from "@/assets/blog-rosa-boiada.jpg.asset.json";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import tipTrail from "@/assets/tip-trail.jpg";
import heroBg from "@/assets/hero-bg.jpg";

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
    slug: "arroz-feijao-moela-e-amor",
    image: foodPhoto.url,
    title: { pt: "Arroz, feijão, moela e amor", en: "Rice, beans, gizzard and love" },
    excerpt: {
      pt: "Há comidas que alimentam o corpo. E há aquelas que alimentam a história.",
      en: "Some foods feed the body. Others feed the story.",
    },
    content: [
      {
        pt: "Há comidas que alimentam o corpo. E há aquelas que alimentam a história. Na nossa família, a moela com arroz e feijão sempre foi muito mais do que um prato: era o centro da mesa nos domingos, a desculpa para reunir todo mundo e a memória que nenhum restaurante sofisticado consegue substituir.",
        en: "Some foods feed the body. Others feed the story. In our family, gizzard with rice and beans was always much more than a dish: it was the center of the table on Sundays, the excuse to bring everyone together and a memory that no fancy restaurant can replace.",
      },
      {
        pt: "Aprendemos com os mais velhos que cozinhar para alguém é uma forma de cuidado. Cada tempero escolhido, cada panela que fica no fogo baixo por horas, carrega um carinho que se percebe no primeiro garfo. É esse mesmo espírito que levamos para cada refúgio que preparamos para os nossos hóspedes.",
        en: "We learned from our elders that cooking for someone is a form of care. Every chosen seasoning, every pot that simmers for hours, carries an affection you can taste from the very first forkful. It is that same spirit we bring to every retreat we prepare for our guests.",
      },
      {
        pt: "Se você ficar em um dos nossos refúgios, não deixe de experimentar a gastronomia caseira da região. São pratos simples, feitos com calma, que contam quem somos — e que talvez contem um pouco de você também.",
        en: "If you stay in one of our retreats, don't miss the homemade cuisine of the region. These are simple dishes, made slowly, that tell you who we are — and maybe tell a little about you too.",
      },
    ],
  },
  {
    slug: "curiosidade-literaria-grande-sertao-veredas",
    image: rosaCover.url,
    title: {
      pt: "Curiosidade Literária: As Raízes Reais de “Grande Sertão: Veredas”",
      en: "Literary Curiosity: The Real Roots of “Grande Sertão: Veredas”",
    },
    excerpt: {
      pt: "Uma expedição pelo sertão em 1952, Guimarães Rosa e Seu Zito: uma conexão entre literatura e nossas raízes familiares.",
      en: "A 1952 backcountry expedition, Guimarães Rosa and Seu Zito: a connection between literature and our family roots.",
    },
    content: [
      {
        pt: "Você sabia que o icônico romance Grande Sertão: Veredas, de João Guimarães Rosa, não surgiu apenas da imaginação do autor, mas foi inspirado em uma expedição real pelo sertão mineiro em 1952? Nessa jornada épica de boiadeiros, um dos vaqueiros que assumia o papel de cozinheiro da tropa era o lendário Zito – ou João Henrique Ribeiro, um homem do campo, poeta e guia habilidoso, que travou contato próximo com o próprio Guimarães Rosa durante a travessia. E aqui vai o toque pessoal e fascinante: Seu Zito é nada menos que o irmão mais velho da minha mãe! Nascidos no coração do sertão de Minas Gerais, eles cresceram imersos nas paisagens áridas e nas tradições rurais que tanto influenciaram a obra de Rosa. Cheios de histórias autênticas do campo – de tropeadas intermináveis a noites sob o céu estrelado –, eles representam o espírito vivo do sertão que pulsa nas páginas do livro. Essa conexão familiar transforma a literatura em algo palpável, provando que as veredas de Guimarães Rosa ecoam nas vidas reais de mineiros como nós. Uma verdadeira ponte entre ficção e herança cultural",
        en: "Did you know that João Guimarães Rosa’s iconic novel Grande Sertão: Veredas did not spring solely from the author’s imagination, but was inspired by a real expedition through the backlands of Minas Gerais in 1952? On this epic cattle-driving journey, one of the cowboys who cooked for the group was the legendary Zito — João Henrique Ribeiro, a countryman, poet and skilled guide who became close to Guimarães Rosa during the crossing. And here is the fascinating personal connection: Seu Zito is none other than my mother’s eldest brother! Born in the heart of the Minas Gerais backlands, they grew up surrounded by the dry landscapes and rural traditions that so deeply influenced Rosa’s work. Full of authentic country stories — from endless cattle drives to nights beneath starry skies — they embody the living spirit of the sertão that beats in the pages of the book. This family connection makes literature tangible, showing that Guimarães Rosa’s paths echo in the real lives of people from Minas Gerais like us. A true bridge between fiction and cultural heritage.",
      },
      {
        pt: "Detalhes sobre Seu Zito: O Vaqueiro que Inspirou Guimarães Rosa",
        en: "About Seu Zito: The Cowboy Who Inspired Guimarães Rosa",
        heading: true,
      },
      {
        pt: "Seu Zito, cujo nome completo é João Henrique Ribeiro, é uma figura icônica ligada à expedição de boiadeiros realizada por João Guimarães Rosa pelo sertão mineiro em maio de 1952. Essa viagem, que durou cerca de 10 dias e inspirou diretamente obras como Grande Sertão: Veredas e Corpo de Baile, contou com Zito como um dos principais companheiros do escritor. Nascido no sertão de Minas Gerais, assim como você mencionou ser o irmão mais velho de sua mãe, ele representava o autêntico homem do campo: mineiro raiz, cheio de histórias rurais, versos improvisados e sabedoria prática sobre a vida nas veredas áridas.",
        en: "Seu Zito, whose full name is João Henrique Ribeiro, is an iconic figure associated with João Guimarães Rosa’s cattle-driving expedition through the Minas Gerais backlands in May 1952. The journey lasted around ten days and directly inspired works such as Grande Sertão: Veredas and Corpo de Baile, with Zito as one of the writer’s main companions. Born in the Minas Gerais backlands, and the eldest brother of my mother, as mentioned, he represented the authentic countryman: deeply rooted in Minas Gerais, full of rural stories, improvised verses and practical wisdom about life along the dry backcountry paths.",
      },
      {
        pt: "Papel na Expedição",
        en: "His Role in the Expedition",
        heading: true,
      },
      {
        pt: "Zito atuou como guia e cozinheiro da tropa. Ele ia à frente da boiada, tocando o berrante para orientar os bois e mantendo conversas constantes com Guimarães Rosa. Durante toda a jornada, respondia às inúmeras dúvidas do escritor sobre o sertão, suas tradições, dialetos e desafios cotidianos. Rosa o considerava o “mais esperto” entre os vaqueiros, servindo como uma fonte primordial para suas anotações – que mais tarde se transformaram em elementos literários. A expedição envolvia o transporte de cerca de 360 bois grandes, partindo da Fazenda Sirga (próxima a Andrequicé, distrito de Três Marias, MG) em 19 de maio de 1952, com uma festa de despedida. O percurso cobriu mais de 40 léguas, passando por locais como Fazenda Tolda, Catatau, Riacho das Vacas, Meleiro, Barreiro do Mato, Fazenda Ventania do Juvenal, Riacho da Areia, Fazenda do Dr. José Saturnino, Cordisburgo, Toca do Urubu (onde encontraram repórteres da revista O Cruzeiro) e chegando a uma fazenda perto de Araçaí (MG). Participaram cerca de 8 ou 9 vaqueiros, incluindo nomes como Manuelzão (chefe da tropa e inspiração para personagens de Rosa), Tião Leite, Santana, Sebastião de Jesus, Gregório, Bindéia, Aquiles (um bom violeiro) e um rapazinho de 12 anos.",
        en: "Zito served as the group’s guide and cook. He went ahead of the herd, blowing a cattle horn to guide the animals and keeping up a constant conversation with Guimarães Rosa. Throughout the journey, he answered the writer’s many questions about the backlands, their traditions, dialects and everyday challenges. Rosa considered him the “cleverest” of the cowboys, and he became a primary source for the notes that would later become literary material. The expedition transported around 360 large cattle, departing from Fazenda Sirga, near Andrequicé, a district of Três Marias, Minas Gerais, on May 19, 1952, with a farewell celebration. The route covered more than forty leagues, passing through Fazenda Tolda, Catatau, Riacho das Vacas, Meleiro, Barreiro do Mato, Fazenda Ventania do Juvenal, Riacho da Areia, Fazenda do Dr. José Saturnino, Cordisburgo and Toca do Urubu, where they met reporters from O Cruzeiro magazine, before reaching a farm near Araçaí, Minas Gerais. Around eight or nine cowboys took part, including Manuelzão, the group’s leader and an inspiration for Rosa’s characters, Tião Leite, Santana, Sebastião de Jesus, Gregório, Bindéia, Aquiles, a skilled viola player, and a twelve-year-old boy.",
      },
      {
        pt: "Antecedentes Pessoais",
        en: "Personal Background",
        heading: true,
      },
      {
        pt: "Aos 74 anos, em uma entrevista concedida à Revista Cult em Três Marias (MG), Zito se descrevia como um vaqueiro experiente, mas com a memória afetada por uma doença recente. Apesar disso, era um leitor voraz: sabia muitos livros de cor e mantinha o hábito de registrar versos poéticos sobre o dia a dia. Durante a viagem, escrevia esses versos à noite, ao redor da fogueira, e os anotava nas cadernetas de Guimarães Rosa – hoje arquivadas no Instituto de Estudos Brasileiros (IEB) da USP. Sua família, enraizada no sertão mineiro, compartilhava o amor pelas histórias do campo, cheias de tropeadas, noites estreladas e desafios da vida rural. Como irmão mais velho de sua mãe, ele carrega esse legado familiar de mineiros autênticos, que você destacou na curiosidade que escrevemos juntos.",
        en: "At the age of 74, in an interview with Revista Cult in Três Marias, Minas Gerais, Zito described himself as an experienced cowboy whose memory had been affected by a recent illness. Even so, he was an avid reader: he knew many books by heart and regularly wrote poetic verses about daily life. During the journey, he wrote these verses at night around the campfire, recording them in Guimarães Rosa’s notebooks, now held at the University of São Paulo’s Institute of Brazilian Studies (IEB). His family, rooted in the Minas Gerais backlands, shared a love for country stories filled with cattle drives, starry nights and rural challenges. As my mother’s eldest brother, he carries this legacy of authentic people from Minas Gerais, highlighted in this literary curiosity.",
      },
      {
        pt: "Anedotas e Histórias Compartilhadas",
        en: "Anecdotes and Shared Stories",
        heading: true,
      },
      {
        pt: "Zito contava com humor sobre a viagem: quando os assuntos acabavam, ele “inventava bobagens”, como falar de mulheres e moças bonitas, só para manter a conversa fluindo – e Rosa anotava tudo! Ele ria ao lembrar que o escritor adorava versos, mas não os memorizava. Muitas das narrativas de Zito foram incorporadas às obras de Rosa, confirmando que o autor “escreveu tudo” baseado no que ouvia dos vaqueiros. Em depoimentos, Zito relembrava a camaradagem noturna, as fogueiras e como a expedição misturava trabalho árduo com momentos poéticos. Há menções a cenas específicas, como uma com um tucano, que Zito ajudou a descrever, tornando-se uma das mais belas em relatos de Rosa.  Essa conexão entre Zito e Guimarães Rosa não foi apenas profissional: transformou-se em uma ponte entre a vida real do sertão e a literatura brasileira, ecoando nas páginas de Grande Sertão: Veredas. Como familiar seu, ele simboliza esse amor incondicional pelas raízes mineiras que você valoriza tanto.",
        en: "Zito told humorous stories about the journey: when they ran out of things to discuss, he would “make up nonsense,” talking about women and pretty young ladies just to keep the conversation going — and Rosa wrote it all down! He laughed as he recalled that the writer loved verses but did not memorize them. Many of Zito’s stories found their way into Rosa’s works, confirming that the author “wrote everything” based on what he heard from the cowboys. In his recollections, Zito described their nighttime camaraderie, campfires and the way the expedition combined hard work with poetic moments. There are mentions of particular scenes, such as one involving a toucan, which Zito helped describe and which became one of the most beautiful in accounts of Rosa. This connection between Zito and Guimarães Rosa was more than professional: it became a bridge between real backcountry life and Brazilian literature, echoing in the pages of Grande Sertão: Veredas. As a member of our family, he symbolizes the unconditional love for our Minas Gerais roots that we cherish so much.",
      },
      {
        pt: "Versos de Zito na Expedição de 1952",
        en: "Zito’s Verses on the 1952 Expedition",
        heading: true,
      },
      {
        pt: 'João Henrique Ribeiro, o Seu Zito, foi uma figura central na expedição boiadeira de maio de 1952 pelo sertão mineiro, atuando como guia, cozinheiro e companheiro constante de João Guimarães Rosa. Durante a viagem, que inspirou obras como Grande Sertão: Veredas, Zito tinha o hábito de escrever versos todas as noites, após o trabalho com a tropa. Sentado à beira da fogueira, ele registrava em um caderno escolar os eventos do dia, transformando a rotina árdua dos vaqueiros em poesia simples e autêntica, com caligrafia arrastada e frases diretas. Esses versos narravam o cotidiano da jornada – como o movimento da boiada, as paradas em fazendas, as conversas e os desafios do sertão – e eram frequentemente compartilhados com Rosa, que os anotava em suas próprias cadernetas. Infelizmente, os versos originais de Zito não são amplamente publicados ou disponíveis em fontes online acessíveis. Eles estão preservados nas cadernetas de viagem de Guimarães Rosa, arquivadas no Instituto de Estudos Brasileiros (IEB) da USP, em São Paulo. Pesquisas em entrevistas, artigos e relatos (como o depoimento de Zito à Revista Cult em 2001) confirmam a existência desses escritos, mas não incluem transcrições completas ou citações verbatim. Zito mencionava que escrevia sobre "o que passava no dia" e que Rosa anotava tudo, mas ele próprio ria ao lembrar que inventava "bobagens" para manter as conversas fluindo, como histórias de mulheres ou detalhes da natureza.',
        en: "João Henrique Ribeiro, Seu Zito, was a central figure in the May 1952 cattle-driving expedition through the Minas Gerais backlands, serving as guide, cook and constant companion to João Guimarães Rosa. During the journey, which inspired works such as Grande Sertão: Veredas, Zito wrote verses every night after working with the herd. Sitting beside the campfire, he recorded the day’s events in a school notebook, turning the cowboys’ demanding routine into simple, authentic poetry with flowing handwriting and direct phrases. These verses described daily life on the journey — the herd’s movements, stops at farms, conversations and backcountry challenges — and were often shared with Rosa, who wrote them in his own notebooks. Unfortunately, Zito’s original verses are not widely published or available through accessible online sources. They are preserved in Guimarães Rosa’s travel notebooks, held at the University of São Paulo’s Institute of Brazilian Studies (IEB). Interviews, articles and accounts, including Zito’s 2001 testimony to Revista Cult, confirm these writings existed, but do not provide complete transcriptions or verbatim quotations. Zito said he wrote about “what happened during the day” and that Rosa noted everything down, laughing as he recalled inventing “nonsense” to keep conversations flowing, such as stories about women or details of nature.",
      },
      {
        pt: "Exemplo de Verso Coletado na Expedição",
        en: "An Example of Verse Collected on the Expedition",
        heading: true,
      },
      {
        pt: "Embora não atribuído exclusivamente a Zito, uma quadrinha (verso popular em quatro linhas) foi recolhida por Guimarães Rosa durante a viagem, entre os vaqueiros da tropa – possivelmente inspirada ou compartilhada por Zito, dado seu papel como poeta do grupo. Ela captura o espírito da vida sertaneja e aparece em Ave, Palavra (p. 114), um livro de Rosa com anotações e recolhimentos da expedição:",
        en: "Although not attributed exclusively to Zito, a four-line folk verse was collected by Guimarães Rosa among the cowboys during the journey — possibly inspired or shared by Zito, given his role as the group’s poet. It captures the spirit of backcountry life and appears in Ave, Palavra (p. 114), a book containing Rosa’s notes and material collected on the expedition:",
      },
      {
        pt: "Meu cavalo é minhas pernas,",
        en: "My horse is my legs,",
      },
      {
        pt: "meu arreio é meu assento,",
        en: "my saddle is my seat,",
      },
      {
        pt: "meu capote é minha cama,",
        en: "my coat is my bed,",
      },
      {
        pt: "meu perigo é meu sustento.",
        en: "my danger is my livelihood.",
      },
      {
        pt: "Essa quadrinha reflete o dia a dia dos vaqueiros: a dependência do cavalo, o uso prático dos equipamentos e a aceitação do risco como parte da existência no sertão. É um exemplo típico do tipo de poesia oral e improvisada que Zito e os outros produziam, misturando humor, sabedoria rural e observações da natureza.",
        en: "This verse reflects the cowboys’ daily life: their dependence on the horse, the practical use of their equipment and the acceptance of risk as part of existence in the backlands. It is a typical example of the oral, improvised poetry that Zito and the others created, blending humor, rural wisdom and observations of nature.",
      },
    ],
    gallery: [
      {
        image: rosaWriting.url,
        alt: {
          pt: "Guimarães Rosa escrevendo durante a viagem pelo sertão",
          en: "Guimarães Rosa writing during his backcountry journey",
        },
      },
      {
        image: rosaExhibition.url,
        alt: {
          pt: "Visitantes observam fotografias de Guimarães Rosa em uma exposição",
          en: "Visitors viewing photographs of Guimarães Rosa at an exhibition",
        },
      },
      {
        image: rosaJourney.url,
        alt: {
          pt: "Sala da exposição sobre a viagem de 1952 e a boiada",
          en: "Exhibition room about the 1952 journey and cattle drive",
        },
      },
    ],
  },
  {
    slug: "por-que-tanta-gente-esta-indo-morar-em-palhoca",
    image: "https://t4.ftcdn.net/jpg/05/22/88/47/360_F_522884795_Xn2e7NIUE934FSMMe2tIVhTKMViz8s4O.jpg",
    title: {
      pt: "Por que tanta gente está indo morar em Palhoça?",
      en: "Why are so many people moving to Palhoça?",
    },
    excerpt: {
      pt: "Uma cidade que cresceu mais de 60% em pouco mais de uma década e que vem atraindo quem busca uma nova forma de viver.",
      en: "A city that grew by more than 60% in just over a decade and continues to attract people looking for a different way of living.",
    },
    content: [
      {
        pt: "Não é impressão sua: Palhoça está crescendo. Entre 2010 e 2022, a população do município aumentou 62,1%, passando de 137 mil para mais de 222 mil habitantes. O crescimento foi tão expressivo que colocou Palhoça entre os municípios que mais cresceram no Brasil entre aqueles com mais de 100 mil habitantes.",
        en: "It is not just an impression: Palhoça is growing. Between 2010 and 2022, the city’s population increased by 62.1%, from around 137,000 to more than 222,000 residents. The growth was so significant that Palhoça became one of the fastest-growing Brazilian municipalities among cities with more than 100,000 inhabitants.",
      },
      {
        pt: "E o movimento não parece ter parado. Segundo as estimativas mais recentes do IBGE, Palhoça já ultrapassa a marca de 260 mil habitantes em 2026. Mas afinal, por que tantas pessoas estão escolhendo a cidade para morar?",
        en: "And the movement does not seem to have stopped. According to the latest IBGE estimates, Palhoça has already surpassed 260,000 inhabitants in 2026. But why are so many people choosing the city as their home?",
      },
      {
        pt: "Uma das respostas está na localização. Palhoça faz parte da Grande Florianópolis e está integrada à dinâmica da capital e dos municípios vizinhos. Para quem trabalha, estuda ou precisa acessar Florianópolis, morar em Palhoça pode significar estar perto de uma das principais regiões urbanas de Santa Catarina sem necessariamente viver no centro da capital.",
        en: "One of the answers is its location. Palhoça is part of Greater Florianópolis and is closely connected to the capital and neighbouring cities. For people who work, study or need access to Florianópolis, living in Palhoça can mean being close to one of Santa Catarina’s main urban regions without necessarily living in the capital itself.",
      },
      {
        pt: "Ao mesmo tempo, Palhoça oferece algo que muitas pessoas procuram quando decidem mudar de cidade: natureza por perto. O município reúne áreas urbanas, praias, montanhas, Mata Atlântica e diferentes paisagens ao longo do território. Regiões como Pinheira, Praia do Sonho e Guarda do Embaú ajudam a criar uma identidade que vai muito além da ideia de uma cidade-dormitório.",
        en: "At the same time, Palhoça offers something many people look for when moving to a new city: nature close by. The municipality combines urban areas, beaches, mountains, Atlantic Forest and different landscapes across its territory. Areas such as Pinheira, Praia do Sonho and Guarda do Embaú give the city an identity that goes far beyond the idea of a commuter town.",
      },
      {
        pt: "Existe também uma mudança de prioridade acontecendo. Para algumas pessoas, morar bem deixou de significar apenas estar perto do trabalho ou no bairro mais movimentado. Significa poder terminar o dia e, poucos minutos depois, estar perto do mar. Significa ter acesso à estrutura de uma região metropolitana e, ao mesmo tempo, encontrar momentos de silêncio, natureza e descanso.",
        en: "There is also a change in priorities taking place. For some people, living well no longer means simply being close to work or living in the busiest neighbourhood. It means being able to finish the day and, just a short while later, be close to the sea. It means having access to the infrastructure of a metropolitan region while still finding moments of quiet, nature and rest.",
      },
      {
        pt: "O crescimento populacional também acompanha uma cidade que já possui uma estrutura urbana significativa. O IBGE registra dezenas de milhares de trabalhadores em empregos formais, além de dezenas de escolas de ensino fundamental e médio espalhadas pelo município. Palhoça já não é apenas uma alternativa para quem quer fugir dos preços ou do ritmo de outras cidades: ela própria se tornou um dos grandes centros urbanos de Santa Catarina.",
        en: "Population growth is also accompanied by a city with a significant urban structure. IBGE records tens of thousands of formal workers, as well as dozens of primary and secondary schools throughout the municipality. Palhoça is no longer simply an alternative for people looking to escape the prices or pace of other cities: it has become one of the major urban centres in Santa Catarina itself.",
      },
      {
        pt: "Talvez seja justamente essa mistura que explique o movimento. De um lado, uma cidade em expansão, com comércio, serviços, trabalho e conexão com Florianópolis. Do outro, praias, natureza e a possibilidade de construir uma rotina menos distante dos pequenos prazeres do dia a dia.",
        en: "Perhaps this combination is exactly what explains the movement. On one side, a growing city with commerce, services, employment and connections to Florianópolis. On the other, beaches, nature and the possibility of building a routine closer to the small pleasures of everyday life.",
      },
      {
        pt: "Mudar de cidade nunca é apenas trocar um endereço. É escolher onde você quer acordar, quanto tempo quer passar no trânsito, que paisagem quer encontrar no fim do dia e, principalmente, que tipo de rotina deseja construir.",
        en: "Moving to a new city is never simply about changing an address. It is about choosing where you want to wake up, how much time you want to spend in traffic, what kind of landscape you want to see at the end of the day and, above all, what kind of routine you want to build.",
      },
      {
        pt: "E talvez seja por isso que tantas pessoas estejam olhando para Palhoça. Não necessariamente para viver uma vida completamente diferente, mas para viver a mesma vida em um lugar que ofereça novas possibilidades.",
        en: "And perhaps that is why so many people are looking towards Palhoça. Not necessarily to live a completely different life, but to live the same life in a place that offers new possibilities.",
      },
    ],
  },
  {
    slug: "florianopolis-o-novo-vale-do-silicio",
    image: "https://images.pexels.com/photos/7730287/pexels-photo-7730287.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: {
      pt: "Florianópolis se tornou o novo Vale do Silício?",
      en: "Has Florianópolis become the new Silicon Valley?",
    },
    excerpt: {
      pt: "Entre praias, startups e empresas de tecnologia, Florianópolis construiu um dos ecossistemas de inovação mais importantes do Brasil.",
      en: "Between beaches, startups and technology companies, Florianópolis has built one of Brazil’s most important innovation ecosystems.",
    },
    content: [
      {
        pt: "Você provavelmente já ouviu alguém chamar Florianópolis de “novo Vale do Silício”. A comparação pode parecer exagerada à primeira vista. Afinal, o que uma ilha brasileira tem a ver com a região que ajudou a criar empresas como Apple, Google e Meta? Mas quando olhamos para os números e para a história do ecossistema tecnológico da cidade, a comparação começa a fazer um pouco mais de sentido.",
        en: "You have probably heard someone call Florianópolis the “new Silicon Valley”. At first, the comparison may sound exaggerated. After all, what does a Brazilian island have in common with the region that helped create companies such as Apple, Google and Meta? But when we look at the numbers and the history of the city’s technology ecosystem, the comparison starts to make a little more sense.",
      },
      {
        pt: "Florianópolis não se tornou um polo de tecnologia de uma hora para outra. O ecossistema foi construído ao longo de décadas, aproximando universidades, pesquisadores, empreendedores, investidores, empresas e iniciativas públicas. A criação de centros de inovação, parques tecnológicos e programas de apoio ajudou a transformar a cidade em um ambiente onde novas empresas podem nascer, encontrar talentos e crescer.",
        en: "Florianópolis did not become a technology hub overnight. Its ecosystem was built over decades by bringing together universities, researchers, entrepreneurs, investors, companies and public initiatives. The creation of innovation centres, technology parks and support programmes helped transform the city into an environment where new companies can be created, find talent and grow.",
      },
      {
        pt: "E os resultados já são grandes. Segundo o Observatório ACATE, o setor de tecnologia representa atualmente cerca de 21% do PIB de Florianópolis e movimenta aproximadamente R$ 14 bilhões. A cidade também possui uma das maiores densidades de empresas de tecnologia do país, com 12,6 empresas do setor para cada mil habitantes.",
        en: "And the results are already significant. According to the ACATE Observatory, the technology sector currently represents around 21% of Florianópolis’ GDP and generates approximately R$ 14 billion in revenue. The city also has one of the highest densities of technology companies in Brazil, with 12.6 technology companies for every thousand inhabitants.",
      },
      {
        pt: "Não é apenas uma questão de empresas. Em 2024, Florianópolis recebeu oficialmente o título de Capital Nacional das Startups, por meio da Lei Federal nº 14.955. O reconhecimento colocou no papel algo que o mercado já vinha percebendo: a cidade havia construído uma concentração incomum de startups e negócios inovadores.",
        en: "It is not only about companies. In 2024, Florianópolis was officially recognised as Brazil’s National Capital of Startups through Federal Law No. 14,955. The title formalised something the market had already been noticing: the city had built an unusual concentration of startups and innovative businesses.",
      },
      {
        pt: "Outro ingrediente importante está nas universidades. A presença de instituições de ensino e pesquisa, especialmente da Universidade Federal de Santa Catarina, ajuda a formar profissionais qualificados e aproximar conhecimento científico do mercado. Quando pesquisadores, estudantes e empreendedores conseguem circular pelo mesmo ecossistema, ideias têm mais chances de sair do papel.",
        en: "Another important ingredient is the presence of universities. Educational and research institutions, especially the Federal University of Santa Catarina, help train qualified professionals and bring scientific knowledge closer to the market. When researchers, students and entrepreneurs can move within the same ecosystem, ideas have a greater chance of becoming real businesses.",
      },
      {
        pt: "É aí que entram lugares como o Sapiens Parque e os Centros de Inovação da ACATE. Eles funcionam como pontos de encontro para empresas, startups, investidores, pesquisadores e profissionais. Não são apenas escritórios bonitos: fazem parte de uma infraestrutura criada para estimular conexões, eventos, capacitação, inovação e novos negócios.",
        en: "This is where places such as Sapiens Parque and ACATE’s Innovation Centres come in. They act as meeting points for companies, startups, investors, researchers and professionals. They are not simply attractive office spaces: they are part of an infrastructure designed to encourage connections, events, training, innovation and new business opportunities.",
      },
      {
        pt: "E existe ainda uma característica que dificilmente pode ser colocada em uma planilha: qualidade de vida. Florianópolis consegue reunir um ecossistema profissional altamente conectado com uma rotina que inclui praias, trilhas, lagoas, natureza e uma vida cultural própria. Para profissionais de tecnologia e empreendedores, isso pode fazer diferença na hora de escolher onde viver e construir uma empresa.",
        en: "There is also a characteristic that is difficult to put into a spreadsheet: quality of life. Florianópolis combines a highly connected professional ecosystem with a lifestyle that includes beaches, trails, lagoons, nature and its own cultural scene. For technology professionals and entrepreneurs, this can make a difference when choosing where to live and build a company.",
      },
      {
        pt: "Talvez seja justamente essa combinação que tornou Florianópolis tão interessante para o setor. Não é apenas uma cidade onde existem empresas de tecnologia. É uma cidade onde tecnologia, empreendedorismo, universidades, investimento e qualidade de vida começaram a se encontrar no mesmo lugar.",
        en: "Perhaps it is precisely this combination that has made Florianópolis so interesting to the technology sector. It is not simply a city where technology companies exist. It is a city where technology, entrepreneurship, universities, investment and quality of life have begun to converge in the same place.",
      },
      {
        pt: "Então, Florianópolis é realmente o novo Vale do Silício? Talvez a comparação precise de algumas aspas. A cidade ainda está muito longe da escala econômica e global de Silicon Valley. Mas dizer que Florianópolis construiu um dos principais ecossistemas de tecnologia e startups do Brasil não é exagero. E os números mostram que essa história ainda está sendo escrita.",
        en: "So, is Florianópolis really the new Silicon Valley? Perhaps the comparison needs quotation marks. The city is still far from Silicon Valley’s global economic scale. But saying that Florianópolis has built one of Brazil’s leading technology and startup ecosystems is not an exaggeration. And the numbers suggest that this story is still being written.",
      },
      {
        pt: "No fim das contas, talvez o mais interessante não seja descobrir se Florianópolis será o próximo Vale do Silício. É perceber que uma cidade conhecida mundialmente pelas suas praias conseguiu construir, ao mesmo tempo, uma reputação como destino para quem quer criar, empreender e trabalhar com tecnologia.",
        en: "In the end, perhaps the most interesting question is not whether Florianópolis will become the next Silicon Valley. It is recognising that a city known worldwide for its beaches has simultaneously built a reputation as a destination for people who want to create, build businesses and work in technology.",
      },
    ],
  },
  {
    slug: "roteiro-de-praia-para-quem-odeia-multidao",
    image: tipTrail,
    title: {
      pt: "Roteiro de praia para quem odeia multidão",
      en: "A beach itinerary for those who hate crowds",
    },
    excerpt: {
      pt: "A Grande Florianópolis ainda guarda cantinhos tranquilos para quem sabe onde procurar.",
      en: "Greater Florianópolis still keeps quiet corners for those who know where to look.",
    },
    content: [
      {
        pt: "A Grande Florianópolis ainda guarda cantinhos tranquilos para quem sabe onde procurar. Praias escondidas entre trilhas, mirantes fora do circuito óbvio e pôr do sol sem competição por espaço na areia.",
        en: "Greater Florianópolis still keeps quiet corners for those who know where to look. Beaches hidden behind trails, viewpoints off the obvious circuit and sunsets with no competition for a spot on the sand.",
      },
      {
        pt: "A nossa dica de ouro: vá na maré certa, chegue cedo e leve água e lanche. As melhores experiências aqui não estão à venda — estão a uma caminhada de distância.",
        en: "Our golden tip: go with the right tide, arrive early and bring water and snacks. The best experiences here are not for sale — they are a walk away.",
      },
      {
        pt: "Na nossa página de Dicas reunimos trilhas, mirantes e praias que amamos. É o nosso conhecimento de gerações, compartilhado para que a sua viagem tenha o mesmo encanto das nossas.",
        en: "On our Tips page we gathered the trails, viewpoints and beaches we love. It is our generations-old knowledge, shared so that your trip has the same charm as ours.",
      },
    ],
  },
  {
    slug: "por-que-toda-familia-precisa-de-uma-casa-de-temporada",
    image: gallery3,
    title: {
      pt: "Por que toda família precisa de uma casa de temporada",
      en: "Why every family needs a vacation home",
    },
    excerpt: {
      pt: "Não é luxo: é investimento em memória.",
      en: "It is not luxury: it is an investment in memory.",
    },
    content: [
      {
        pt: "Não é luxo: é investimento em memória. Uma casa de temporada é onde a família finalmente divide o mesmo teto, o mesmo café e a mesma gargalhada — coisa rara na correria do dia a dia.",
        en: "It is not luxury: it is an investment in memory. A vacation home is where the family finally shares the same roof, the same coffee and the same laughter — a rare thing in the rush of everyday life.",
      },
      {
        pt: "Diferente de um hotel, uma casa inteira dá liberdade: cozinhar junto, acordar sem despertador, brincar no quintal, conversar até tarde sem hora para acabar. São detalhes pequenos que constroem lembranças grandes.",
        en: "Unlike a hotel, an entire house gives you freedom: cooking together, waking up without an alarm, playing in the yard, talking late into the night with no closing time. Small details that build big memories.",
      },
      {
        pt: "É por isso que cuidamos dos nossos refúgios como cuidamos da nossa própria casa. Porque sabemos que, por alguns dias, ela será a casa da sua família também.",
        en: "That is why we take care of our retreats the way we take care of our own home. Because we know that, for a few days, it will be your family home too.",
      },
    ],
  },
];

export const getPostBySlug = (slug: string | undefined) => blogPosts.find((post) => post.slug === slug);
