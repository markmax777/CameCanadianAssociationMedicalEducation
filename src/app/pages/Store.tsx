import { motion } from "motion/react";
import { ShoppingBag, Book, Award, Shirt } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { commonTranslations } from "../translations/common-translations";

export function Store() {
  const { language } = useLanguage();
  const t = commonTranslations[language];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const products = [
    {
      name: language === 'fr' ? "T-shirt membre ACEM" : "CAME Member T-Shirt",
      price: "$25",
      description: language === 'fr' ? "T-shirt en coton de haute qualité avec logo ACEM" : "High-quality cotton t-shirt with CAME logo",
      icon: <Shirt className="w-12 h-12" />,
      category: language === 'fr' ? t.apparel : "Apparel",
    },
    {
      name: language === 'fr' ? "Manuel d'éducation médicale" : "Medical Education Handbook",
      price: "$45",
      description: language === 'fr' ? "Guide complet des meilleures pratiques en éducation médicale" : "Comprehensive guide to medical education best practices",
      icon: <Book className="w-12 h-12" />,
      category: language === 'fr' ? t.resources : "Resources",
    },
    {
      name: language === 'fr' ? "Actes de la conférence ICLEM" : "ICLEM Conference Proceedings",
      price: "$35",
      description: language === 'fr' ? "Recueil d'articles de recherche de l'ICLEM 2025" : "Collection of research papers from ICLEM 2025",
      icon: <Book className="w-12 h-12" />,
      category: t.publications,
    },
    {
      name: language === 'fr' ? "Épinglette ACEM" : "CAME Lapel Pin",
      price: "$15",
      description: language === 'fr' ? "Épinglette dorée avec logo ACEM" : "Gold-plated CAME logo lapel pin",
      icon: <Award className="w-12 h-12" />,
      category: language === 'fr' ? t.accessories : "Accessories",
    },
    {
      name: language === 'fr' ? "Sac de conférence" : "Conference Tote Bag",
      price: "$20",
      description: language === 'fr' ? "Sac en toile durable avec la marque ACEM" : "Durable canvas tote with CAME branding",
      icon: <ShoppingBag className="w-12 h-12" />,
      category: language === 'fr' ? t.accessories : "Accessories",
    },
    {
      name: language === 'fr' ? "Guide de leadership éducatif" : "Educational Leadership Guide",
      price: "$50",
      description: language === 'fr' ? "Ressource essentielle pour les leaders en éducation médicale" : "Essential resource for medical education leaders",
      icon: <Book className="w-12 h-12" />,
      category: language === 'fr' ? t.resources : "Resources",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ShoppingBag className="w-16 h-16 text-accent mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t.storeHeroTitle}</h1>
            <p className="text-xl text-white/90 max-w-3xl">{t.storeHeroDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">{t.featuredProducts}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.showSupport}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 mb-6 flex items-center justify-center">
                  <div className="text-primary">{product.icon}</div>
                </div>
                <div className="mb-2 text-sm text-secondary font-semibold">{product.category}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold">
                    {t.addToCart}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 text-center">
            <h3 className="text-3xl font-bold text-primary mb-6">{t.memberDiscounts}</h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">{t.memberDiscountDesc}</p>
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg">
              {t.becomeMember}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">{t.comingSoon2}</h2>
            <p className="text-xl text-gray-700 mb-8">{t.comingSoonDesc}</p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold">
                {t.notifyMe}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
