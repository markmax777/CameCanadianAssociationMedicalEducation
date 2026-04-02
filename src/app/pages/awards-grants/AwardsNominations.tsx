import { motion } from "motion/react";
import { Award, Star, Trophy } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { awardsGrantsTranslations } from "../../translations/awards-grants-translations";

export function AwardsNominations() {
  const { language } = useLanguage();
  const t = awardsGrantsTranslations[language];

  const awards = [
    {
      name: t.award1Name,
      description: t.award1Desc,
      icon: Trophy,
      deadline: t.award1Deadline,
    },
    {
      name: t.award2Name,
      description: t.award2Desc,
      icon: Star,
      deadline: t.award2Deadline,
    },
    {
      name: t.award3Name,
      description: t.award3Desc,
      icon: Award,
      deadline: t.award3Deadline,
    },
  ];

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
            <h1 className="mb-6">{t.nominationsTitle}</h1>
            <p className="text-xl text-white/90">{t.nominationsSubtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <award.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-3">{award.name}</h2>
                    <p className="text-muted-foreground mb-4">{award.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {t.nominationDeadline}{" "}
                        <span className="font-semibold text-primary">{award.deadline}</span>
                      </span>
                      <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                        {t.submitNomination}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
