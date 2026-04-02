import { motion } from "motion/react";
import { Target, Eye, Heart } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { aboutTranslations } from "../../translations/about-translations";

export function MissionVision() {
  const { language } = useLanguage();
  const t = aboutTranslations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl pt-20"
          >
            <h1 className="mb-6">{t.missionVisionTitle}</h1>
            <p className="text-xl text-white/90">{t.missionVisionIntro}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-primary/10 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="mb-4">{t.missionTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.missionTextFull}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-secondary/10 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="mb-4">{t.visionTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.visionTextFull}</p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-accent/10 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mr-4">
                <Heart className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2>{t.coreValuesTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="mb-3">{t.value1}</h3>
                <p className="text-muted-foreground">{t.value1DescFull}</p>
              </div>
              <div>
                <h3 className="mb-3">{t.value3}</h3>
                <p className="text-muted-foreground">{t.value3DescFull}</p>
              </div>
              <div>
                <h3 className="mb-3">{t.value2}</h3>
                <p className="text-muted-foreground">{t.value2DescFull}</p>
              </div>
              <div>
                <h3 className="mb-3">{t.value5}</h3>
                <p className="text-muted-foreground">{t.value5Desc}</p>
              </div>
              <div>
                <h3 className="mb-3">{t.value6}</h3>
                <p className="text-muted-foreground">{t.value6Desc}</p>
              </div>
              <div>
                <h3 className="mb-3">{t.value7}</h3>
                <p className="text-muted-foreground">{t.value7Desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
