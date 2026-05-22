
# Separar Landing Page em Páginas com Roteamento

Hoje o site é uma única página (`/`) com todas as seções empilhadas e o menu faz scroll para âncoras. Vamos reorganizar em **5 rotas reais**, manter o Header/Footer/WhatsApp em todas e adicionar duas seções novas (Blog e Feedback) na Home.

## Nova estrutura de rotas

| Rota | Página | Conteúdo |
|---|---|---|
| `/` | Home | Hero + Galeria + **Blog** (novo) + **Feedback** (novo) |
| `/nossa-historia` | História | Texto sobre a família Betarello |
| `/refugios` | Refúgios | Componente `Properties` existente |
| `/dicas` | Dicas | Componente `Tips` existente |
| `/contato` | Contato | Formulário/infos de contato (e-mails e telefones) |

Header, Footer e botão WhatsApp continuam visíveis em todas as rotas.

## Mudanças necessárias

### 1. Roteamento (`src/App.tsx`)
Adicionar as novas rotas no `Routes`:
```
/ → Home
/nossa-historia → NossaHistoria
/refugios → Refugios
/dicas → Dicas
/contato → Contato
* → NotFound
```

### 2. Layout compartilhado
Criar `src/components/Layout.tsx` com `<Header />`, `<Outlet />`, `<Footer />`, `<WhatsAppButton />` — evita repetição. Usar `<Route element={<Layout />}>` envolvendo as 5 rotas.

### 3. Header (`src/components/Header.tsx`)
Trocar links de âncora (`#home`, `#story`...) por `<Link to="/...">` do react-router. Manter o destaque visual no link ativo via `NavLink`. Remover a função `scrollToSection`.

### 4. Páginas novas em `src/pages/`
- `Home.tsx` — Hero + Gallery + **BlogSection** + **FeedbackSection**
- `NossaHistoria.tsx` — texto institucional (usar conteúdo de Tips/About que já existe ou expandir)
- `Refugios.tsx` — wrapper do componente `Properties` com título de página
- `Dicas.tsx` — wrapper do componente `Tips`
- `Contato.tsx` — e-mail `portobetarello@gmail.com`, telefones `+55 (19) 99916-9958` e `+1 (216) 337-0184`, link Instagram, link WhatsApp

Renomear/substituir `src/pages/Index.tsx` pela nova `Home.tsx`.

### 5. Novos componentes
- `src/components/BlogSection.tsx` — título "Blog Betarello", 3 cards de posts do Substack:
  - "Arroz, feijão, moela e amor"
  - "Viajar também é um lugar dentro da mente"
  - "Curiosidade Literária: As Raízes Reais de 'Grande Sertão: Veredas'"
  - Botão "Ver Blog no Substack"
- `src/components/FeedbackSection.tsx` — título "Feedback", depoimento do Thiago (Palhoça) + 2 cards "Família hóspede • Verão no Sul do Brasil"

### 6. Traduções (`src/contexts/LanguageContext.tsx`)
Adicionar chaves PT/EN para:
- Novos itens de navegação (mesmas labels, mas agora apontam para rotas)
- Seção Blog (título, subtítulo, títulos dos 3 posts, descrições, CTA)
- Seção Feedback (título, subtítulo, depoimento)
- Página Contato (título, labels)
- Página Nossa História (título, parágrafos)

### 7. Footer (`src/components/Footer.tsx`)
Atualizar telefones para os novos (`+55 19 99916-9958` e `+1 216 337-0184`) e e-mail para `portobetarello@gmail.com`.

### 8. SEO por rota
Cada nova página recebe `<Helmet>` próprio com `title`, `description` e `canonical` (`/nossa-historia`, `/refugios`, `/dicas`, `/contato`). `react-helmet-async` já está instalado.

### 9. Tag Google Ads (`index.html`)
Adicionar o snippet `gtag.js` com ID `AW-18025068618` no `<head>`, mais o JSON-LD `LodgingBusiness` que você enviou.

## Detalhes técnicos
- Scroll to top ao trocar de rota: pequeno componente `ScrollToTop` que escuta `useLocation` e dispara `window.scrollTo(0,0)`.
- Manter design system atual (tokens HSL, `container-luxury`, fontes display/body).
- Componentes `Properties` e `Tips` continuam reutilizáveis, só ficam agora dentro de páginas dedicadas em vez de seções da landing.

## Fora do escopo
- Não vamos criar páginas individuais por refúgio nem por post do blog (links do blog levam ao Substack externamente).
- Não vamos mudar paleta, tipografia ou imagens.
