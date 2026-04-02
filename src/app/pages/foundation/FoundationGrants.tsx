import { motion } from "motion/react";
import { DollarSign, BookOpen, Users } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { foundationTranslations } from "../../translations/foundation-translations";

export function FoundationGrants() {
  const { language } = useLanguage();
  const t = foundationTranslations[language];

  const grantPrograms = [
    {
      icon: BookOpen,
      title: t.grantProgram1Title,
      amount: t.grantProgram1Amount,
      description: t.grantProgram1Desc,
    },
    {
      icon: Users,
      title: t.grantProgram2Title,
      amount: t.grantProgram2Amount,
      description: t.grantProgram2Desc,
    },
    {
      icon: DollarSign,
      title: t.grantProgram3Title,
      amount: t.grantProgram3Amount,
      description: t.grantProgram3Desc,
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
            <h1 className="mb-6">{t.foundationGrantsHeroTitle}</h1>
            <p className="text-xl text-white/90">{t.foundationGrantsHeroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {grantPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-2">{program.title}</h2>
                    <div className="text-primary font-semibold mb-3">{program.amount}</div>
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                      {t.learnMoreApply}
                    </button>
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
