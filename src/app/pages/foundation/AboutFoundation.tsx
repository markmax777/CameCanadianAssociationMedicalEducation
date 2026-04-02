import { motion } from "motion/react";
import { Heart, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { foundationTranslations } from "../../translations/foundation-translations";

export function AboutFoundation() {
  const { language } = useLanguage();
  const t = foundationTranslations[language];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl pt-20"
          >
            <h1 className="mb-6">{t.aboutFoundationHeroTitle}</h1>
            <p className="text-xl text-white/90">{t.aboutFoundationHeroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <Heart className="w-12 h-12 text-primary mb-6" />
              <h3 className="mb-4">{t.ourMissionTitle}</h3>
              <p className="text-muted-foreground">{t.ourMissionDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <Target className="w-12 h-12 text-secondary mb-6" />
              <h3 className="mb-4">{t.ourFocusTitle}</h3>
              <p className="text-muted-foreground">{t.ourFocusDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <TrendingUp className="w-12 h-12 text-accent-foreground mb-6" />
              <h3 className="mb-4">{t.ourImpactTitle}</h3>
              <p className="text-muted-foreground">{t.ourImpactDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-6">{t.supportFoundationTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t.supportFoundationDesc}</p>
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold">
              {t.makeDonationButton}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
