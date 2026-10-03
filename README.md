# Porto Betarello

Crie a página inicial (home page) completa do site "Porto Betarello" – aluguel de luxo de casas e apartamentos de férias da família Betarello na Grande Florianópolis e interior de São Paulo.

O site deve ser:
- Totalmente responsivo (mobile-first)
- SEO-friendly (meta tags completas, headings semânticos, alt em todas as imagens, estrutura limpa)
- Bilíngue: Português Brasileiro (padrão) + Inglês (com switcher de idioma no header – botão simples com bandeira BR/UK que troca todo o texto via JavaScript)
- Código separado em 3 arquivos: index.html, style.css e script.js
- Estilo visual chique, aconchegante e luxuoso ao mesmo tempo: calor humano da família + sofisticação premium

Paleta de cores obrigatória (usar exatamente estes códigos hex):
- #000985 (azul profundo – títulos principais, botões primários)
- #162db0 (azul médio – hover, links, detalhes)
- #d8a900 (dourado escuro – linhas decorativas, ícones premium)
- #f5cc00 (dourado claro – destaques sutis, CTAs secundários)
- #ebebeb (cinza claro – fundos suaves, cards, separadores)

Tipografia:
- Títulos: Playfair Display (Google Fonts) – elegante e serifada
- Corpo: Montserrat (Google Fonts) – clean e moderna

Estrutura da Home Page (one-page com scroll suave):

1. Header fixo
   - Logo "Porto Betarello" à esquerda
   - Menu simples: Início | Nossa História | Refúgios | Dicas da Família | Contato
   - Switcher de idioma (BR/EN) à direita

2. Hero Section (tela cheia)
   - Imagem de fundo grande e impactante (use placeholder de alta qualidade: família em pôr do sol na praia ou varanda luxuosa)
   - Overlay sutil escuro para legibilidade
   - Título grande: "Porto Betarello" (PT) / "Porto Betarello" (EN)
   - Subtítulo emocional: 
     PT: "Refúgios de luxo preparados pela família Betarello para você desacelerar, reconectar e viver o melhor da vida."
     EN: "Luxury retreats crafted by the Betarello family for you to slow down, reconnect, and experience the best of life."
   - Texto curto abaixo (sobre os benefícios psicológicos da viagem):
     PT: "Viajar não é apenas mudar de lugar — é restaurar a mente, reduzir o estresse e criar memórias que duram para sempre. Nossos refúgios foram pensados para oferecer exatamente isso: paz, conforto e bem-estar em meio à natureza."
     EN: "Traveling is not just changing places — it restores the mind, reduces stress, and creates memories that last forever. Our retreats were designed to offer exactly that: peace, comfort, and well-being amidst nature."
   - Botão CTA: "Descubra nossos refúgios" / "Discover our retreats" (cor #000985, hover #162db0)

3. Seção "Mini Galeria"
   - Título: "Momentos Porto Betarello" / "Porto Betarello Moments"
   - Carrossel horizontal responsivo com 6–8 fotos (use placeholders de imóveis luxuosos, família em trilhas, pôr do sol, interiores aconchegantes)
   - Setas esquerda/direita para navegar (visíveis no desktop, swipe no mobile)
   - Ao clicar em qualquer foto → abre lightbox (modal) com imagem grande e navegação entre as fotos
   - Legendas sutis em cada foto

4. Seção "Nossos Refúgios"
   - Grid responsivo (1 coluna mobile, 2–3 desktop) com 4 cards de imóveis (teasers)
   - Cada card: foto grande, nome do imóvel (ex: "Refúgio da Lagoa"), localização breve, ícone de quartos/banheiros
   - Botão em cada card: "Ver detalhes e reservar" / "View details and book" → link para loja online (use placeholder # para agora)
   - Fundo dos cards #ebebeb com borda sutil dourada

5. Seção "Dicas da Família" (breve teaser)
   - 3 cards com dicas (ex: trilha, restaurante, praia secreta)
   - Botão "Ver todas as dicas"

6. Footer
   - Logo + texto curto sobre a família
   - Links sociais: Instagram (ícone)
   - Contato: e-mail, telefone
   - Direitos reservados © 2025 Família Betarello

Elementos adicionais obrigatórios:
- Botão flutuante fixo do WhatsApp (canto inferior direito – ícone verde com balão, link para wa.me com mensagem pré-pronta)
- Links do Instagram no footer e possivelmente no header
- Animações suaves no scroll (fade-in das seções)
- Carregamento rápido e acessível

Gere o código completo em 3 arquivos separados:
- index.html (com conteúdo bilíngue em data-attributes ou objeto JS)
- style.css (todo o estilo)
- script.js (troca de idioma, carrossel, lightbox, scroll suave, botão WhatsApp)

Use apenas HTML5, CSS3 e vanilla JavaScript (sem bibliotecas externas exceto Google Fonts).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c2080289-6074-49fa-b802-0d8a68826510).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
