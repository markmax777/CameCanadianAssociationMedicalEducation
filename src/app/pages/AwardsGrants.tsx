import { motion } from "motion/react";
import { Link } from "react-router";
import { Award, TrendingUp, DollarSign } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { commonTranslations } from "../translations/common-translations";

export function AwardsGrants() {
  const { language } = useLanguage();
  const t = commonTranslations[language];

  const sections = [
    {
      icon: Award,
      title: t.awardsNominationsTitle,
      description: t.awardsNominationsDesc,
      path: "/awards-grants/awards",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: t.pastWinnersTitle,
      description: t.pastWinnersDesc,
      path: "/awards-grants/winners",
      color: "secondary",
    },
    {
      icon: DollarSign,
      title: t.educationGrantsTitle,
      description: t.educationGrantsDesc,
      path: "/awards-grants/grants",
      color: "accent",
    },
  ];

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
            <h1 className="mb-6">{t.awardsPageTitle}</h1>
            <p className="text-xl text-white/90">{t.awardsHeroCelebrating}</p>
          </motion.div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={section.path}
                  className="block bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary/30 transition-colors h-full"
                >
                  <div className={`w-16 h-16 bg-${section.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                    <section.icon className={`w-8 h-8 text-${section.color}`} />
                  </div>
                  <h2 className="mb-4">{section.title}</h2>
                  <p className="text-muted-foreground mb-6">{section.description}</p>
                  <span className="text-primary font-semibold">{t.learnMoreArrow}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
