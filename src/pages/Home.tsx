import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import BlogSection from "@/components/BlogSection";
import FeedbackSection from "@/components/FeedbackSection";
import RetreatMoment from "@/components/RetreatMoment";

const Home = () => {
  const { language } = useLanguage();

  const seo = {
    pt: {
      title: "Porto Betarello | Aluguel de Refúgios em Florianópolis e São Paulo",
      description:
        "Casas e apartamentos confortáveis e aconchegantes da família Betarello em Florianópolis e interior de São Paulo. Sinta-se em casa nas suas férias.",
    },
    en: {
      title: "Porto Betarello | Vacation Rentals in Florianópolis and São Paulo",
      description:
        "Comfortable, cozy houses and apartments by the Betarello family in Florianópolis and São Paulo countryside. Feel at home on your vacation.",
    },
  }[language];

  return (
    <>
      <Helmet>
        <html lang={language === "pt" ? "pt-BR" : "en"} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="/" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Hero />
      <Gallery />
      <RetreatMoment />
      <BlogSection />
      <FeedbackSection />
    </>
  );
};

export default Home;
