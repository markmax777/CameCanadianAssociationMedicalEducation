import { motion } from "motion/react";
import { Calendar, Users, Award, BookOpen } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { aboutTranslations } from "../../translations/about-translations";

export function HistoryImpact() {
  const { language } = useLanguage();
  const t = aboutTranslations[language];

  const milestones = [
    { year: "1975", title: t.milestone1Title, description: t.milestone1Desc },
    { year: "1985", title: t.milestone2Title, description: t.milestone2Desc },
    { year: "2000", title: t.milestone3Title, description: t.milestone3Desc },
    { year: "2010", title: t.milestone4Title, description: t.milestone4Desc },
    { year: "2015", title: t.milestone5Title, description: t.milestone5Desc },
    { year: "2020", title: t.milestone6Title, description: t.milestone6Desc },
  ];

  const impactStats = [
    { icon: Users, number: "2,500+", label: t.statsActiveMembers },
    { icon: Award, number: "500+", label: t.statsAwardsGiven },
    { icon: BookOpen, number: "1,000+", label: t.statsPrograms },
    { icon: Calendar, number: "48", label: t.statsYears },
  ];

  const legacyItems = [
    { title: t.educationalExcellenceTitle, description: t.educationalExcellenceDesc },
    { title: t.leadershipDevTitle, description: t.leadershipDevDesc },
    { title: t.researchInnovationTitle, description: t.researchInnovationDesc },
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
            <h1 className="mb-6">{t.historyImpactTitle}</h1>
            <p className="text-xl text-white/90">{t.historyImpactSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{t.journeyTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.journeySubtitle}</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-2xl p-6">
                  <h3 className="mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t.legacyTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.legacySubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {legacyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
