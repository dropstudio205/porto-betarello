import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { z } from 'zod';
import {
  Mail,
  Phone,
  Instagram,
  MessageCircle,
  Send,
  Lock,
  CheckCircle2,
  Home,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const WHATSAPP_NUMBER = '5519999169958';

const leadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(6).max(40),
  message: z.string().trim().min(1).max(1000),
});

const Contato = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [popupOpen, setPopupOpen] = useState(false);

  const seo = {
    pt: {
      title: 'Contato | Porto Betarello',
      description:
        'Fale com a família Betarello pelo WhatsApp, Airbnb ou Instagram. Atendimento personalizado para sua próxima estadia.',
    },
    en: {
      title: 'Contact | Porto Betarello',
      description:
        'Reach the Betarello family via WhatsApp, Airbnb or Instagram. Personalized service for your next stay.',
    },
  }[language];

  const txt = {
    heroTitle: { pt: 'Vamos Conversar?', en: "Let's Talk?" },
    heroSubtitle: {
      pt: 'Estamos aqui para transformar sua próxima viagem em uma experiência inesquecível. Entre em contato e descubra como nossos refúgios podem ser perfeitos para você.',
      en: 'We are here to turn your next trip into an unforgettable experience. Get in touch and discover how our retreats can be perfect for you.',
    },
    ctaTitle: { pt: 'Por Que Escolher Nossos Refúgios?', en: 'Why Choose Our Retreats?' },
    ctaP1: {
      pt: 'Há mais de uma década, a família Betarello abre as portas de suas casas para pessoas que buscam mais do que apenas hospedagem. Oferecemos experiências autênticas, onde cada detalhe é pensado com carinho e cada hóspede é tratado como parte da família.',
      en: 'For over a decade, the Betarello family has opened the doors of their homes to people looking for more than just lodging. We offer authentic experiences, where every detail is thought of with care and every guest is treated as part of the family.',
    },
    ctaHighlight: {
      pt: 'Não é apenas sobre onde você fica, mas sobre como você se sente. Nossos refúgios são preparados para que você viva momentos de verdadeira conexão, descanso e felicidade.',
      en: "It's not just about where you stay, but how you feel. Our retreats are prepared so you can live moments of true connection, rest and happiness.",
    },
    ctaP2: {
      pt: 'Entre em contato conosco e vamos juntos planejar sua próxima escapada perfeita.',
      en: "Contact us and let's plan your next perfect getaway together.",
    },
    channels: {
      whatsapp: {
        title: { pt: 'WhatsApp', en: 'WhatsApp' },
        desc: {
          pt: 'Fale diretamente conosco. Resposta rápida e atendimento personalizado.',
          en: 'Talk directly to us. Quick response and personalized service.',
        },
      },
      airbnb: {
        title: { pt: 'Airbnb', en: 'Airbnb' },
        desc: {
          pt: 'Veja avaliações, disponibilidade e faça sua reserva com segurança.',
          en: 'Check reviews, availability and book safely.',
        },
      },
      instagram: {
        title: { pt: 'Instagram', en: 'Instagram' },
        desc: {
          pt: 'Acompanhe nossos refúgios, dicas de viagem e momentos especiais.',
          en: 'Follow our retreats, travel tips and special moments.',
        },
      },
    },
    formTitle: { pt: 'Envie uma Mensagem', en: 'Send a Message' },
    formSubtitle: {
      pt: 'Preencha o formulário abaixo e entraremos em contato pelo WhatsApp o mais breve possível.',
      en: 'Fill out the form below and we will contact you via WhatsApp as soon as possible.',
    },
    fName: { pt: 'Seu nome', en: 'Your name' },
    fPhone: { pt: 'Seu telefone', en: 'Your phone' },
    fMessage: { pt: 'Sua mensagem', en: 'Your message' },
    fNamePh: { pt: 'Como podemos te chamar?', en: 'How can we call you?' },
    fPhonePh: { pt: '(00) 00000-0000', en: 'Phone number' },
    fMessagePh: {
      pt: 'Conte-nos sobre sua viagem...',
      en: 'Tell us about your trip...',
    },
    fSubmit: { pt: 'Enviar pelo WhatsApp', en: 'Send via WhatsApp' },
    fNote: {
      pt: 'Seus dados são usados apenas para responder sua mensagem.',
      en: 'Your data is only used to reply to your message.',
    },
    popupTitle: { pt: 'Mensagem Enviada!', en: 'Message Sent!' },
    popupDesc: {
      pt: 'Obrigado pelo contato! Você será redirecionado ao WhatsApp agora. Entraremos em contato assim que possível.',
      en: 'Thanks for reaching out! You will be redirected to WhatsApp now. We will get back to you as soon as possible.',
    },
    popupClose: { pt: 'Fechar', en: 'Close' },
    faqTitle: { pt: 'Perguntas Frequentes', en: 'Frequently Asked Questions' },
    faqSubtitle: {
      pt: 'Tudo o que você precisa saber sobre nossos refúgios',
      en: 'Everything you need to know about our retreats',
    },
    directTitle: { pt: 'Outras Formas de Contato', en: 'Other Ways to Reach Us' },
    fillRequired: { pt: 'Preencha todos os campos', en: 'Please fill in all fields' },
  };

  const channels = [
    {
      key: 'whatsapp' as const,
      icon: MessageCircle,
      color: 'text-[#25d366]',
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
    {
      key: 'airbnb' as const,
      icon: Home,
      color: 'text-[#FF5A5F]',
      href: 'https://www.airbnb.com',
    },
    {
      key: 'instagram' as const,
      icon: Instagram,
      color: 'text-[#E4405F]',
      href: 'https://instagram.com/porto_betarello',
    },
  ];

  const faqs = [
    {
      q: { pt: 'Como faço para reservar um refúgio?', en: 'How do I book a retreat?' },
      a: {
        pt: 'Você pode reservar diretamente pelo nosso WhatsApp para um atendimento personalizado.',
        en: 'You can book directly via our WhatsApp for personalized service.',
      },
    },
    {
      q: { pt: 'Qual a política de cancelamento?', en: 'What is the cancellation policy?' },
      a: {
        pt: 'Nossa política varia de acordo com o refúgio e a época do ano. Geralmente oferecemos cancelamento flexível até 7 dias antes do check-in. Entre em contato para conhecer os detalhes de cada propriedade.',
        en: 'Our policy varies by retreat and season. We usually offer flexible cancellation up to 7 days before check-in. Contact us for property-specific details.',
      },
    },
    {
      q: {
        pt: 'Os refúgios aceitam animais de estimação?',
        en: 'Do the retreats accept pets?',
      },
      a: {
        pt: 'Infelizmente não aceitamos animais de estimação. Nós amamos pets, mas como nossa rotatividade aumentou muito, tivemos que restringir a aceitação para atender melhor nossos hóspedes.',
        en: "Unfortunately we don't accept pets. We love them, but as our turnover has grown, we had to restrict pets to better serve our guests.",
      },
    },
    {
      q: { pt: 'O que está incluído na estadia?', en: "What's included in the stay?" },
      a: {
        pt: 'Roupas de cama e toalhas, utensílios de cozinha, fechadura eletrônica e chave eletrônica para sua independência, eletrodomésticos (cafeteira, geladeira, fogão, panela e utensílios de cozinha). Aconselhamos trazer seu travesseiro, pois uma boa noite de sono é essencial.',
        en: 'Bed linens and towels, kitchen utensils, electronic lock for your independence, appliances (coffee maker, fridge, stove, pots and kitchen utensils). We recommend bringing your own pillow — a good night of sleep matters.',
      },
    },
    {
      q: {
        pt: 'Vocês oferecem descontos para estadias longas?',
        en: 'Do you offer discounts for long stays?',
      },
      a: {
        pt: 'Descontos são negociáveis, dependendo de cada caso. Entre em contato pelo WhatsApp (19) 9 9916-9958 para atendimento personalizado.',
        en: 'Discounts are negotiable case by case. Contact us via WhatsApp at +55 (19) 9 9916-9958 for personalized service.',
      },
    },
    {
      q: { pt: 'Como funciona o check-in e check-out?', en: 'How does check-in/check-out work?' },
      a: {
        pt: 'Check-in/out 100% contactless via fechadura eletrônica, para sua flexibilidade e segurança.',
        en: '100% contactless check-in/out via electronic lock, for your flexibility and security.',
      },
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      toast({ title: txt.fillRequired[language], variant: 'destructive' });
      return;
    }
    const { name, phone, message } = parsed.data;
    const body = `Olá! Meu nome é ${name}.\nTelefone: ${phone}\n\n${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
    setPopupOpen(true);
    window.open(url, '_blank', 'noopener,noreferrer');
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="/contato" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=1800&q=80"
          alt={txt.heroTitle[language]}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-luxury relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground"
        >
          <span className="mb-6 h-0.5 w-20 bg-accent" />
          <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            {txt.heroTitle[language]}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base text-primary-foreground/90 md:text-lg">
            {txt.heroSubtitle[language]}
          </p>
        </motion.div>
      </section>

      {/* CTA narrative */}
      <section className="bg-gradient-to-b from-muted/40 to-background py-20 md:py-28">
        <div className="container-luxury">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              {txt.ctaTitle[language]}
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light" />
            <p className="mt-8 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              {txt.ctaP1[language]}
            </p>
            <div className="my-8 rounded-2xl border-l-4 border-accent bg-card p-6 text-left font-body text-base italic text-primary shadow-elegant md:text-lg">
              {txt.ctaHighlight[language]}
            </div>
            <p className="font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              {txt.ctaP2[language]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact channel cards */}
      <section className="pb-20 md:pb-28">
        <div className="container-luxury">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {channels.map((c, i) => {
              const meta = txt.channels[c.key];
              return (
                <motion.a
                  key={c.key}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group block rounded-2xl border-2 border-transparent bg-card p-8 text-center shadow-elegant transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-card"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-gradient-to-br from-muted to-background">
                    <c.icon className={`h-7 w-7 ${c.color}`} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary">
                    {meta.title[language]}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                    {meta.desc[language]}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent/10" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary-foreground/5" />
        <div className="container-luxury relative z-10">
          <motion.div {...fadeUp} className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mx-auto mb-6 block h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light" />
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              {txt.formTitle[language]}
            </h2>
            <p className="mt-4 font-body text-base text-primary-foreground/75">
              {txt.formSubtitle[language]}
            </p>
          </motion.div>

          <motion.form
            {...fadeUp}
            onSubmit={handleSubmit}
            className="mx-auto max-w-2xl rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur-md md:p-12"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs font-semibold uppercase tracking-widest text-accent">
                  {txt.fName[language]}
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={txt.fNamePh[language]}
                  className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3.5 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition focus:border-accent focus:bg-primary-foreground/15"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs font-semibold uppercase tracking-widest text-accent">
                  {txt.fPhone[language]}
                </label>
                <input
                  type="tel"
                  required
                  maxLength={40}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder={txt.fPhonePh[language]}
                  className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3.5 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition focus:border-accent focus:bg-primary-foreground/15"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <label className="font-body text-xs font-semibold uppercase tracking-widest text-accent">
                {txt.fMessage[language]}
              </label>
              <textarea
                required
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={txt.fMessagePh[language]}
                rows={5}
                className="resize-none rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3.5 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition focus:border-accent focus:bg-primary-foreground/15"
              />
            </div>

            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-body text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-gold transition-all hover:-translate-y-0.5 hover:bg-gold-light"
            >
              <Send className="h-4 w-4" />
              {txt.fSubmit[language]}
            </button>

            <p className="mt-4 flex items-center justify-center gap-2 font-body text-xs text-primary-foreground/50">
              <Lock className="h-3 w-3" />
              {txt.fNote[language]}
            </p>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container-luxury">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              {txt.faqTitle[language]}
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-accent to-gold-light" />
            <p className="mt-4 font-body text-base text-muted-foreground">
              {txt.faqSubtitle[language]}
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="overflow-hidden rounded-xl border-none bg-card shadow-elegant"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-body text-base font-medium text-primary hover:bg-muted/50 hover:no-underline">
                    {f.q[language]}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 font-body text-sm leading-relaxed text-muted-foreground">
                    {f.a[language]}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Direct contact */}
      <section className="bg-background py-20 md:py-24">
        <div className="container-luxury text-center">
          <h3 className="font-display text-2xl font-semibold text-primary md:text-3xl">
            {txt.directTitle[language]}
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 font-body text-base text-foreground">
            <a
              href="mailto:portobetarello@gmail.com"
              className="flex items-center gap-2 transition hover:text-accent"
            >
              <Mail className="h-5 w-5 text-accent" />
              portobetarello@gmail.com
            </a>
            <a
              href="tel:+5519999169958"
              className="flex items-center gap-2 transition hover:text-accent"
            >
              <Phone className="h-5 w-5 text-accent" />
              +55 (19) 9 9916-9958
            </a>
            <a
              href="tel:+12163370184"
              className="flex items-center gap-2 transition hover:text-accent"
            >
              <Phone className="h-5 w-5 text-accent" />
              +1 (216) 337-0184
            </a>
          </div>
        </div>
      </section>

      {/* Success popup */}
      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#25d366] to-[#1ab954] shadow-lg">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </div>
            <DialogTitle className="text-center font-display text-2xl text-primary">
              {txt.popupTitle[language]}
            </DialogTitle>
            <DialogDescription className="text-center font-body text-sm leading-relaxed">
              {txt.popupDesc[language]}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button onClick={() => setPopupOpen(false)}>{txt.popupClose[language]}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Contato;
